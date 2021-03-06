import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Welcome from './pages/welcome/Welcome';
import Size from './pages/Size/Size';
import Parks from './pages/Parkings/Parkings';
import Final from './pages/ticket/ticket';
import admin from './pages/admin/admin';
import uso from './pages/admin/uso';
import ingresos from './pages/admin/ingresos';
import sensores from './pages/admin/sensores';
import Login from './pages/Login/Login';

import * as serviceWorker from './serviceWorker';
var tipo= 0;
//tipo 0 es vacio. tipo 1 es normal, tipo 2 es especial
var tam=0;
//tam 0 es vacio, tam 1 es pequeño, tam 2 es normal, tam 3 grande. Si es tipo 2, tam es 4



const routing = (

    <Router>
   <Switch>
            <Route exact path="/" component={App} /> 
            <Route path="/normal" component={Size} /> 
            <Route path="/ticket" component={Parks} /> 
            <Route path="/print" component={Final} /> 
            <Route path="/admin" component={admin} /> 
            <Route path="/uso" component={uso} /> 
            <Route path="/ingresos" component={ingresos} /> 
            <Route path="/sensores" component={sensores} /> 

            <Route path="/Login" component={Login} /> 

    </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
