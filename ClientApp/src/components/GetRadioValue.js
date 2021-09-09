import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';

class GetRadioValue extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
        }

    }

    getValue(e) {
        this.setState({ data: e.target.value });
    } 
    render() {

        return (
            <div>
                <div>
                    <center>
                        <div onChange={this.getValue.bind(this)}>
                            <input type="radio" value="Rojo" name="RB" /> Rojo &nbsp;&nbsp;
                            <input type="radio" value="Verde" name="RB" /> Verde &nbsp;&nbsp;
                            <input type="radio" value="Azul" name="RB" /> Azul &nbsp;&nbsp;
                        </div>
                        <strong> El seleccionado radio es: {this.state.data} </strong>
                    </center>
                </div>


            </div>
        );
    }

}

export default GetRadioValue;