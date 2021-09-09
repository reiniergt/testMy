import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from './products.json';

const initialDataState = {
    skip: 0,
    take: 10,
};

export default function JsondataDisplayKendo() {
    const [page, setPage] = React.useState(initialDataState);

    const pageChange = (event) => {
        setPage(event.page);
    };

    return (
        <div>
            <h1> Display Json data into an HTML Table </h1>
            <h3>asp.net core reactjs redux tutorials</h3>

            <Grid
                style={{
                    height: "400px",
                }}
                data={products.slice(page.skip, page.take + page.skip)}
                skip={page.skip}
                take={page.take}
                total={products.length}
                pageable={true}
                onPageChange={pageChange}
            >
                <Column field="ProductID" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" />
            </Grid>
        </div>
        );
}