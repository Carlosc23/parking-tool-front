import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import Alert from 'react-s-alert';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import './Login.css';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import 'react-s-alert/dist/s-alert-default.css';
 
// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

const proxyurl = "https://cors-anywhere.herokuapp.com/";


class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
      'email': '',
      'password': '',
      flag: false,
      validate: {
        emailState: '',
      },
     
    }
    this.handleChange = this.handleChange.bind(this);
  }
  nothing() {
      console.log("nothing");
  }
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm(e) {
    const headers = {
      'Content-Type': 'application/json',
  };
    e.preventDefault();
    console.log(`Email: ${ this.state.email }`);
    axios.post(proxyurl+'https://parking-tool-back.herokuapp.com/parking_tool/api/v1.0/Login', {
      email: this.state.email,
      password: this.state.password
    }, {headers: headers})

        .then((response) => {
          
          console.log(response.data);
          if (response.data =="Ok"){
            this.props.history.push('/admin');
            Alert.success('Bienvenido', {
              position: 'bottom-left'
            });
          }
          else {
            Alert.error(response.data, {
              position: 'bottom-left'
            });
            //this.state.flag = true;
          }
        })
        .catch((error) => {
             Alert.error('Error!', {
      position: 'bottom-left'
    });
        })
    
    
  }
  handleClick3(e) {
    //e.preventDefault();
    Alert.error('Test message error!', {
      position: 'bottom-left'
    });
}

  render() {
    
    const { email, password,flag } = this.state;
    return (
      <Container className="Login">
      <div className="logo">
            <img src={logo} alt="logo" width="30%" height="30%" />
          </div>
        <h2>Login</h2>
        <Form className="form" onSubmit={ (e) => {this.submitForm(e)} }>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={ email }
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback valid>
                That's a tasty looking email you've got there.
              </FormFeedback>
              <FormFeedback>
                Uh oh! Looks like there is an issue with your email. Please input a correct email.
              </FormFeedback>
              <FormText>Your username is most likely your email.</FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={ password }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <Button
          //onClick={this.handleClick3}
          >Submit</Button>
    <Alert timeout={1000} />
          
      </Form>
      </Container>
    );
  }
}

export default withRouter(Login);