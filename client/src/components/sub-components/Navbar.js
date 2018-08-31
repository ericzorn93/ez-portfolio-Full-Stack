import React, { Component } from 'react';
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
    DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom';

export default class NavHead extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


  render() {
    return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand><Link to="/" style={{color: "white"}}>Daniel Kitchen Gaming</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link to="/about">About Me</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/social-media">Social Media</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to="/contact">Contact</Link></NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Gaming Portfolio
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/games">All Games</Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        Indy Games
                                    </DropdownItem>
                                    <DropdownItem>
                                        PC Games
                                    </DropdownItem>
                                    <DropdownItem>
                                        Arcade Games
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
    )
  }
}
