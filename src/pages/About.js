import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col, Tabs } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <>
                <Container style={{ background: '#d3d3d3' }}>
                    <Tab.Container id="left-tab-exampe" defaultActiveKey="first" >
                        <h1 className="text-center m-2">My works</h1>
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Facebook">Facebook</Nav.Link>
                                        <Nav.Link eventKey="second">Task Manager</Nav.Link>
                                        <Nav.Link eventKey="third">third</Nav.Link>
                                        <Nav.Link eventKey="fourth">fourth</Nav.Link>
                                        <Nav.Link eventKey="fifth">fifth</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="Facebook">
                                        <p>My first react-app Facebook</p>
                                        <img src="" />
                                        <a
                                            href="https://github.com/PTaras/react-my-project-facebook"
                                            target="_blank"
                                        >To see, follow the link</a>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>Task Manager React</p>
                                        <img src="" />
                                        <a
                                            href="https://github.com/PTaras/react-my-project-facebook"
                                            target="_blank"
                                        >To see, follow the link</a>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <img src=""></img>
                                        <p>Some text</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <img src=""></img>
                                        <p>Some text</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <img src=""></img>
                                        <p>Some text</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
                {/* <CarouselBox /> */}
            </>
        )
    }
}
