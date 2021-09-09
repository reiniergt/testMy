import React, { Component} from 'react';
import { connect } from 'react-redux';
import ReactDOM from "react-dom";
import { Calendar } from '@progress/kendo-react-dateinputs'
import { TreeView } from '@progress/kendo-react-treeview';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "./products.json";
import { Col, Grid as G1, Row } from 'react-bootstrap';

class Home extends Component {
    render() {
        const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
        return (
            <div className="App">                
                <G1 fluid>
                    <Row className="show-grid">
                        <Col sm={6}>
                            <Calendar />
                        </Col>
                    
                        <Col sm={6}>
                            <div>
                                <div>T-shirt size:</div>
                                <DropDownList data={sizes} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <Grid
                                style={{
                                    height: "400px",
                                }}
                                data={products}
                            >
                                <Column field="ProductID" title="ID" width="40px" />
                                <Column field="ProductName" title="Name" width="250px" />
                                <Column field="Category.CategoryName" title="CategoryName" />
                                <Column field="UnitPrice" title="Price" />
                                <Column field="UnitsInStock" title="In stock" />
                                <Column
                                    field="Discontinued"
                                    cell={(props) => (
                                        <td>
                                            <input
                                                disabled={true}
                                                type="checkbox"
                                                checked={props.dataItem[props.field || ""]}
                                            />
                                        </td>
                                    )}
                                />
                            </Grid>
                        </Col>
                    </Row>
                </G1>
                
               
                
            </div>
            );

    }
    
}

//const Home = () => {
//    const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
//    return (
//        <div>
//            <h1>Hello, world!</h1>

//            <Calendar />;
        
//            <div>T-shirt size:</div>
//            <DropDownList data={sizes} />

//            <Grid
//                style={{
//                    height: "400px",
//                }}
//                data={products}
//            >
//                <Column field="ProductID" title="ID" width="40px" />
//                <Column field="ProductName" title="Name" width="250px" />
//                <Column field="Category.CategoryName" title="CategoryName" />
//                <Column field="UnitPrice" title="Price" />
//                <Column field="UnitsInStock" title="In stock" />
//                <Column
//                    field="Discontinued"
//                    cell={(props) => (
//                        <td>
//                            <input
//                                disabled={true}
//                                type="checkbox"
//                                checked={props.dataItem[props.field || ""]}
//                            />
//                        </td>
//                    )}
//                />
//            </Grid>
//        </div>
        
//    );
//};

//ReactDOM.render(<App />, document.querySelector("my-new-app"));

//const Home = props => (
//  <div>
//    <h1>Hello, world!</h1>
//    <p>Welcome to your new single-page application, built with:</p>
//    <ul>
//      <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
//      <li><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</li>
//      <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
//    </ul>
//    <p>To help you get started, we've also set up:</p>
//    <ul>
//      <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
//      <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
//      <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
//    </ul>
//    <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
//  </div>
//);

export default connect()(Home);
