import React, { Component }  from "react";

import logo from '../../assets/img/logo.png';
import ava from '../../assets/img/available.png';
import ocp from '../../assets/img/occupied.png';
import '../../styles/Parking.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Parking extends Component {
    render() {
      return (
        <div className="frame" >
        <header>
        <h1 >
        </h1>
        <div className="logo">
        <img src={logo} alt="logo" width="30%" height="30%" />
        </div>
        <p>
            Por favor busque el parqueo que tenga la luz del color indicado en el mini mapa
        </p>
        <div className="typeParking">
        
        <img src={ava} alt="parkings" width="50%" height="30%" />
        
        <Link to ="/ticket">
        <img src={logo} alt="button" width="30%" height="30%" />
        </Link>
        </div>
        
      </header>
      </div>
      );
    }
  }
  export default Parking;