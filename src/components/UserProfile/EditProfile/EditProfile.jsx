import React from 'react';
/* import { Link } from 'react-router-dom'; */
import { Helmet } from 'react-helmet';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    this.props.getUserProfile(this.props.auth.user.id);
  }

  updateNameHandler = () => {
    this.props.updateName(this.props.user._id, this.state.name);
  };

  updateEmailHandler = () => {
    this.props.updateName(this.props.user._id, this.state.email);
  };

  updatePasswordHandler = () => {
    this.props.updatePassport(
      this.props.user._id,
      this.state.oldPassword,
      this.state.newPassword
    );
  };

  render() {
    const { isEditing } = this.state;
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
            className="profile-input"
            name="nickname"
            id="nickname"
            placeholder={user.name}
          />
          <Label>Осталось попыток: {user.nameChangeAttempts}</Label>
          <Button
            className="profile-update-btn"
            onClick={this.updateNameHandler}
          >
            Обновить никнейм
          </Button>
        </FormGroup>
        <FormGroup className="profile-email">
          <Label>Изменить Email:</Label>
          <Input
            className="profile-input"
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
          />
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
            className="profile-input"
            type="password"
            name="oldPassword"
            id="old-password"
            placeholder="Введите старый пароль"
          />
          <Input
            className="profile-input"
            type="password"
            name="newPassword"
            id="new-password"
            placeholder="Введите новый пароль"
          />
          <Input
            className="profile-input"
            type="password"
            name="newPasswordConfirm"
            id="new-password-again"
            placeholder="Повторите новый пароль"
          />
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
