import React, { Component } from 'react';
import intl from 'react-intl-universal';
import {
    Collapse,
    Container,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.scss';

class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        console.warn(this.props.userName.name);
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" dark>
                    <Container fluid>
                        <img src={`${document.baseURI}img/EYLogo.svg`} alt="" className="ey-logo" />
                        <NavbarBrand className="navbar-title" tag={Link} to="/">PowerBI Report Viewer</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        {intl.get("navMenu.userGreeting", { userName: this.props.userName.name })}
                                    </DropdownToggle>
                                    <DropdownMenu left="true">
                                        <DropdownItem>
                                            Sign Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export {
    NavMenu
};