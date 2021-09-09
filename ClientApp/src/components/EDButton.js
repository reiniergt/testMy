import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';

class EDButton extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            checked:''
        }
    }

    txtChange(e) {
        this.setState({ input: e.target.value });
    }

    ckboxChange(e) {
        this.setState({ inputck: e.target.checked });
    }

    render() {
        return (
            <div>
                <center>
                    <input type="text" onChange={this.txtChange.bind(this)} placeholder="Enter some text ..." value={this.state.input}  />
                    <button disabled={!this.state.input}> Click</button>
                </center>
                <br />
                <center>
                    <input type="checkbox" title="Select the Checbox To Enable The Button" onChange={this.ckboxChange.bind(this)} />
                    <em>Accept the term & Conditions</em>
                    <button disabled={!this.state.inputck}> Click</button>
                </center>
            </div>
            
        );
    }
}

export default EDButton;