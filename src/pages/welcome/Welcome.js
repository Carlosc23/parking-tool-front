import React, { Component }  from "react";

import logo from '../../assets/img/logo.png';
import '../../styles/Welcome.css'
export default class Welcome extends Component {
    render() {
      return (
        <div className="frame" >
        <header>
        
        <h1>
          Bienvenido al Parqueo
        </h1>
        <img src={logo} alt="logo" width="30%" height="30%" />
        <p>
            Seleccione el tipo de parqueo que necesita
        </p>
        
      </header>
      </div>
      );
    }
  }
  