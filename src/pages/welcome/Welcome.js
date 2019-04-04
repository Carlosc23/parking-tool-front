import React, { Component }  from "react";

import logo from '../../assets/img/logo.png';
import normalc from '../../assets/img/normalc.PNG';
import pregnant from '../../assets/img/pregnant.PNG';
import specialn from '../../assets/img/specialn.PNG';
import '../../styles/Welcome.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
      return (
        <div className="frame" >
        <header>
        
        <h1 >
          Bienvenido al Parqueo
        </h1>
        <div className="logo">
        <img src={logo} alt="logo" width="30%" height="30%" />
        </div>
        <p>
            Seleccione el tipo de parqueo que necesita
        </p>
        <div className="typeParking">
        <Link to ="/normal.html">
        <img src={normalc} alt="normalc" width="30%" height="29%" />
        </Link>
        <Link to ="/pregnant.html">
        <img src={pregnant} alt="pregnant" width="32%" height="30%" />
        </Link>
        <Link to ="/specialn.html">
        <img src={specialn} alt="specialn" width="33%" height="30%" />
        </Link>
        </div>
        
      </header>
      </div>
      );
    }
  }
  