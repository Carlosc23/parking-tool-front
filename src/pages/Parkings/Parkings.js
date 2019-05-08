import React, { Component }  from "react";
import logo from '../../assets/img/logo.png';
import ava from '../../assets/img/available.png';
import ocp from '../../assets/img/occupied.png';
import '../../styles/Parking.css'
import btn from '../../assets/img/botonticket.png';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
var imagen =1; 

console.log("la imagen es"+imagen);

function Prueba(props) {
    if (imagen==0) {
      return   <img src={ava} alt="parkings" width="50%" height="30%" />;
    }
    return   <img src={ocp} alt="parkings" width="50%" height="30%" />;
  }

class Parking extends Component {
    render() {
      return (
        <div className="frame" >
        <header>
        <h1 >
        </h1>
        <div className="logo">
        <img src={logo} alt="logo" id="logomain" width="30%" height="30%" />
        </div>
        <p className="mensaje" >
            Por favor busque el parqueo que tenga la luz del color indicado en el mini mapa.
        </p>
        <div className="laststep">
        <Prueba />
        <Link to ="/print">
        <img src={btn} alt="button" width="15%" height="15%" />
        </Link>

        </div>
        
      </header>
      </div>
      );
    }
  }
  export default Parking;