import React, { Component } from 'react';
import { DropdownButton, Dropdown, Card} from 'react-bootstrap';
import { Container  } from 'react-bootstrap';

import style from '../assets/style/style.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: this.props.desc || '',
            title: this.props.title || '',
            age: this.props.age || '',
            city: this.props.city || 'Киев',
            from: this.props.from || '',
            to: this.props.to || '',
            email: this.props.email || '',
            looking: this.props.looking || 'Мужчина ищет женщину',
            who_is_looking: '',
            isLoaded: false
        };

        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleLookingChange = this.handleLookingChange.bind(this);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleDescChange = (e) => {
        this.setState({
            desc: e.target.value
        });
    }
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handleAgeChange = (e) => {
        this.setState({
            age: e.target.value
        });
    }

    handleLookingChange = (e) => {
        this.setState({
            looking: e.target.value
        });
    }

    handleFromChange = (e) => {
        this.setState({
            from: e.target.value
        });
    }

    handleToChange = (e) => {
        this.setState({
            to: e.target.value
        });
    }

    handleSubmit = (e) => {
        this.props.onSubmit(this.state.who_is_looking);
            return (
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
            )
    }
    
    render() {
        const { error, isLoaded, who_is_looking, allCities } = this.state;
        if (error) {
            return ( 
                <Card border="primary" className="text-center" style={{ width: '18rem', display: 'flex', margin: '100px auto' }}>
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
            <Container>
                 <form name="blog_post" className="form-group" onSubmit={this.handleSubmit} style={{backgroundColor:"grey",  margin: '100px auto 50px auto'}}>
                    <div id="blog_post">
                <div className="form-group">
                    <label className="col-sm-4 control-label required" htmlFor="blog_post_title">Введите имя</label>
                    <div className="col-sm-10">
                        <input type="text"
                                minLength="3"
                                maxLength="16"
                               id="blog_post_title"
                               required="required"
                               value={this.state.title}
                               onChange={this.handleTitleChange}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-6 control-label required" htmlFor="blog_post_body">Расскажите кратко о себе</label>
                    <div className="col-sm-10">
                        <input type="text"
                                maxLength="300"
                               id="blog_post_body"
                               required="required"
                               value={this.state.desc}
                               onChange={this.handleDescChange}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-6 control-label required" htmlFor="blog_post_body">Укажите Ваш возраст</label>
                    <div className="col-sm-10">
                        <input 
                               id="blog_post_body"
                               type="number"
                               min="16"
                               max="60"
                               required="required"
                               value={this.state.age}
                               onChange={this.handleAgeChange}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label required" htmlFor="blog_post_body">Введите email</label>
                    <div className="col-sm-10">
                        <input 
                               id="blog_post_body"
                               type="email"
                               maxLength="80"
                               required="required"
                               value={this.state.email}
                               onChange={this.handleEmailChange}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-6 control-label required" htmlFor="blog_post_body">Выберите Ваш город</label>
                    <div className="col-sm-10 text-center">
                    <DropdownButton id="dropdown-item-button" title={this.state.city}
                                         >
                                       {(allCities).map((item) => {
                                            return (
                                                <Dropdown.Item as="button" key={item} 
                                                    onClick={this.handleCityChange}
                                                    options={item}
                                                    value={item}
                                                    required="required"
                                                    id="blog_post_body"
                                                >
                                                {item}</Dropdown.Item>
                                            )
                                        })}
                                        </DropdownButton>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-6 control-label required" htmlFor="blog_post_body">Кого Вы ищете:</label>
                    <div className="col-sm-10 text-center">
                    <DropdownButton id="dropdown-item-button" title={this.state.looking}
                                         >
                                       {(who_is_looking).map((item) => {
                                            return (
                                                <Dropdown.Item as="button" key={item} 
                                                    onClick={this.handleLookingChange}
                                                    options={item}
                                                    value={item}
                                                    required="required"
                                                    id="blog_post_body"
                                                >
                                                {item}</Dropdown.Item>
                                            )
                                        })}
                                        </DropdownButton>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-row ml-3 text-center">
                    {/* <div className="col-sm-2 text-center"> */}
                    <label className="row-sm-2 control-label required" htmlFor="blog_post_body">From</label>
                    <div className="row-sm-2">
                        <input 
                               id="blog_post_body"
                               type="number"
                               min="16"
                               max="60"
                               required="required"
                               value={this.state.from}
                               onChange={this.handleFromChange}
                               className="form-control"/>
                    </div>
                    <label className="row-sm-2 control-label required ml-1" htmlFor="blog_post_body">To</label>
                    <div className="row-sm-2">
                               <input 
                               id="blog_post_body"
                               type="number"
                               min="16"
                               max="60"
                               required="required"
                               value={this.state.to}
                               onChange={this.handleToChange}
                               className="form-control"/>
                    </div>
                    </div>
                </div>
                <div className="form-group text-center">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <button type="submit"
                                id="blog_post_submit"
                                className="btn-default btn"
                                style={style}>
                            Отправить на валидацию
                        </button>
                    </div>
                </div>
            </div>
                </form>
            </Container>
           
        );
    }
}
};
