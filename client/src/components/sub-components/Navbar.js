import React, { Component } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import { Link, NavLink } from 'react-router-dom';

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
            <React.Fragment>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand><Link to="/" style={{color: "white"}}>Daniel Kitchen Gaming</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <div className={"nav-link"}><NavLink to="/about" activeClassName={"active"}>About Me</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className={"nav-link"}><NavLink to="/social-media" activeClassName={"active"}>Social Media</NavLink></div>
                            </NavItem>
                            <NavItem>
                                <div className={"nav-link"}><NavLink to="/contact" activeClassName={"active"}>Contact</NavLink></div>
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
            </React.Fragment>
    )
  }
}
