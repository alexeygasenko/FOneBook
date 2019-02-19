import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import { Helmet } from 'react-helmet';
import './Registration.css';
import Footer from '../../Footer/Footer';

export default class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Регистрация - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="container">
          <h4 className="login-header">Логин:</h4>
          <InputGroup>
            <Input className="login-input" />
          </InputGroup>
          <br />
          <h4 className="login-header">Email:</h4>
          <InputGroup>
            <Input className="login-input" />
          </InputGroup>
          <br />
          <h4 className="login-header">Пароль:</h4>
          <InputGroup>
            <Input className="login-input" />
          </InputGroup>
          <br />
          <h4 className="login-header">Подтвердите пароль:</h4>
          <InputGroup>
            <Input className="login-input" />
          </InputGroup>
          <br />
          <Button className="login-btn" type="submit">
            Войти
          </Button>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
