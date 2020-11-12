import React, { Component } from 'react';
import { Form, Container, Button, Row, Nav, Col, Tab, Navbar } from 'react-bootstrap';
import facebook from '../assets/facebook.png';
import telegram from '../assets/telegram.png';
import skype from '../assets/skype.png';

import Create from './Create';

export default class Contacs extends Component {
    render() {
        return (
            <>
                <Container style={{ width: '500px' }}>
                    <h1 className="text-center">Contact for me</h1>
                    <Create />
                </Container>
                {/* <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed="bottom" >
                    <Container style={{ width: '500px', height: '50px' }}>
                        <Tab.Container id="left-tab-exampe" >
                            <Row>
                                <Col sm={4}>
                                    <Nav variant="pills" className="flex-column mt-2">
                                        <Nav.Item>
                                            <Nav.Link href="#" target="_blank">
                                                <img src={facebook} style={{ width: '50px' }}></img>
                                                Facebook
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={4}>
                                    <Nav variant="pills" className="flex-column mt-2">
                                        <Nav.Item>
                                            <Nav.Link href="#" target="_blank">
                                                <img src={telegram} style={{ width: '50px' }}></img>
                                                <p>Telegram</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={4}>
                                    <Nav variant="pills" className="flex-column mt-2">
                                        <Nav.Item>
                                            <Nav.Link href="#" target="_blank">
                                                <img src={skype} style={{ width: '50px' }}></img>
                                                <p>Skype</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </Navbar> */}
            </>

        )
    }
}
