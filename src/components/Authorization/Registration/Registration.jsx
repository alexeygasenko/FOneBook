import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Helmet } from 'react-helmet';
import CustomNavbar from '../../Navbar/Navbar';
import './Registration.css';
import Footer from '../../Footer/Footer';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      login: this.state.login,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
    };
    console.log(user);
  }

  render() {
    return (
      <React.Fragment>
        <CustomNavbar active="Авторизация" />
        <Helmet>
          <title>Регистрация - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="container">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label className="login-header">Логин:</Label>
              <Input
                type="text"
                name="login"
                className="login-input"
                onChange={this.handleInputChange}
                value={this.state.login}
              />
            </FormGroup>
            <FormGroup>
              <Label className="login-header">Email:</Label>
              <Input
                type="email"
                name="email"
                className="login-input"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </FormGroup>
            <FormGroup>
              <Label className="login-header">Пароль:</Label>
              <Input
                type="password"
                name="password"
                className="login-input"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
            </FormGroup>
            <FormGroup>
              <Label className="login-header">Подтвердите пароль:</Label>
              <Input
                type="password"
                name="passwordConfirm"
                className="login-input"
                onChange={this.handleInputChange}
                value={this.state.passwordConfirm}
              />
            </FormGroup>
            <FormGroup>
              <Button className="login-btn" type="submit">
                Войти
              </Button>
            </FormGroup>
            <Footer />
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
