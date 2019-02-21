import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { loginUser } from '../../../actions/authentication';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CustomNavbar from '../../Navbar/Navbar';
import './Login.css';
import Footer from '../../Footer/Footer';

class Login extends React.Component {
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
    this.props.loginUser(user);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  render() {
    const { errors } = this.state;
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
