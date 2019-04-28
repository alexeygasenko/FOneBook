import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';
import validator from 'email-validator';
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import './EditProfile.css';

export class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      name: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      errors: {},
    };
  }

  editProfileHandler = () => {
    this.setState({ isEditing: true });
  };

  inputChangeHandler = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  componentDidMount() {
    this.props.getUserProfile(this.props.auth.user.id);
  }

  updateNameHandler = () => {
    const { name } = this.state;
    if (name === this.props.user.name) {
      this.setState({
        errors: {
          name: 'Новый никнейм совпадает с предыдущим!',
        },
      });
    } else if (name.length < 4) {
      this.setState({
        errors: {
          name: 'Новый никнейм должен быть длинной не менее 4 символов!',
        },
      });
    } else {
      this.props.updateName(this.props.user._id, this.state.name);
    }
  };

  updateEmailHandler = () => {
    const { email } = this.state;
    if (email === this.props.user.email) {
      this.setState({
        errors: {
          email: 'Новый Email совпадает с предыдущим!',
        },
      });
    } else if (validator.validate(email)) {
      this.props.updateName(this.props.user._id, email);
    } else {
      this.setState({
        errors: {
          email: 'Некорректный Email',
        },
      });
    }
  };

  updatePasswordHandler = () => {
    const { oldPassword, newPassword, newPasswordConfirm } = this.state;
    if (newPassword !== newPasswordConfirm) {
      this.setState({
        errors: {
          passwordConfirm: 'Пароль и подтверждение пароля должны совпадать!',
        },
      });
    } else if (oldPassword.length < 8) {
      this.setState({
        errors: {
          password: 'Пароль должен быть длинной не менее 8 символов!',
        },
      });
    } else if (newPassword.length < 8) {
      this.setState({
        errors: {
          passwordConfirm: 'Пароль должен быть длинной не менее 8 символов!',
        },
      });
    } else {
      this.props.updatePassport(this.props.user._id, oldPassword, newPassword);
    }
  };

  render() {
    const { isEditing, errors } = this.state;
    const { isAuthenticated } = this.props.auth;
    const { user } = this.props;

    if (!isAuthenticated) {
      return (
        <React.Fragment>
          <Helmet>
            <title>Профиль - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <CustomNavbar />
          <Error error="Чтобы зайти в свой профиль, сперва авторизуйтесь!" />
          <Footer />
        </React.Fragment>
      );
    }

    const editComponent = (
      <React.Fragment>
        <FormGroup className="profile-email">
          <Label>Изменить никнейм:</Label>
          <Input
            className={classnames('profile-input', {
              'is-invalid': errors.name,
            })}
            name="name"
            id="name"
            placeholder={user.name}
            value={this.state.name}
            onChange={this.inputChangeHandler}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          <Label>Осталось попыток: {user.nameChangeAttempts}</Label>
          {user.nameChangeAttempts !== 0 ? (
            <Button
              className="profile-update-btn"
              onClick={this.updateNameHandler}
            >
              Обновить никнейм
            </Button>
          ) : null}
        </FormGroup>
        <FormGroup className="profile-email">
          <Label>Изменить Email:</Label>
          <Input
            className={classnames('profile-input', {
              'is-invalid': errors.email,
            })}
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
            value={this.state.email}
            onChange={this.inputChangeHandler}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
          <Button
            className="profile-update-btn"
            onClick={this.updateEmailHandler}
          >
            Обновить Email
          </Button>
        </FormGroup>
        <FormGroup className="profile-password">
          <Label>Изменить пароль:</Label>
          <Input
            className={classnames('profile-input', {
              'is-invalid': errors.password,
            })}
            type="password"
            name="oldPassword"
            id="old-password"
            placeholder="Введите старый пароль"
            value={this.state.oldPassword}
            onChange={this.inputChangeHandler}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
          <Input
            className={classnames('profile-input', {
              'is-invalid': errors.passwordConfirm,
            })}
            type="password"
            name="newPassword"
            id="new-password"
            placeholder="Введите новый пароль"
            value={this.state.newPassword}
            onChange={this.inputChangeHandler}
          />
          {errors.passwordConfirm && (
            <div className="invalid-feedback">{errors.passwordConfirm}</div>
          )}
          <Input
            className={classnames('profile-input', {
              'is-invalid': errors.passwordConfirm,
            })}
            type="password"
            name="newPasswordConfirm"
            id="new-password-again"
            placeholder="Повторите новый пароль"
            value={this.state.newPasswordConfirm}
            onChange={this.inputChangeHandler}
          />
          {errors.passwordConfirm && (
            <div className="invalid-feedback">{errors.passwordConfirm}</div>
          )}
          <Button
            className="profile-update-btn"
            onClick={this.updatePasswordHandler}
          >
            Обновить пароль
          </Button>
        </FormGroup>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Helmet>
          <title>Профиль - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <div className="profile">
          <Form>
            {user.isModerator ? (
              <FormGroup>
                <Button className="profile-update-btn">Добавить пост</Button>
              </FormGroup>
            ) : null}
            <FormGroup className="profile-title">
              <Label>Профиль пользователя {user.name}</Label>
            </FormGroup>
            <FormGroup className="profile-picture">
              <img
                className="more-author-img"
                src={user.avatar}
                alt="Профиль"
              />
              <div className="profile-picture-desc">
                Изменить аватар можно в системе{' '}
                <a href="https://ru.gravatar.com/">Gravatar</a>
              </div>
            </FormGroup>
            <FormGroup className="profile-rating">
              <Label>
                Рейтинг:{' '}
                <span className="profile-rating-number">{user.rating}</span>
              </Label>
            </FormGroup>
            {!isEditing ? (
              <Button
                className="profile-update-btn"
                onClick={this.editProfileHandler}
              >
                Редактировать профиль
              </Button>
            ) : (
              editComponent
            )}
          </Form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
