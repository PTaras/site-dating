import React  from 'react';
import { Navbar, Nav, Container  } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Contacs from '../pages/Contacs';
import Info from '../pages/Info';
import logo from '../assets/img/logo.png';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect  bg="dark" variant="dark" fixed="top" style={{display: 'flex'}}>
                <Container>
                    <Navbar.Brand href="/all-posts">
                        <img src={logo} alt='logo' style={{width: '100px'}}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-nav">
                            <Nav.Link className="navbar-nav ml-auto" href="/all-posts">
                                <h5  style={{color: 'yellow'}}>Posts</h5></Nav.Link>
                            <Nav.Link className="navbar-nav ml-5" href="/add-new-post">
                            <h5  style={{color: 'yellow'}}>Добавить пост</h5></Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/add-new-post" component={Contacs} />
                    <Route exact path="/all-posts" component={Info} />
                </Switch>
            </Router>
        </>
    )
}

export default Header;