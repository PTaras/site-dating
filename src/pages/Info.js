import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Card, Nav, DropdownButton, Dropdown, Pagination} from 'react-bootstrap';

import Posts from './Posts';

import '../../node_modules/nouislider/distribute/nouislider.min.css';
import '../../node_modules/nouislider/src/nouislider.tooltips.less';
import '../../node_modules/nouislider/src/nouislider.pips.less';
import style from '../assets/style/style.css';

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
            city: "Все города",
            looking: "Показать все",
            age_from: '' || 16,
            age_to: '' || 60, 
            countPaging: '',
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
                        countPaging: result.aviable_pagination_range,
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
                            age_to: result.filter.desired_age_to,
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
                            currentPage: result.current_page,
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
        const { error, isLoaded, allCities, who_is_looking, countPaging, currentPage  } = this.state;

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
                <Container className="themed-container" fluid={true} style={{style}}> 
                    <Row style={{opacity: '70%'}}>
                        <Col md="3" className="text-center mt-5">
                            <h4 className="text-center mt-5" style={{color: 'red', backgroundColor: 'none'}}>Фильтры</h4>
                            <Card>
                            <ListGroup>
                            <Nav.Link eventKey="Age">
                            <h5 className="text-center mt-2">Возраст:</h5>
                                    <ListGroup.Item style ={{height: "60px"}}>
                                    <form>
                                        <label>
                                        От:
                                        <input type="number" min="16"
                                                max="60" onChange={this.handleChangeAgeFrom} />
                                        </label>
                                        <label>
                                        Дo:
                                        <input type="number" min="16"
                                                max="60" onChange={this.handleChangeAgeTo} />
                                        </label>
                                    </form>
                                        
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
                        <Col md="9" style={{marginTop: '63px'}}> 
                            <Posts 
                                   posts={this.state.filteredCity} 
                                   onChange={this.filterCity}/>
                                   <Row>
                            <Col md={12}>
                            <Pagination className="pagination justify-content-center">
                                {/* {currentPage === 1 ? <Pagination.First disabled /> : <Pagination.First />}
                                {currentPage === 1 ? <Pagination.Prev disabled/> : <Pagination.Prev />} */}
                                {(Array.from({length:countPaging}, (_, i) => ++i)).map((item) => {
                                    if (countPaging >= 3)  return (
                                        <Pagination.Item key={item} active={item === currentPage} onClick={this.handleClickPaging}> {item}</Pagination.Item >
                                    );
                                    return (
                                        <Pagination.Ellipsis /> 
                                    )
                                })}
                                {/* {currentPage === countPaging ? <Pagination.Next disabled /> : <Pagination.Next />}
                                {currentPage === countPaging ? <Pagination.Last disabled/> : <Pagination.Last />} */}
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
