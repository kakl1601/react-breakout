import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './../App.css';
import Select from './Select.js';
import Button from './Button.js';

class ChooseLevel extends Component {
    constructor(props) {
        super(props);
        this.testFunc = this.testFunc.bind(this);
    }
    testFunc() {
        console.log("testFunc is being called!");
    }
    render() {
        return (
            <Container>
                <Col align="center">
                    <h3>Choose the number of rows</h3>
                    <Select />
                    <label>Rows</label>
                    <Button sendTestFunc = {this.testFunc} />
                </Col>
            </Container>

        );
    }
}

export default ChooseLevel;


