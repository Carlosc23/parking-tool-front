// App.js

import React from 'react';
import SideBar from './sidebar';
import logo from '../../assets/img/logo.png';
import Userimg from '../../assets/img/usr.jpg';
import '../../styles/admin.css'


import {reactLocalStorage} from 'reactjs-localstorage';



export default function App() {

  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
      <img src={logo} id="logo" alt="logo" width="12%" height="13%" float="left"/>

        <h2 id="title" >Administrator</h2>
      </div>

      <h1 id="subadmin">Pagina principal</h1>
      <img src={Userimg} id="usr" alt="urs" width="20%" height="28%" />
      <h3 id="miniadmin">Bienvenido Carlos</h3>

      

    </div>
  );
}