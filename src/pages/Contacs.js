import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

import Create from './Create';

import style from '../assets/style/style.css';

export default class Contacs extends Component {
    render() {
        return (
            <>
                <Container className="form-submit" style={style}>
                    <Create />
                </Container>
            </>

        )
    }
}
