import React from 'react';
/* import { Link } from 'react-router-dom'; */
import { Helmet } from 'react-helmet';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import './EditProfile.css';

export class EditProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  componentDidMount() {
    this.props.getUserProfile(this.props.auth.user.id);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { user } = this.props;

    if (!isAuthenticated) {
      return (
        <React.Fragment>
          <Helmet>
            <title>Бронирование билетов на Гран-при - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <CustomNavbar />
          <Error error="Чтобы зайти в свой профиль, сперва авторизуйтесь!" />
          <Footer />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Профиль - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <div className="profile">
          <Form>
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
            <FormGroup className="profile-email">
              <Label>Изменить никнейм:</Label>
              <Input
                className="profile-input"
                name="nickname"
                id="nickname"
                placeholder={user.name}
              />
              <Label>Осталось попыток - {user.nameChangeAttempts}</Label>
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
            </FormGroup>
            <FormGroup className="profile-password">
              <Label>Изменить пароль:</Label>
              <Input
                className="profile-input"
                type="password"
                name="password"
                id="password"
                placeholder="Введите старый пароль"
              />
              <Input
                className="profile-input"
                type="password"
                name="password"
                id="password"
                placeholder="Введите новый пароль"
              />
              <Input
                className="profile-input"
                type="password"
                name="password"
                id="password"
                placeholder="Повторите новый пароль"
              />
            </FormGroup>
            <Button className="profile-update-btn" onClick={this.toggle}>
              Обновить данные
            </Button>
            <Modal
              className="delete-booking-modal"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader className="modal-header" toggle={this.toggle}>
                Обновить данные
              </ModalHeader>
              <ModalBody className="modal-body">
                Вы точно хотите отредактировать свой профиль?
              </ModalBody>
              <ModalFooter>
                <Button
                  className="modal-delete-btn"
                  onClick={this.submitProfileChanges}
                >
                  Да
                </Button>
                <Button className="modal-cancel-btn" onClick={this.toggle}>
                  Отмена
                </Button>
              </ModalFooter>
            </Modal>
          </Form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
