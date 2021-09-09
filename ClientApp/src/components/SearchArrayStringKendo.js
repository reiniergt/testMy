import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from './products.json';
import { Input, Checkbox } from "@progress/kendo-react-inputs";

const initialDataState = {
    skip: 0,
    take: 2,
};

export default function SearchArrayStringKendo() {
    const [page, setPage] = React.useState(initialDataState);

    const pageChange = (event) => {
        setPage(event.page);
    };
    const [filter, setFilter] = React.useState(""); 

    const searchTXT = React.useCallback(
        (e) => {
            setFilter(e.value);
        },
        [setFilter]
    );
    const data= [
        {
            Country: "India",
            Capital: "New Delhi"
        },
        {
            Country: "Japan",
            Capital: "Tokio"
        },
        {
            Country: "New Zeland",
            Capital: "Wellington"
        },
        {
            Country: "Australia",
            Capital: "Camberra"
        },
    ];

    
    let DataSearch = data.filter(item => {
        return Object.keys(item).some(key =>
            item[key].includes(filter))
    });

    return (
        
        <div>
            <center>
                <h1>Implementing Search Filter Functionalitiy With Array Of String</h1>
                <h2>Reactjs Tutorials</h2>
                <br />
                <Input placeholder="Enter some text ..." type="text" value={filter} onChange={searchTXT} />
                <hr />
                <Grid
                    style={{
                        height: "400px",
                    }}
                    data={DataSearch.slice(page.skip, page.take + page.skip)}
                    skip={page.skip}
                    take={page.take}
                    total={DataSearch.length}
                    pageable={true}
                    onPageChange={pageChange}
                >
                    <Column field="Country" />
                    <Column field="Capital" title="Capital" />
                    
                </Grid>
            </center>
        </div>
    );
}