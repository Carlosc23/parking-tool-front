// App.js

import React from 'react';
import SideBar from './sidebar';
import logo from '../../assets/img/logo.png';
import grafica from '../../assets/img/Estacionamientosporhora.png';
import '../../styles/uso.css'

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
      <img src={logo} alt="logo" width="10%" height="10%" />

        <h2>Administrator</h2>
      </div>
        <h1 id="subuso">Estacionamientos utilizados por horas</h1>
        <img src={grafica} alt="grafica" width="50%" height="50%" id="grafica"/>
        <p id="miniuso">El dia de hoy XX/XX/XXXX hemos tenido como las horas mas altas la 1 de la tarde, y las 8 de la noche. Con una ocupacion maxima de 150 estacionamintos y una ocupacopn minima de 20</p>

    </div>
  );
}