import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import './Login.css';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
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
    e.preventDefault();
    console.log(`Email: ${ this.state.email }`);
    if (this.state.email == "cal15219@uvg.edu.gt"){
      console.log("algo");
      this.state.flag = true;
      console.log(this.state.flag);
      //return <Redirect to='/target' />
      this.props.history.push('/dashboard');
    }
    else{
      this.state.flag = false;
    }
    
  }

  render() {
    const { email, password,flag } = this.state;
    return (
      <Container className="Login">
      <div className="logo">
            <img src={logo} alt="logo" width="30%" height="30%" />
          </div>
        <h2>Login</h2>
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
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
          <Button>Submit

          
          </Button>
       
          
      </Form>
      </Container>
    );
  }
}

export default withRouter(Login);