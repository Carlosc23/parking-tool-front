import React from "react";
import DatePicker from "react-datepicker";
import {reactLocalStorage} from 'reactjs-localstorage';

import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(reactLocalStorage.get('date'))
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log(date)
    var a = reactLocalStorage.set('date', date);

console.log(a)
window.location.reload()
  }
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default Example;