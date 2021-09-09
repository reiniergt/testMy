import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';

class ArrayUnique extends Component {
    constructor(){
        super();
        this.state = {
            data: ['Apple', 'Banana', 'Grapes', 'Apple', 'Orange', 'Grapes', 'Kiwi']
        }
    }
    render() {
        let uniquedata = [...new Set(this.state.data)];
        return (
            <div>
                <center>
                    <h1>How to Display Only Unique Values From An Array</h1>
                    <h2>asp.net core reactjs tutorial</h2>
                    <br />
                    <select>
                        <option selected disabled >--- Select ---</option>
                        {uniquedata.map(displaydata => (
                            <option>{displaydata}</option>
                            ))}
                    </select>
                    <h2>{this.state.value1}</h2>
                </center>
                
            </div>
        );
    }
}

export default ArrayUnique;