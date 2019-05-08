import React, { Component } from "react";

import logo from '../../assets/img/logo.png';
import normalc from '../../assets/img/normalc.PNG';
import pregnant from '../../assets/img/pregnant.PNG';
import specialn from '../../assets/img/specialn.PNG';
import '../../styles/Welcome.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

var state = {
  type: 0,
  size: 0
}

export default class Welcome extends Component {
  render() {
    return (
      <div className="frame" >
        <header>

          <h1 id="maintitle">
            Bienvenido al Parqueo
        </h1>
          <div className="logo">
            <img src={logo} id="logomainm" alt="logo" width="30%" height="30%" />
          </div>
          <p id="mainmessage">
            Seleccione el tipo de parqueo que necesita
        </p>
          <div className="typeParking">
            <Link to={{
              pathname: '/normal',
              state: {
                tipo: 1
              }
            }}>        <img src={normalc} alt="normalc" width="30%" height="29%" />

            </Link>
            <Link to={{
              pathname: '/ticket',
              state: {
                tipo: 2,
                tam: 0
              }
            }}>          <img src={pregnant} alt="pregnant" width="31%" height="31%" />

            </Link>
            <Link to={{
              pathname: '/ticket',
              state: {
                tipo: 2,
                tam: 0
              }
            }}>        <img src={specialn} alt="specialn" width="33%" height="30%" />
            </Link>
          </div>

        </header>
      </div>
    );
  }
}
