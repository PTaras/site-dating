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

const OPTIONS = ["Kyiv", "Lviv", "Odessa"];

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
            cities: OPTIONS.reduce(
                (options, option) => ({
                  ...options,
                  [option]: false
                }),
                {}
              ),
            age: 18
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/urls', {
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
                        cities: OPTIONS.reduce(
                            (options, option) => ({
                              ...options,
                              [option]: false
                            }),
                            {}
                          ),
                        age: 18
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

    handleClick = () => {
        this.setState(prevState => ({ age: prevState + 10 }));
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

    filterGender = (gender) => {
        let filteredGender = this.state.posts
        filteredGender = filteredGender.filter((post) => {
          let postGender = post.gender.toLowerCase()
          return postGender.indexOf(
            gender.toLowerCase()) !== -1
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

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.cities).forEach(checkbox => {
        this.setState(prevState => ({
            cities: {
            ...prevState.cities,
            [checkbox]: isSelected
            }
        }));
        });
    };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
        cities: {
        ...prevState.cities,
        [name]: !prevState.cities[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.cities)
      .filter(checkbox => this.state.cities[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.cities[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
      onClick={(option) => this.filterCity(this.state.cities[option]), () => console.log(this.state.cities[option])}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    render() {
        const { error, isLoaded, check, age } = this.state;

        if (error) {
            return <p className="text-center" style={{marginTop: "50px"}}> Error {error.message} </p>
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
                                                <Form.Check inline label="Мужчина => Женщину" type="radio" id="inline-radio-1" defaultChecked= {true}  onChange={this.handleCheckboxChange} onClick={() => this.filterGender("Man")} />
                                                <Form.Check inline label="Женщина => Мужчину" type="radio" id="inline-radio-1" onChange={this.handleCheckboxChange}  onClick={() => this.filterGender("Female")} />
                                            </Form>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Nav.Link eventKey="City">
                                            <h5>Город:</h5>
                                            {/* <Form onChange={this.handleCheckboxChange}>
                                                <Form.Check inline label="Все города" type="checkbox" defaultChecked ={true}   onClick={() => this.filterCity("")} />
                                                <Form.Check inline label="Одесса" type="checkbox"  checked={check} onClick={() => this.filterCity("Odessa")} />
                                                <Form.Check inline label="Львов" type="checkbox"  checked={check} onClick={() => this.filterCity("Lviv")} />
                                            </Form> */}
                                            <form onSubmit={this.handleFormSubmit}>
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
                                                </div>  </form>
                                        </Nav.Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md="9">
                            <Posts 
                                    // posts1={this.state.filteredPosts} 
                                //    posts2={this.state.filteredGender}
                                   posts={this.state.filteredCity} 
                                   onChange={this.filterPosts}/>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}
