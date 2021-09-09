import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';

class SearchArrayString extends Component {
    constructor() {
        super();
        this.state = {
            filter:"",
            data:[
            {
                Country: "India",
                Capital: "New Delhi"
            },
            {
                Country: "Japan",
                Capital: "Tokio"
                },
            {
                Country: "New Zeland",
                Capital: "Wellington"
                },
            {
                Country: "Australia",
                Capital: "Camberra"
            },
            ]
        };
    }

    searchTXT(e) {
        this.setState({filter: e.target.value});
    };
    render() {
        let { filter, data } = this.state;
        let DataSearch = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(filter.toLowerCase()))
        });

        return (
            <div>
                <center>
                    <h1>Implementing Search Filter Functionalitiy With Array Of String</h1>
                    <h2>Reactjs Tutorials</h2>
                    <br />
                    Search : <input type="text" value={filter} placeholder="Search Country or Capital Name ..." onChange={this.searchTXT.bind(this)} />
                    <hr />
                    <table border = "1">
                        <tr>
                            <th>Country</th>
                            <th>Capital</th>
                        </tr>
                        {
                            (DataSearch.map(item =>
                                <tr>
                                    <td>
                                        {item.Country}
                                    </td>
                                    <td>
                                        {item.Capital}
                                    </td>
                                </tr>
                        ))}
                    </table>
                </center>
            </div>
        );
    }
}

export default SearchArrayString;