import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from "react-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Col, Grid as G1, Row } from 'react-bootstrap';
import { NumericTextBox } from "@progress/kendo-react-inputs";
import './styles/test.css'


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sizes: ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"],
            numericValueWeek: null,   
            numericValueDay: null,
            sizeName: '',
            
        }
        //this.ChangeDay = this.ChangeDay.bind(this);
        //this.ChangeWeek = this.ChangeWeek.bind(this);
    };

    //ChangeWeek(e) {
    //    this.setState((numericValueWeek, props) => {
    //        return {                
    //            numericValueWeek: e.value
    //        }
    //    });
    //}

    //ChangeDay(e) {
    //    this.setState((numericValueDay, props) => {
    //        return {
    //            numericValueWeek: e.value !== null ? e.value / 7 : null,
    //            numericValueDay: e.value
    //            console.log(this.state.sizeName)
    //        }
    //    });
    //}

    ChangeWeek = (event) => {
        this.setState(
            {
                numericValueDay: event.target.value !== null ? event.target.value * 7 : null,
                numericValueWeek: event.target.value
            }
        );
    }

    ChangeDay = (event) => {
        this.setState(
            {
                numericValueWeek: event.target.value !== null ? event.target.value / 7 : null,
                numericValueDay: event.target.value
            }
        
        );
        console.log(this.state.sizeName);
    }
       

    handleSizeNameChange = (event) => {
        this.setState({ sizeName: event.target.value });
    }

    handleSizeIdChange = (event) => {
        this.setState({ sizeId: event.target.value })
    }
    
    render() {          
        return (
            
            <div className="App margin-top-region ">                
                <G1 fluid>                    
                    <Row className="show-grid">                        
                        <Col sm={4}>
                            <div className="Separate-right">
                                
                                <label>
                                Tallas
                                {" "}     
                                    <DropDownList data={this.state.sizes} 
                                    value={this.state.sizeName}
                                    onChange={this.handleSizeNameChange}/>
                                </label>
                            </div>                     
                            
                        </Col>
                    
                        <Col sm={4}>
                            <label>
                               Semanas {" "}                                        
                               <NumericTextBox
                                    placeholder="please enter value"
                                    value={this.state.numericValueWeek}
                                    onChange={this.ChangeWeek}
                                />

                            </label>

                        </Col>

                        <Col sm={4}>
                            <label>
                               Dias {" "}
                               <NumericTextBox
                                    placeholder="please enter value"
                                    value={this.state.numericValueDay}
                                    onChange={this.ChangeDay}
                               />
                                
                            </label>

                        </Col>
                    </Row>
                </G1>
            </div>
            );
    }
}

export default connect()(Test);