import React, { Component }  from "react";

import logo from '../../assets/img/logo.png';
import '../../styles/Welcome.css'
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
        
      </header>
      </div>
      );
    }
  }
  