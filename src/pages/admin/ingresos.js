// App.js

import React from 'react';
import SideBar from './sidebar';
import logo from '../../assets/img/logo.png';

import grafica from '../../assets/img/Gananciasvshora.png';
import '../../styles/ingresos.css'

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
      <img src={logo} id="logo" alt="logo" width="12%" height="13%" float="left"/>

<h2 id="title" >Administrator</h2>
      </div>


        <h1 id="subingresos">Ingresos por parqueo</h1>
        <img src={grafica} alt="grafica" width="50%" height="50%" id="grafica"/>
        <p id="miniingresos">El dia de hoy XX/XX/XXXX hemos tenido como las horas mas altas la 1 de la tarde, y las 8 de la noche. Con una ganancia maxima de Q.750 y una ganancia minima de Q.100</p>

    </div>
  );
}