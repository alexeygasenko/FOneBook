import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CustomNavbar from '../../Navbar/Navbar';
import './Login.css';
import Footer from '../../Footer/Footer';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
  }

  render() {
    return (
      <React.Fragment>
        <CustomNavbar active="Авторизация" />
        <Helmet>
          <title>Войти - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="container">
          <Form onSubmit={this.handleSubmit}>
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
              <Button className="login-btn" type="submit">
                Войти
              </Button>
            </FormGroup>
            <Button tag={Link} className="login-btn" to="/registration">
              Ещё не зарегистрированы?
            </Button>
            <Footer />
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
