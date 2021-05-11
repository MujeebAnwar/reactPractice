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
    DropdownItem,
    Button
} from 'reactstrap';


class CustomNavbar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isLoading: "",

        }


    }


    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,


        })
    }






    render() {


        let iconClass = this.props.isLoading ? 'fa fa-circle-o-notch fa-spin' : 'fa fa-circle-o-notch'

        return <div>

            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>


                    <Button color="primary" className="m-1" onClick={this.props.buttonHandleClick}>
                        Fetch Data
                         <i className={iconClass} ></i>

                    </Button>

                </Collapse>
            </Navbar>




        </div >
    }



}

export default CustomNavbar