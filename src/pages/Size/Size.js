import React, { Component } from "react";

import logo from '../../assets/img/logo.png';
import small from '../../assets/img/small.png';
import med from '../../assets/img/med.png';
import large from '../../assets/img/large.png';
import '../../styles/Size.css'
import tam from '../../index.js' //pendiente por arreglar
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import state from '../welcome/Welcome.js';


class Size extends Component {
  render() {
    return (


      <div className="frame" >
        <header>
          <h1 >

          </h1>
          <div className="logo">
            <img src={logo} id="logomain" alt="logo" width="30%" height="30%" />
          </div>
          <p id="mainmessage">
            Seleccione el tipo de vehiculo que tiene. 
            {console.log("aaaa" + this.props.location.state.tipo)}
          </p>

          <div className="sizecar">
            <Link to={{
              pathname: '/ticket',
              state: {
                tipo: this.props.location.state.tipo,
                tam: 1
              }
            }}>        <img src={small} alt="small" width="32.9%" height="50%" />
            </Link>
            <Link to={{
              pathname: '/ticket',
              state: {
                tipo: this.props.location.state.tipo,
                tam: 2
              }
            }}>        <img src={med} alt="med" width="32.0%" height="50%" />

            </Link>
            <Link to={{
              pathname: '/ticket',
              state: {
                tipo: this.props.location.state.tipo,
                tam: 3
              }
            }}>        <img src={large} alt="large"width="32.9%" height="50%" />

            </Link>
          </div>

        </header>
      </div>
    );
  }
}
export default Size;