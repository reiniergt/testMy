import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';
import { DropDownList } from "@progress/kendo-react-dropdowns";

export default function ArrayUniquekendo() {
    const data = ['Apple', 'Banana', 'Grapes', 'Apple', 'Orange', 'Grapes', 'Kiwi'];
    let uniquedata = [...new Set(data)];
    return (
        
        <div>
            <center>
                <h1>How to Display Only Unique Values From An Array</h1>
                <h2>asp.net core reactjs tutorial</h2>
                <br />
                <DropDownList data={uniquedata} />
            </center>
        </div>
    );
}