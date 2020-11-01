import React, { Component } from 'react';

import Nouislider from 'react-nouislider';
import { Container, Row, Col, ListGroup, Card, Nav, Form} from 'react-bootstrap';

import Posts from './Posts';

import '../../node_modules/nouislider/distribute/nouislider.min.css';
import '../../node_modules/nouislider/src/nouislider.tooltips.less';
import '../../node_modules/nouislider/src/nouislider.pips.less';

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
            filteredPosts: [],
            filteredGender: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/urls', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result, 
                        filteredPosts: result,
                        age: 40
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    filterPosts = (postFilter) => {
        let filteredPosts = this.state.posts
        filteredPosts = filteredPosts.filter((post) => {
          let postName = post.title.toLowerCase()
          return postName.indexOf(
            postFilter.toLowerCase()) !== -1
        })
        this.setState({
          filteredPosts
        })
    };

    filterGender = gender => {
        let filteredGender = this.state.posts
        filteredGender = filteredGender.filter((post) => {
          let postGender = post.gender.toLowerCase()
          return postGender.indexOf(
            gender.toLowerCase()) !== -1
        })

    this.setState({ filteredGender }, () => console.log(this.state.filteredGender));
  };

    render() {
        const { error, isLoaded } = this.state;

        if (error) {
            return <p className="text-center" Style="margin-top: 50px"> Error {error.message} </p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <Container>
                    <Row>
                        <Col md="2" className="text-center mt-4">
                            <h5 className="text-center mt-5">Filters</h5>
                            <Card>
                                <ListGroup variant="flush" >
                                <label className="text-center mt-0">Age</label>
                                    <ListGroup.Item>
                                        <Nav.Link eventKey="Age" className="text-center mt-4">
                                        
                                        {/* <input type="range" className="custom-range" id="customRange" 
                                            min="18" max="100" step="1" 
                                            value={this.state.age}
                                            onChange={event => this.setState({ age: event.target.value })}
                                            tooltips >
                                        </input> */}
                                        <Nouislider
                                            range={{min: 18, max: 100}}
                                            start={[18, 100]}
                                            tooltips />
                                        </Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Nav.Link eventKey="Gender">
                                            <label>Gender</label>
                                            <Form>
                                                <Form.Check inline label="M" type="radio" id="inline-radio-1" checked = { this.allChecked } onClick={() => this.filterGender("Male")} />
                                                <Form.Check inline label="F" type="radio" id="inline-radio-1" checked = { this.allChecked } onClick={() => this.filterGender("Female")} />
                                            </Form>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md="10">
                            <Posts posts={this.state.filteredPosts} 
                                   match={this.props.match} 
                                   onChange={this.filterPosts}  
                                   onClick={this.filterGender} 
                                   />
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}
