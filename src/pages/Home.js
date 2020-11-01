import React, { Component } from 'react';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <h2 className="text-center m-4">Some text</h2>
                    <CardDeck className="m-4">
                        <Card bg="light">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?cs=srgb&dl=pexels-3041347.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>text</Card.Text>
                                <Button variant="primary">Abount me</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?cs=srgb&dl=pexels-3041347.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>text</Card.Text>
                                <Button variant="primary">Abount me</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/3041347/pexels-photo-3041347.jpeg?cs=srgb&dl=pexels-3041347.jpg&fm=jpg"
                            />
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>text</Card.Text>
                                <Button variant="primary">Abount me</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
