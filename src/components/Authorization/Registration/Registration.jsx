import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../../actions/authentication';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './Registration.css';
import { connect } from 'react-redux';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
    };
    this.props.registerUser(user, this.props.hisory);
  }

  // Переписать на getDerivedStateFromProps
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  render() {
    const { errors } = this.state;
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
                name="name"
                className={classnames('login-input', {
                  'is-invalid': errors.name,
                })}
                onChange={this.handleInputChange}
                value={this.state.name}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Label className="login-header">Email:</Label>
              <Input
                type="email"
                name="email"
                className={classnames('login-input', {
                  'is-invalid': errors.email,
                })}
                onChange={this.handleInputChange}
                value={this.state.email}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Label className="login-header">Пароль:</Label>
              <Input
                type="password"
                name="password"
                className={classnames('login-input', {
                  'is-invalid': errors.password,
                })}
                onChange={this.handleInputChange}
                value={this.state.password}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Label className="login-header">Подтвердите пароль:</Label>
              <Input
                type="password"
                name="passwordConfirm"
                className={classnames('login-input', {
                  'is-invalid': errors.passwordConfirm,
                })}
                onChange={this.handleInputChange}
                value={this.state.passwordConfirm}
              />
              {errors.passwordConfirm && (
                <div className="invalid-feedback">{errors.passwordConfirm}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Button className="login-btn" type="submit">
                Зарегистрироваться
              </Button>
            </FormGroup>
            <Footer />
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Registration));
