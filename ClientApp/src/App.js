import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Test from './components/Test';
import Testing from './components/Testing';
import TextboxValue from './components/TexboxValue'
import GetRadioVlue from './components/GetRadioValue'
import GetRadioValueForKendo from './components/GetRadioValueKendo'
import EDButton from './components/EDButton'
import EDButtonKendo from './components/EDButtonKendo'
import JsondataDisplay from './components/JsondataDisplay'
import JsondataDisplayKendo from './components/JsondataDisplayKendo'
import ArrayUnique from './components/ArrayUnique'
import ArrayUniqueKendo from './components/ArrayUniqueKendo'
import AllowNumbers from './components/AllowNumbers'
import AllowNumbersKendo from './components/AllowNumbersKendo'
import SearchArrayString from './components/SearchArrayString'
import ReadGridRemoteKendo from './components/ReadGridRemoteKendo'
import SearchArrayStringKendo from './components/SearchArrayStringKendo'
import CASDropDown from './components/CASDropDown'
import AccesoDatos from './components/AccesoDatos'
import AccesoDatoForController from './components/AccesoDatoForController'
import AccesoDatosRR from './components/AccesoDatosReactRedux'
import '@progress/kendo-theme-default/dist/all.css';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    <Route path='/test' component={Test} />
    <Route path='/testing' component={Testing} />
    <Route path='/textboxValue' component={TextboxValue} />
    <Route path='/getRadioVlue' component={GetRadioVlue} />
    <Route path='/getRadioValueForKendo' component={GetRadioValueForKendo} />
    <Route path='/getEDButton' component={EDButton} />
    <Route path='/getEDButtonKendo' component={EDButtonKendo} />
    <Route path='/getJsondataDisplay' component={JsondataDisplay} />        
    <Route path='/getJsondataDisplayKendo' component={JsondataDisplayKendo} />  
    <Route path='/getArrayUnique' component={ArrayUnique} />
    <Route path='/getArrayUniqueKendo' component={ArrayUniqueKendo} />
    <Route path='/getAllowNumbers' component={AllowNumbers} />
    <Route path='/getAllowNumberskendo' component={AllowNumbersKendo} />
    <Route path='/getSearchArrayString' component={SearchArrayString} />
    <Route path='/getReadGridRemoteKendo' component={ReadGridRemoteKendo} />
    <Route path='/getSearchArrayStringKendo' component={SearchArrayStringKendo} />
    <Route path='/getCASDropDown' component={CASDropDown} />
    <Route path='/getAccesoDatos' component={AccesoDatos} />
    <Route path='/getAccesoDatoForController' component={AccesoDatoForController} />
    <Route path='/getAccesoDatosRR' component={AccesoDatosRR} />
  </Layout>
); 
