import React, { Component }  from "react";

import logo from '../../assets/img/logo.png';
import normalc from '../../assets/img/normalc.PNG';
import pregnant from '../../assets/img/pregnant.PNG';
import specialn from '../../assets/img/specialn.PNG';
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
        <div className="typeParking">
        <img src={normalc} alt="normalc" width="30%" height="30%" />
        <img src={pregnant} alt="pregnant" width="30%" height="30%" />
        <img src={specialn} alt="specialn" width="30%" height="30%" />
        </div>
        
      </header>
      </div>
      );
    }
  }
  