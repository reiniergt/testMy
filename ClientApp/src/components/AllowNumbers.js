import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';

class AllowNumbers extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }
    txtNumber(e) {
        this.setState({ inputvalue: e.target.value.replace(/\D/g, '') });
    }
    render() {
        return (
            <div>
                <center>
                    <h1> Allow Only Number in A Textbox</h1>
                    <h3> Reactjs Class Componet</h3>
                    <br />
                    Enter Number : <input type="text" value={this.state.inputvalue} onChange={this.txtNumber.bind(this)} placeholder="Enter Only Number ..." />
                </center>
            </div>
        );
    }
}

export default AllowNumbers;