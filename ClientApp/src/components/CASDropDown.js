import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';

class CASDropDown extends Component {
    constructor() {
        super();
        this.state = {
            DDL1: [],
            DDL2: [],
            selectddl:'',
        };
    }

    componentDidMount() {
        this.setState({
            DDL1:[
                { name: 'Color', DDL2: ['Red', 'Black', 'Orange', 'Blue']},
                { name: 'Sports', DDL2: ['Cricket', 'Rugby', 'Boxing', 'Swimming'] },
                { name: 'Fruits', DDL2: ['Apple', 'Mango', 'Orange', 'Kiwi'] },
                { name: 'CountryNames', DDL2: ['India', 'Japan', 'Autralia', 'USA'] },
                ]
        });
    }
    selectChange(e) {
        this.setState({ selectddl: e.target.value });
        this.setState({ DDL2: this.state.DDL1.find(x => x.name === e.target.value).DDL2 });
    }
    render() {
        return (
            <div>
                <center>
                    <h1>How To Implement Cascading DDL</h1>
                    <h2>Reactjs Tutorials</h2>
                    <br />
                    <select onChange={this.selectChange.bind(this)} value={this.state.selectddl}>
                        <option> --- Select ----</option>
                        {this.state.DDL1.map(x => {
                            return <option>{x.name} </option>
                        })
                        }
                    </select>

                    <select onChange={this.selectChange.bind(this)} value={this.state.selectddl}>
                        <option selected disabled> -------------</option>
                        {this.state.DDL2.map(x => {
                            return <option>{x} </option>
                        })
                        }
                    </select>
                </center>
            </div>
        );
    }
}

export default CASDropDown;
