import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentication';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.css';
import navbarLogo from '../../logo/F1Book_Logo_3.png';

class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  activeNewsNav = () => {
    const { active } = this.props;

    let activeNavBtn;

    if (active === 'Новости') {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section section-active" to="/">
          Новости
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section" to="/">
          Новости
        </NavLink>
      );
      return activeNavBtn;
    }
  };

  activeHistoryNav = () => {
    const { active } = this.props;

    let activeNavBtn;

    if (active === 'История') {
      activeNavBtn = (
        <NavLink
          tag={Link}
          className="nav-section section-active"
          to="/history"
        >
          История
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section" to="/history">
          История
        </NavLink>
      );
      return activeNavBtn;
    }
  };

  activeTechNav = () => {
    const { active } = this.props;

    let activeNavBtn;

    if (active === 'Техника') {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section section-active" to="/auto">
          Техника
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section" to="/auto">
          Техника
        </NavLink>
      );
      return activeNavBtn;
    }
  };

  activeStatsNav = () => {
    const { active } = this.props;

    let activeNavBtn;

    if (active === 'Статистика') {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section section-active" to="/stats">
          Статистика
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section" to="/stats">
          Статистика
        </NavLink>
      );
      return activeNavBtn;
    }
  };

  activeForumNav = () => {
    const { active } = this.props;

    let activeNavBtn;

    if (active === 'Форум') {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section section-active" to="/login">
          Форум
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section" to="/login">
          Форум
        </NavLink>
      );
      return activeNavBtn;
    }
  };

  activeLoginNav = () => {
    const { active } = this.props;

    let activeNavBtn;

    if (active === 'Авторизация') {
      activeNavBtn = (
        <NavItem>
          <NavLink
            tag={Link}
            className="nav-section section-active"
            to="/login"
          >
            Авторизация
          </NavLink>
        </NavItem>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavItem>
          <NavLink tag={Link} className="nav-section" to="/login">
            Авторизация
          </NavLink>
        </NavItem>
      );
      return activeNavBtn;
    }
  };

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav className="nav-section">
          {user.name}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Профиль</DropdownItem>
          <DropdownItem>Мои брони</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={this.onLogout.bind(this)}>Выйти</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );

    return (
      <Navbar light expand="md" className="navbar-width">
        <NavbarBrand tag={Link} className="nav-logo nav-logo-mobile" to="/">
          <img className="logo" src={navbarLogo} alt="FOneBook logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>{this.activeNewsNav()}</NavItem>
            <NavItem>{this.activeHistoryNav()}</NavItem>
            <NavItem>{this.activeTechNav()}</NavItem>
          </Nav>
          <NavbarBrand tag={Link} className="nav-logo nav-logo-desktop" to="/">
            <img className="logo" src={navbarLogo} alt="FOneBook logo" />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>{this.activeStatsNav()}</NavItem>
            <NavItem>{this.activeForumNav()}</NavItem>
            {isAuthenticated ? authLinks : this.activeLoginNav()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

CustomNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(CustomNavbar));
