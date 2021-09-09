import React, { Component } from 'react';
import { Col, Grid as G1, Row } from 'react-bootstrap';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from './products.json';

const initialDataState = {
    skip: 0,
    take: 10,
};

export default function ReadGridRemoteKendo() {

    const [page, setPage] = React.useState(initialDataState);

    const pageChange = (event) => {
        setPage(event.page);
    };
    //const baseUrl = "https://demos.telerik.com/kendo-ui/service-v4/odata/";
    //const init = {
    //    method: "GET",
    //    accept: "application/json",
    //    headers: {},
    //};

    //React.useEffect(() => {
    //    fetch(baseUrl + `Categories`, init)
    //        .then((response) => response.json())
    //        .then((json) => setCategories(json.value));
    //}, []);
    const gridOptions = {
        //dataSource: {
        //    type: "odata-v4",
        //    transport: {
        //        read: https://localhost:8704/site/vehicles/all
        //    },
        //    schema: {
        //        data: "value",
        //        total: "count"
        //    },
        //    pageSize: 15,
        //    serverPaging: true,
        //    serverFiltering: true,
        //    serverSorting: true
        //},
    };
    return (

        <div>
            <center>
                <h1>Read Grid Remote</h1>
                <h2>asp.net core reactjs tutorial</h2>
                <br />

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
                
            </center>
        </div>
    );
}