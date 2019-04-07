import React, { Component }  from "react";
import logo from '../../assets/img/logo.png';
import fin from '../../assets/img/finalscreen.png';
import '../../styles/ticket.css'
import btn from '../../assets/img/botonticket.png';

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
      
        <div className="finalmessage">
        
        <img src={fin} alt="parkings" width="100%" height="100%" />
        
       

        </div>
        
      </header>
      </div>
      );
    }
  }
  export default Parking;