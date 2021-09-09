import React, { Component } from 'react';
import { Input } from "@progress/kendo-react-inputs";

class TextboxValue extends Component {
    constructor(props){
        super(props);
        this.state = {data:""};
    }

    txtchange(e){
        this.setState({data : e.target.value});
    }

    getBtn(e){
        alert('Escribio el texto :' + this.state.data);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <center>
                    <Input type="text" onChange={this.txtchange.bind(this)} />
                    <button type="submit" onClick={this.getBtn.bind(this)}>Click</button>
                    {this.state.data}
                </center>
            </div>
        );
    }
}

export default TextboxValue;