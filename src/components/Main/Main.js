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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">FOneBook</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
