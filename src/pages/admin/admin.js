// App.js

import React from 'react';
import SideBar from './sidebar';
import logo from '../../assets/img/logo.png';

import '../../styles/admin.css'

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
      <img src={logo} id="logo" alt="logo" width="12%" height="13%" float="left"/>

        <h2 id="title" >Administrator</h2>
      </div>

      <h1 id="subadmin">Pagina principal</h1>
      <h3 id="miniadmin">Bienvenido "Administrador 1"</h3>



    </div>
  );
}