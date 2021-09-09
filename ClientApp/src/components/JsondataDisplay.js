import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';
import Empdetail from './Empdata.json';

class JsondataDisplay extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1> Display Json data into an HTML Table </h1>
                    <h3>asp.net core reactjs redux tutorials</h3>
                    <br />
                    <table border="1">
                        <tr>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                        {Empdetail.map(x => {
                            return (
                                <tr>
                                    <td> {x.id}</td>
                                    <td> {x.empname}</td>
                                    <td> {x.email}</td>
                                    <td> {x.mobile}</td>
                                </tr>
                                )
                        })}
                    </table>
                </center>
            </div>
            );
    }

}
export default JsondataDisplay;