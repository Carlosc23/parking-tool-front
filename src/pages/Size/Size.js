import React, { Component }  from "react";

import logo from '../../assets/img/logo.png';
import small from '../../assets/img/small.png';
import med from '../../assets/img/med.png';
import large from '../../assets/img/large.png';
import '../../styles/Size.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Size extends Component {
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
            Seleccione el tipo de vehiculo que tiene
        </p>
        <div className="typeParking">
        <Link to ="/small">
        <img src={small} alt="small" width="28%" height="30%" />
        </Link>
        <Link to ="/med">
        <img src={med} alt="med" width="30%" height="30%" />
        </Link>
        <Link to ="/large">
        <img src={large} alt="large" width="30%" height="30%" />
        </Link>
        </div>
        
      </header>
      </div>
      );
    }
  }
  export default Size;