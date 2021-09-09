import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

export default function EDButtonKendo() {
    const [value, setValue] = React.useState(""); 
    const [valueCheck, setValueCheck] = React.useState(false);
    const handleChangeInputText = React.useCallback(
        (e) => {
            setValue(e.value);            
        },
        [setValue]
    );

    const handleChangeInputCheck = React.useCallback(
        (e) => {
            setValueCheck(e.value);
        },
        [setValueCheck]
    );
    return (
        <div>
            <Input placeholder="Enter some text ..." type="text" value={value} onChange={handleChangeInputText} />
            <Button primary={true} disabled={!value}>Click</Button>
            <br />
            <br />
            <Checkbox disabled={false} label={"Accept the term & Conditions"} onChange={handleChangeInputCheck}/>
            <Button disabled={!valueCheck}>Click</Button>
        </div>
    );
}