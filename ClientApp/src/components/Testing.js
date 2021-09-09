import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ReactDOM from "react-dom";
import { Col, Grid as G1, Row } from 'react-bootstrap';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
} from "@progress/kendo-react-charts";
import { Chart as ChartWrapper } from '@progress/kendo-charts-react-wrapper';
import '@progress/kendo-ui';
import "hammerjs";
import { actionCreators } from '../store/Testing';


//const seriesData = [1, 2, 3, 5];
class Testing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [
                { category: "0-14", value: 0.2545,},
                { category: "15-24", value: 0.1552,},
                { category: "25-54", value: 0.4059,},
                { category: "55-64", value: 0.0911,},
                { category: "65+", value: 0.0933,},
            ],
            seriesData: [1, 2, 3, 5],

            labelContent: (props) => {
                let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
                    style: "percent",
                    minimumFractionDigits: 2,
                });
                return `${props.dataItem.category} years old: ${formatedNumber}`;
            },
            seriesPrincipal: [{data:[1, 1 ,1]}],
            seriesDefaults: {type:'pie'},
            //graphProtein: 0,
            //graphCarb: 0,
            //graphSugar: 0,

        }
        
    };

    handleProteinChange = (event) => {
        this.setState({ graphProtein: event.target.value });
        this.props.cambioEnGrafico;
        //this.handleGraphChange();
    }

    handleCarbChange = (event) => {
        this.setState({ graphCarb: event.target.value });
        this.props.cambioEnGrafico;
        //this.handleGraphChange();
    }

    handleSugarChange = (event) => {
        this.setState({ graphSugar: event.target.value });
        this.props.cambioEnGrafico;
        //this.handleGraphChange();
    }

    handleGraphChange = () => {
        this.setState({
            seriesPrincipal: [{
                data: [
                    this.state.graphProtein,
                    this.state.graphCarb,
                    this.state.graphSugar
                ]
            }]
        });
    }


    render() {
        return (

            <div className="App margin-top-region ">
                <G1 fluid>
                    <Row className="show-grid">
                        <Col sm={6}>
                            <div className="food-graph">
                                <Chart>
                                    <ChartTitle text="World Population by Broad Age Groups" />
                                    <ChartLegend position="bottom" />
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="pie"
                                            data={this.state.series}
                                            field="value"
                                            categoryField="category"
                                            labels={{
                                                visible: true,
                                                content: this.state.labelContent
                                            }}
                                        />
                                    </ChartSeries>
                                </Chart>
                            </div>

                        </Col>
                        <Col sm={6}>
                            <Chart>
                                <ChartSeries>
                                    <ChartSeriesItem data={this.state.seriesData} />
                                </ChartSeries>
                            </Chart>
                        </Col>
                    </Row>
                    
                </G1>
            </div>
        );
    }
}
export default connect(
    state => state.testing,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Testing);