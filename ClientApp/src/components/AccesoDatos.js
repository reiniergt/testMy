import React, { Component } from 'react';
import { Col, Grid as G1, Row, Table } from 'react-bootstrap';
import { connect } from 'react-redux'
import { showUsers } from '../actions'

class AccesoDatos extends Component {
    componentWillMount() {
        this.props.showUsers()
    }

    rederUsersList() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id} > { user.name } </li >
                )
        })
    }

    rederUsersList1() {
        return this.props.users.map((user) => {
            return(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
            </tr>
            )
        })
    }
    //constructor() {
    //    super();
    //    this.state = {

    //    }
    //}
    render() {
        return (
            <div>
                <center>
                    <h1>React simple started</h1>
                    <h2>User List</h2>
                    <ul>
                        {this.rederUsersList()}
                    </ul>
                    
                </center>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.rederUsersList1()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {
        users: state.user.list
    }
}

export default connect(mapStatetoProps, { showUsers })(AccesoDatos);

