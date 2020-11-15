import React, { Component } from 'react';
// import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css'

import Nouislider from 'react-nouislider';
import { Container, Row, Col, ListGroup, Card, Nav, DropdownButton, Dropdown} from 'react-bootstrap';

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
            postFilter: "",
            filteredPosts: [],
            filteredGender: [],
            filteredCity: [],
            allCities: [], 
            who_is_looking: [], 
            city: "ALL",
            looking: "ALL",
            age_from: 0,
            age_to: 0
        };
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeLooking = this.handleChangeLooking.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
    }

    componentDidMount() {
        const data = {
            "filter_": {
              "city": "ALL",
              "who_is_looking_for_whom": "ALL",
              "desired_age_from": 0,
              "desired_age_to": 0
            },
            "page": {
              "page": 1
            }
          };
        fetch('http://127.0.0.1:8000/posts/', {
            method: 'POST',
            body: JSON.stringify(data),
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
                        allCities: result.aviable_items.cities,
                        who_is_looking: result.aviable_items.whoes_is_looking_whoms, 
                        age_from: result.filter.desired_age_from,
                        age_to: result.filter.desired_age_to
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

    handleChangeCity(e) {
        e.preventDefault();
        console.log("city", this.state.city);
        const data = {
            "filter_": {
              "city": e.target.value,
              "who_is_looking_for_whom": this.state.looking,
              "desired_age_from": 0,
              "desired_age_to": 0
            },
            "page": {
              "page": 1
            }
          };
        fetch('http://127.0.0.1:8000/posts/', {
            method: 'POST',
            body: JSON.stringify(data),
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
                        allCities: result.aviable_items.cities,
                        city: e.target.value
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

      handleChangeLooking(e) {
        e.preventDefault();
        console.log("look",this.state.looking);
        const data = {
            "filter_": {
              "city": this.state.city,
              "who_is_looking_for_whom":  e.target.value,
              "desired_age_from": 0,
              "desired_age_to": 0
            },
            "page": {
              "page": 1
            }
          };
        fetch('http://127.0.0.1:8000/posts/', {
            method: 'POST',
            body: JSON.stringify(data),
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
                        who_is_looking: result.aviable_items.whoes_is_looking_whoms,
                        looking: e.target.value
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

      handleChangeAge(e) {
        e.preventDefault();
        console.log("look",this.state.age_from);
        const data = {
            "filter_": {
              "city": this.state.city,
              "who_is_looking_for_whom": this.state.looking,
              "desired_age_from": 0,
              "desired_age_to": 0
            },
            "page": {
              "page": 1
            }
          };
        fetch('http://127.0.0.1:8000/posts/', {
            method: 'POST',
            body: JSON.stringify(data),
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
                        who_is_looking: result.aviable_items.whoes_is_looking_whoms,
                        looking: e.target.value
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

 
    render() {
        const { error, isLoaded, age, allCities, who_is_looking  } = this.state;

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
                        <Col md="3" className="text-center mt-5">
                            <h5 className="text-center mt-5">Filters</h5>
                            <Card>
                            <ListGroup>
                            <h5 className="text-center mt-4">Возраст:</h5>
                                    <ListGroup.Item style ={{height: "150px"}} onChange={this.handleChangeAge}>
                                        <Nav.Link eventKey="Age" className="text-center mt-5">
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
                                        <DropdownButton id="dropdown-item-button" title={this.state.looking}
                                             >
                                            
                                            {(who_is_looking).map((item) => {
                                                return (
                                                    <Dropdown.Item as="button" key={item} 
                                                        onClick={this.handleChangeLooking}
                                                        options={item}
                                                        value={item}
                                                    >
                                                    {item}</Dropdown.Item>
                                                )
                                            })}
                                            </DropdownButton>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Nav.Link eventKey="City">
                                            <h5>Город:</h5>
                                           <DropdownButton id="dropdown-item-button" title={this.state.city} 
                                             >
                                           {(allCities).map((town) => {
                                                return (
                                                    <Dropdown.Item as="button" key={town} 
                                                        onClick={this.handleChangeCity}
                                                        options={town}
                                                        value={town}
                                                    >
                                                    {town}</Dropdown.Item>
                                                )
                                            })}
                                            </DropdownButton>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md="9">
                            <Posts 
                                    // posts1={this.state.filteredPosts} 
                                //    posts={this.state.filteredGender}
                                   posts={this.state.filteredCity} 
                                   onChange={this.filterCity}/>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}
