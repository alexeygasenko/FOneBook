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
} from 'reactstrap';
import './Navbar.css';
import navbarLogo from '../../logo/F1Book_Logo_3.png';

export default class CustomNavbar extends Component {
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
        <NavLink tag={Link} className="nav-section section-active" to="/login">
          Авторизация
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink tag={Link} className="nav-section" to="/login">
          Авторизация
        </NavLink>
      );
      return activeNavBtn;
    }
  };

  render() {
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
            <NavItem>{this.activeLoginNav()}</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
