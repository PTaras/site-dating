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
            filteredCity: [],
            checked: false
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/urls', {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
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
                        filteredGender: result,
                        filteredCity: result,
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

    this.setState({ filteredGender}, () => console.log(this.state.filteredGender));
  };

  filterCity = city => {
    let filteredCity = this.state.posts
    filteredCity = filteredCity.filter((post) => {
      let postCity = post.city.toLowerCase()
      return postCity.indexOf(
        city.toLowerCase()) !== -1
    })

this.setState({ filteredCity}, () => console.log(this.state.filteredCity));
};

    render() {
        const { error, isLoaded, checked } = this.state;

        if (error) {
            return <p className="text-center" Style="margin-top: 50px"> Error {error.message} </p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <Container className="themed-container" fluid={true} style={{backgroundColor: 'yellow'}}> 
                    <Row>
                        <Col md="3" className="text-center mt-4">
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
                                            <h5>Выбрать пол автора:</h5>
                                            <Form>
                                                <Form.Check inline label="Мужчина => Женщину" type="radio" id="inline-radio-1" checked ={checked} onClick={() => this.filterGender("Man")} />
                                                <Form.Check inline label="Женщина => Мужчину" type="radio" id="inline-radio-1" checked = { this.allChecked } onClick={() => this.filterGender("Female")} />
                                            </Form>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Nav.Link eventKey="City">
                                            <h5>Город:</h5>
                                            <Form>
                                                <Form.Check inline label="Киев" type="radio" id="inline-radio-1" checked ={checked} onClick={() => this.filterCity("Odessa")} />
                                                <Form.Check inline label="Одесса" type="radio" id="inline-radio-1" checked = { this.allChecked } onClick={() => this.filterCity("Lviv")} />
                                            </Form>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md="9">
                            <Posts posts={this.state.filteredPosts, this.state.filteredGender, this.state.filteredCity} 
                                   onChange={this.filterPosts}   
                                   />
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}
