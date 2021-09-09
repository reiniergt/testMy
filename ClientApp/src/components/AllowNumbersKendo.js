import React, { Component } from 'react';
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { Label, FloatingLabel, Hint, Error } from '@progress/kendo-react-labels';

export default function AllowNumbersKendo() {
    const [value1, setValue1] = React.useState("");
    const handleChangeInputText = React.useCallback(
        (e) => {
            setValue1(e.target.value.replace(/\D/g, ''));
        },
        [setValue1]
    );
    return (

        <div>
            <center>
                <h1>Allow Only Number in A Textbox</h1>
                <h3>Reactjs kendo Function Componet</h3>
                <br />
                <Label >Enter Number:&nbsp; </Label> 
                <Input placeholder="Enter some text ..." type="text" value={value1} onChange={handleChangeInputText} />
            </center>
        </div>
    );
}