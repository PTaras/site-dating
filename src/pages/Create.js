import React, { Component } from 'react';
import Form from './Form';
import { createPost } from './postActions';

export default class Create extends Component {

    handleSubmit(data) {
        let request_body = {
            "title": data.title,
            "age": data.age,
            "city": data.city,
            "desired_age": {
              "from_": data.from,
              "to": data.to
            },
            "email": data.email,
            "who_is_looking_for_whom": data.looking,
            "desc": data.desc,
            "is_verified": "need review"
          }
        createPost(request_body);
        console.log('form submission data', data);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}></Form>
            </div>
        );
    }
}