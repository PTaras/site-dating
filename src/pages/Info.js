import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Card, Nav, DropdownButton, Dropdown, Pagination} from 'react-bootstrap';

import Posts from './Posts';
import FilterPosts from '../components/FilterResults';

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
            // who_is_looking: [], 
            city: "Все города",
            looking: "Показать все",
            age_from: '' || 16,
            age_to: '' || 60, 
            countPagig: '',
            currentPage: ''
        };
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeLooking = this.handleChangeLooking.bind(this);
        this.handleChangeAgeFrom = this.handleChangeAgeFrom.bind(this);
        this.handleChangeAgeTo = this.handleChangeAgeTo.bind(this);
        this.handleClickPaging = this.handleClickPaging.bind(this);
    }

    componentDidMount() {
        const data = {
            "filter_": {
              "city": "Все города",
              "who_is_looking_for_whom": "Показать все",
              "desired_age_from": 16,
              "desired_age_to": 60
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
                        age_to: result.filter.desired_age_to,
                        countPagig: result.aviable_pagination_range,
                        currentPage: result.current_page
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
        // console.log("city", this.state.city);
        const data = {
            "filter_": {
              "city": e.target.value,
              "who_is_looking_for_whom": this.state.looking,
              "desired_age_from": 16,
              "desired_age_to": 60
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
        // console.log("look",this.state.looking);
        // console.log("this.state.age_from",this.state.age_from);
        // console.log("this.state.age_to",this.state.age_to);
        // console.log("this.state.city",this.state.city);
        const data = {
            "filter_": {
              "city": this.state.city,
              "who_is_looking_for_whom":  e.target.value,
              "desired_age_from": this.state.age_from,
              "desired_age_to": this.state.age_to 
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

      handleChangeAgeFrom(e) {
        e.preventDefault();
        if (e.target.value >= 16 || e.target.value <= 60) {
            const data = {
                "filter_": {
                  "city": this.state.city,
                  "who_is_looking_for_whom": this.state.looking,
                  "desired_age_from": e.target.value || 16,
                  "desired_age_to": this.state.age_to || 60
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
                            age_from: e.target.value,
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
        }
       
      };

      handleChangeAgeTo(e) {
        e.preventDefault();
        // console.log("age_to_to", this.state.age_to);
        // console.log("age_to_from", this.state.age_from);
        if (e.target.value >= 16 || e.target.value <= 60) {
            const data = {
                "filter_": {
                  "city": this.state.city,
                  "who_is_looking_for_whom": this.state.looking,
                  "desired_age_from": this.state.age_from ||16,
                  "desired_age_to": e.target.value || 60
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
                            age_from: result.filter.desired_age_from,
                            // age_to: result.filter.desired_age_to
                            age_to: e.target.value
                        }, );
                    },
    
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
        
      };

      handleClickPaging(e) {
        // e.preventDefault();
        console.log("page", e.target.text);
        
            const data = {
                "filter_": {
                  "city": this.state.city,
                  "who_is_looking_for_whom": this.state.looking,
                  "desired_age_from": this.state.age_from || 16,
                  "desired_age_to": this.state.age_to || 60
                },
                "page": {
                  "page": e.target.text
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
                            age_from: result.filter.desired_age_from,
                            age_to: result.filter.desired_age_to,
                            currentPage: e.target.value,
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
        const { error, isLoaded, allCities, who_is_looking  } = this.state;

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
                            <Nav.Link eventKey="Age">
                            <h5 className="text-center mt-4">Возраст:</h5>
                                    <ListGroup.Item style ={{height: "60px"}}>
                                    <form>
                                        <label>
                                        From:
                                        <input type="number" min="16"
                                                max="60" onChange={this.handleChangeAgeFrom} />
                                        </label>
                                        <label>
                                        To:
                                        <input type="number" min="16"
                                                max="60" onChange={this.handleChangeAgeTo} />
                                        </label>
                                        {/* <input type="submit" value="Отправить" /> */}
                                    </form>
                                        {/* <Nouislider 
                                            onChange={this.handleChangeAge}
                                            // value = {this.state.age_from}
                                            start={value}
                                            range={{min: 0, max: 100}}
                                            start={[this.state.age_from, this.state.age_to]}
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
                                              />  */}
                                        
                                        
                                    </ListGroup.Item>
                                    </Nav.Link>
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
                                    // onClick = {this.handleClickPaging}
                                    // currentP = {this.state.currentPage}
                                    // pags = {this.state.countPagig}
                                   posts={this.state.filteredCity} 
                                   onChange={this.filterCity}/>
                                   <Row>
                            <Col md={12}>
                            <Pagination className="pagination justify-content-center">
                                <Pagination.First />
                                <Pagination.Prev />
                                {(Array.from({length:this.state.countPagig}, (_, i) => ++i)).map((item) => {
                                    return (
                                    <Pagination.Item key={item} active={item === this.state.currentPage} onClick={this.handleClickPaging}> {item}</Pagination.Item >)
                                })}
                                {/* <Pagination.Ellipsis /> */}
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}
