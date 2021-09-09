import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>my_new_app</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact>
          <NavItem>
            <Glyphicon glyph='home' /> Home
          </NavItem>
        </LinkContainer>          
         
        <LinkContainer to={'/getEDButton'}>
            <NavItem>
                <Glyphicon glyph='education' /> Enable/Disable Button
            </NavItem>
        </LinkContainer>        
        <LinkContainer to={'/getEDButtonKendo'}>
            <NavItem>
                <Glyphicon glyph='education' /> Enable/Disable Button kendo
            </NavItem>
        </LinkContainer> 
        <LinkContainer to={'/getJsondataDisplay'}>
            <NavItem>
                <Glyphicon glyph='education' /> Display json data
            </NavItem>
        </LinkContainer>
        <LinkContainer to={'/getJsondataDisplayKendo'}>
            <NavItem>
                <Glyphicon glyph='education' /> Display json data for kendo
            </NavItem>
        </LinkContainer>   
        <LinkContainer to={'/getArrayUnique'}>
            <NavItem>
                <Glyphicon glyph='education' /> Array Unique
            </NavItem>
        </LinkContainer> 
        <LinkContainer to={'/getArrayUniqueKendo'}>
            <NavItem>
                <Glyphicon glyph='education' /> Array Unique for kendo
            </NavItem>
        </LinkContainer>
        <LinkContainer to={'/getAllowNumbers'}>
            <NavItem>
                <Glyphicon glyph='education' /> Allows Only Numbers
            </NavItem>
        </LinkContainer>  
        <LinkContainer to={'/getAllowNumberskendo'}>
            <NavItem>
                <Glyphicon glyph='education' /> Allows Only Numbers For Kendo
            </NavItem>
        </LinkContainer>
        <LinkContainer to={'/getSearchArrayString'}>
            <NavItem>
                <Glyphicon glyph='education' /> Search Array String
            </NavItem>
        </LinkContainer>
        <LinkContainer to={'/getSearchArrayStringKendo'}>
            <NavItem>
                <Glyphicon glyph='education' /> Search Array String For Kendo
            </NavItem>
        </LinkContainer>  
        <LinkContainer to={'/getCASDropDown'}>
            <NavItem>
                <Glyphicon glyph='education' /> Cascading Dropdown
            </NavItem>
        </LinkContainer>         
        <LinkContainer to={'/getAccesoDatos'}>
            <NavItem>
                <Glyphicon glyph='education' /> Acceso a datos 
            </NavItem>
        </LinkContainer> 
        <LinkContainer to={'/getAccesoDatoForController'}>
            <NavItem>
                <Glyphicon glyph='education' /> Acceso a datos from controller
            </NavItem>
        </LinkContainer> 
                <LinkContainer to={'/getAccesoDatosRR'}>
            <NavItem>
                <Glyphicon glyph='education' /> Acceso a datos from controller y act store
            </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
   </Navbar>
);
