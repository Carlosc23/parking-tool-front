// App.js

import React from 'react';
import SideBar from './sidebar';
import logo from '../../assets/img/logo.png';
import grafica from '../../assets/img/occupied.png';

import '../../styles/sensores.css'

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
      <img src={logo} id="logo" alt="logo" width="12%" height="13%" float="left"/>

<h2 id="title" >Administrator</h2>
      </div>
      <h1 id="subsensores">Indicacion segun los sensores</h1>
      <img src={grafica} alt="grafica" width="50%" height="50%" id="grafica"/>
    
      <p id="minisensores">El dia de hoy XX/XX/XXXX hemos tenido como las sonas mas congestionadas las sonas A y C</p>



    </div>
  );
}