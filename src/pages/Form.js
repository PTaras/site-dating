import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: this.props.desc || '',
            title: this.props.title || '',
            age: this.props.age || '',
            city: this.props.city || '',
            from: this.props.from || '',
            to: this.props.to || '',
            email: this.props.email || '',
            looking: this.props.looking || ''
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
        // e.preventDefault();
        this.props.onSubmit(this.state);
        
        alert("Post sibmit!!!");
    }

    render() {
        // const { body, title } = this.state;
        return (
            <form name="blog_post" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="blog_post">
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_title">Title</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_title"
                                   required="required"
                                   value={this.state.title}
                                   onChange={this.handleTitleChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_body">desc</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_body"
                                   required="required"
                                   value={this.state.desc}
                                   onChange={this.handleDescChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_body">city</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_body"
                                   required="required"
                                   value={this.state.city}
                                   onChange={this.handleCityChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_body">email</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_body"
                                   required="required"
                                   value={this.state.email}
                                   onChange={this.handleEmailChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_body">Ищу:</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_body"
                                   required="required"
                                   value={this.state.looking}
                                   onChange={this.handleLookingChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_body">Ваш возраст:</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_body"
                                   required="required"
                                   value={this.state.age}
                                   onChange={this.handleAgeChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="blog_post_body">From - To</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="blog_post_body"
                                   required="required"
                                   value={this.state.from}
                                   onChange={this.handleFromChange}
                                   className="form-control"/>
                                   <input type="text"
                                   id="blog_post_body"
                                   required="required"
                                   value={this.state.to}
                                   onChange={this.handleToChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit"
                                    id="blog_post_submit"
                                    className="btn-default btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
};
