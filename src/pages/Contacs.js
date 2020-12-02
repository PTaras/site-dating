import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

import Create from './Create';

export default class Contacs extends Component {
    render() {
        return (
            <>
                <Container>
                    <Create />
                </Container>
            </>

        )
    }
}
