import React  from 'react';
import { Navbar, Nav,  Form, FormControl, Button, Container  } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About';
import Contacs from '../pages/Contacs';
import Info from '../pages/Info'


const Header = () => {
    return (
        <>
            {/* fixed="top" - при скролле шапка остается  */}
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img src=""></img>
                    </Navbar.Brand>
                    {/* адаптиный навбар под уменьшение экрана */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About me</Nav.Link>
                            <Nav.Link href="/contacs">Contacts</Nav.Link>
                            <Nav.Link href="/info">Info</Nav.Link>
                        </Nav>
                        {/* <Form inline>
                        <FormControl
                            type="text"
                            id="filter"
                            placeholder="Search"
                            className="mr-sm-2"
                            value={this.state.postFilter}
                            onChange={this.handleChange} placeholder="Search" 
                        />
                        <Button variant="primary">Search</Button>
                    </Form> */}
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Маршрутизатор для ссылок на странице (ищет совадение в урле и переходит по нему) */}
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacs" component={Contacs} />
                    <Route exact path="/info" component={Info} />
                </Switch>
            </Router>
        </>
    )
}

export default Header;