import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AddListUser } from '../actions/actionRR'

class AccesoDatosReactRedux extends Component {

    componentDidMount() {
        // This method runs when the component is first added to the page
        console.log('tt1');
        this.loadData();
        //const loadUsers = "";
        //this.props.requestCargarUsuarios(loadUsers);
        console.log('tt1:', this.state);
        

    }

    async loadData() {
        //const loadUsers = "";
        //const response = await this.props.requestCargarUsuarios(loadUsers);
        //const data = await response.json();
        //this.setState({ listUsuarios: data })
        
        console.log('tt2');
        const response = await fetch(`api/SampleData/getUser`);
        console.log('tt3');
        const data = await response.json();
        console.log('tt4');
        // this.setState({ listUsuarios: data, loading: true });
        
        //this.props.AddListUser(data);
        console.log('pp');
        return data;
    }

    render() {
        return (
            <div>
                <center>
                    <h1>React simple started</h1>
                    <h2>User List</h2>
                    <ul>
                        {this.props.loading 
                            ? this.props.listUsuario.map(item => {
                                return <div key={item.id}>{item.name}</div>;
                            })
                            : "Loading..."}
                    </ul>

                </center>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        
        listUsuario: state.userRR.listUsuario
    }
}

//const mapDispatchToProps = dispatch => {
//    return {
//        AddListUser(lista) {
//            dispatch(AddListUser(lista))
//        }
//    };
//} 

//, mapDispatchToProps
export default connect(mapStateToProps)(AccesoDatosReactRedux);