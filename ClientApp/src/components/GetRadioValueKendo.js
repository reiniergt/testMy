import React, { Component } from 'react';
import { RadioButton } from "@progress/kendo-react-inputs";
import { Col, Grid as G1, Row } from 'react-bootstrap';
import { Label, FloatingLabel, Hint, Error } from '@progress/kendo-react-labels';




export default function GetRadioValueKendo() {
    const [selectedValue, setSelectedValue] = React.useState("first");
    const handleChange = React.useCallback(
        (e) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );
    return (
        <div>
            <RadioButton
                name="group1"
                value="first"
                checked={selectedValue === "first"}
                label="First"
                onChange={handleChange}
            />
            <br />
            <RadioButton
                name="group1"
                value="second"
                checked={selectedValue === "second"}
                label="Second"
                onChange={handleChange}
            />
            <br />
            <RadioButton
                name="group1"
                value="third"
                checked={selectedValue === "third"}
                label="Third"
                onChange={handleChange}
            />
            <br />
            <Label >First Name:&nbsp; {selectedValue} </Label>
        </div>
        
        
        
    );
}