import React  from 'react';
import { Navbar, Nav, Container  } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from '../pages/Home';
import Contacs from '../pages/Contacs';
import Info from '../pages/Info'

const Header = () => {
    return (
        <>
            {/* fixed="top" - при скролле шапка остается  */}
            <Navbar collapseOnSelect  bg="dark" variant="dark" fixed="top" style={{display: 'flex'}}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src=""></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-nav">
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            <Nav.Link className="navbar-nav ml-auto" href="/posts">Posts</Nav.Link>
                            <Nav.Link className="navbar-nav ml-5" href="/add_post">Добавить пост</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Маршрутизатор для ссылок на странице (ищет совадение в урле и переходит по нему) */}
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    <Route exact path="/add_post" component={Contacs} />
                    <Route exact path="/posts" component={Info} />
                </Switch>
            </Router>
        </>
    )
}

export default Header;