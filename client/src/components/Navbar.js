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
                    <NavbarBrand href="/">Daniel Kitchen Gaming</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Gaming Portfolio
                                </DropdownToggle>
                                <DropdownMenu right>
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
