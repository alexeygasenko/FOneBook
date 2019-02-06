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
import './Main.css';
import navbarLogo from '../../logo/F1Book_Logo_2.png';

export default class Main extends Component {
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

  render() {
    return (
      <Navbar light expand="md" className="navbar-width">
        <NavbarBrand className="nav-logo-mobile" href="/">
          <img className="logo" src={navbarLogo} alt="FOneBook logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-section" href="/">
                Новости
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-section" href="/">
                История
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand className="nav-logo-desktop" href="/">
            <img className="logo" src={navbarLogo} alt="FOneBook logo" />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-section" href="/">
                Техника
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-section" href="/">
                Статистика
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
