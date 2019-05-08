import React, { Component }  from "react";
import logo from '../../assets/img/logo.png';
import fin from '../../assets/img/finalscreen.png';
import '../../styles/ticket.css'


class Parking extends Component {
    render() {
      return (
        <div className="frame" >
        <header>
       
        <div className="logo">
        <img src={logo} alt="logos" id="logomain" width="32%" height="30%" />
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