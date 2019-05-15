// App.js

import React from 'react';
import SideBar from './sidebar';
import logo from '../../assets/img/logo.png';

import grafica from '../../assets/img/Gananciasvshora.png';
import '../../styles/ingresos.css'
import LineDemo from '../../Comp/LineDemo'

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
      <img src={logo} id="logo" alt="logo" width="12%" height="13%" float="left"/>

<h2 id="title" >Administrator</h2>
      </div>


        <h1 id="subingresos">Ingresos por parqueo</h1>
        <br></br>
        <br></br>
        <LineDemo />        
        

    </div>
  );
}