import React, { Component } from 'react';
import { Form, Container, Button, Row, Nav, Col, Tab, Navbar } from 'react-bootstrap';

import Create from './Create';

export default class Contacs extends Component {
    render() {
        return (
            <>
                <Container>
                    <Create />
                </Container>
            </>

        )
    }
}
