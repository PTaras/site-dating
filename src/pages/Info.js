import React, { Component } from 'react';
// import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css'

import Nouislider from 'react-nouislider';
import { Container, Row, Col, ListGroup, Card, Nav, Form} from 'react-bootstrap';

import Posts from './Posts';
import Checkbox from "./Checkbox";

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
            postFilter: "",
            filteredPosts: [],
            filteredGender: [],
            filteredCity: [],
            age: 18
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/post/', {
            method: 'GET',
            headers: {
                'Accept': "*/*",
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result.posts, 
                        filteredPosts: result.posts,
                        filteredGender: result.posts,
                        filteredCity: result.posts,
                        age: 18
                    }, );
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
        let filteredPosts = this.state.posts;
        filteredPosts = filteredPosts.filter((post) => {
          let postFilters = post.title.toLowerCase()
          return postFilters.indexOf(
            postFilter.toLowerCase()) !== -1
        });

    this.setState({ filteredPosts }, () => console.log(this.state.filteredPosts));
  };

    filterGender = (gender) => {
        let filteredGender = this.state.posts
        filteredGender = filteredGender.filter((post) => {
          let postGender = post.gender
          return postGender.indexOf(
            gender) !== -1
        });

    this.setState({ filteredGender}, () => console.log(this.state.filteredGender));
  };


    filterCity = (city) => {
        let filteredCity = this.state.posts;
        filteredCity = filteredCity.filter((post) => {
        let postCity = post.city.toLowerCase()
        return postCity.indexOf(
            city.toLowerCase()) !== -1
        })

        this.setState({ filteredCity}, () => console.log(this.state.filteredCity));
    };


 
    render() {
        const { error, isLoaded, check, age } = this.state;

        if (error) {
            return ( 
                <Card border="primary" className="text-center"  style={{ width: '18rem', display: 'flex', margin: '100px auto' }}>
                    <Card.Header>Error</Card.Header>
                    <Card.Body>
                    <Card.Text>
                        {error.message}
                    </Card.Text>
                    </Card.Body>
                </Card>)
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <Container className="themed-container" fluid={true} style={{backgroundColor: 'grey'}}> 
                    <Row>
                        <Col md="3" className="text-center mt-4">
                            <h5 className="text-center mt-5">Filters</h5>
                            <Card>
                            <ListGroup>
                            <h5 className="text-center mt-4">Возраст:</h5>
                                    <ListGroup.Item style ={{height: "200px"}}>
                                        <Nav.Link eventKey="Age" className="text-center mt-4">
                                        <Nouislider 
                                            start={age}
                                            range={{min: 15, max: 100}}
                                            start={[15, 100]}
                                            step={1}
                                            connect ={true}
                                            tooltips = {true}
                                            format= {{
                                                to: function ( value ) {
                                                  return Math.round(value);
                                                },
                                                from: function ( value ) {
                                                  return Math.round(value);
                                            }}}
                                            pips= {{
                                                mode: 'positions',
                                                values: [0, 25, 50, 75, 100],
                                                // density: 5
                                            }}
                                              /> 
                                            {/* <Slider 
                                            />
                                            {/* <Range range={{min: 18, max: 100}}
                                            step='1'
                                            dots='true'
                                            ariaLabelGroupForHandles={[1,2,3,4,5]}
                                            tabIndex={[18,100]}
                                            /> */}
                                        </Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Nav.Link eventKey="Gender">
                                            <h5>Выбрать пол автора:</h5>
                                            <Form>
                                                <Form.Check inline label="Мужчина => Женщину" type="radio" id="inline-radio-1" defaultChecked= {true}  onClick={() => this.filterGender("Мужчина ищет женщину")} />
                                                <Form.Check inline label="Женщина => Мужчину" type="radio" id="inline-radio-1"   onClick={() => this.filterGender("Женщина ищет женщину")} />
                                            </Form>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Nav.Link eventKey="City">
                                            <h5>Город:</h5>
                                            <Form >
                                                <Form.Check inline label="Все города" type="checkbox" defaultChecked ={true}   onClick={() => this.filterCity("")} />
                                                <Form.Check inline label="Киев" type="checkbox"  checked={check} onClick={() => this.filterCity("Киев")} />
                                                <Form.Check inline label="Харьков" type="checkbox"  checked={check} onClick={() => this.filterCity("Харьков")} />
                                                <Form.Check inline label="Львов" type="checkbox"  checked={check} onClick={() => this.filterCity("Львов")} />
                                            </Form>
                                            {/* <form onSubmit={this.handleFormSubmit}>
                                                <select style={{width:"100%"}}>{this.createCheckboxes()}</select>
                                                <div className="form-group mt-2" >
                                                    <button
                                                    type="button"
                                                    className="btn btn-outline-primary mr-2"
                                                    style={{width:"46%"}}
                                                    onClick={this.selectAll} 
                                                    onClick={() => this.filterCity("")}
                                                    >
                                                    All Cities
                                                    </button>
                                                    <button
                                                    type="button"
                                                    className="btn btn-outline-primary mr-2"
                                                    style={{width:"46%"}}
                                                    onClick={this.deselectAll}
                                                    >
                                                    Deselect
                                                    </button>
                                                </div>  </form> */}
                                        </Nav.Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md="9">
                            <Posts 
                                    // posts1={this.state.filteredPosts} 
                                   posts={this.state.filteredGender}
                                   posts={this.state.filteredCity} 
                                   onChange={this.filterPosts}/>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}
