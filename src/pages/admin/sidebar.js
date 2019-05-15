// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Example from './date';


export default props => {

  
  return (
    <Menu>
<Example></Example> 

<br></br>
      <a className="menu-item" href="/admin">
        Home
      </a>

      <a className="menu-item" href="/uso">
        Uso Estacionamientos
      </a>

      <a className="menu-item" href="/ingresos">
        Ingresos
      </a>

      <a className="menu-item" href="/sensores">
        Sensores
      </a>

     
    </Menu>
  );
};