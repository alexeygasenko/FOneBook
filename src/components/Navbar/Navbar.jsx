import React, { Component } from 'react';
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
        <NavLink className="nav-section section-active" href="/">
          Новости
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink className="nav-section" href="/">
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
        <NavLink className="nav-section section-active" href="/history/">
          История
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink className="nav-section" href="/history/">
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
        <NavLink className="nav-section section-active" href="/cars/">
          Техника
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink className="nav-section" href="/cars/">
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
        <NavLink className="nav-section section-active" href="/stats/">
          Статистика
        </NavLink>
      );
      return activeNavBtn;
    } else {
      activeNavBtn = (
        <NavLink className="nav-section" href="/stats/">
          Статистика
        </NavLink>
      );
      return activeNavBtn;
    }
  };

  render() {
    return (
      <Navbar light expand="md" className="navbar-width">
        <NavbarBrand className="nav-logo nav-logo-mobile" href="/">
          <img className="logo" src={navbarLogo} alt="FOneBook logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>{this.activeNewsNav()}</NavItem>
            <NavItem>{this.activeHistoryNav()}</NavItem>
          </Nav>
          <NavbarBrand className="nav-logo nav-logo-desktop" href="/">
            <img className="logo" src={navbarLogo} alt="FOneBook logo" />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>{this.activeTechNav()}</NavItem>
            <NavItem>{this.activeStatsNav()}</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
