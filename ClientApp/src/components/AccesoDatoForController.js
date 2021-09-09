import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/AccesoDatosControllerNew';
import { showUsersControllerNew } from '../actions'

class AccesoDatoForController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listUsuarios: [],
            loading: false
        };
    }

    componentWillMount() {
        // This method runs when the component is first added to the page
        
        this.loadData();
        //const loadUsers = "";
        //this.props.requestCargarUsuarios(loadUsers);
        
        //store.dispatch(showUsersControllerNew);
        
    }

    async loadData() {
        //const loadUsers = "";
        //const response = await this.props.requestCargarUsuarios(loadUsers);
        //const data = await response.json();
        //this.setState({ listUsuarios: data })

        const response = await fetch(`api/SampleData/getUser`);
        const data = await response.json();
        console.log('tt');
        this.setState({ listUsuarios: data, loading: true });
        
    
        console.log('pp');
    }

    
    render() {
        
        return (
            <div>
                <center>
                    <h1>React simple started</h1>
                    <h2>User List</h2>
                    
                    <ul>
                        {this.state.listUsuarios && this.state.listUsuarios.length > 0
                            ? this.state.listUsuarios.map(item => {
                                return <div key={item.id}>{item.name}</div>;
                            })
                            : "Loading..."}
                    </ul>

                </center>
            </div>
        );
    }
    
}

//export default AccesoDatoForController;

const mapStateToProps = (state) => {
    return {
        listUsuarios: state.list
    }
}

export default connect(
    //mapStateToProps,
    //state => state.AccesoDatoForController,    
    dispatch => bindActionCreators(actionCreators, dispatch)
)(AccesoDatoForController);
//ReactDOM.render(<AccesoDatoForController />, document.getElementById('content'));