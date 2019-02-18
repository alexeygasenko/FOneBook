import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import './Login.css';
import Footer from '../../Footer/Footer';

export default class Login extends React.Component {
  render() {
    return (
      <div className="container">
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
        <Button className="login-btn" type="submit">
          Войти
        </Button>
        <br />
        <br />
        <Button className="login-btn" href="/registration">
          Ещё не зарегистрированы?
        </Button>
        <Footer />
      </div>
    );
  }
}
