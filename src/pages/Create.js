import React, { Component } from 'react';
import Form from './Form';
import { createPost } from './postActions';

export default class Create extends Component {

    handleSubmit(data) {
        let request_body = {
            "title": data.title,
            "age": data.age,
            "desired_age": {
              "from_": data.from,
              "to": data.to
            },
            "email": data.email,
            "city": data.city,
            "desc": data.desc,
            "who_is_looking_for_whom": data.looking,
            "is_verified": "need review"
          }; 
        createPost(request_body);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}></Form>
            </div>
        );
    }
}