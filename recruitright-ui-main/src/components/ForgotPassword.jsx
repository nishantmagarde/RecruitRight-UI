import React, { Component } from 'react';
import EmployeeService from "../services/EmployeeService";
import { Navbar, Container, Nav} from "react-bootstrap";
import {Button,Form,Grid,Header,Image,Segment} from "semantic-ui-react";
import FooterComponent from './FooterComponent';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            errors: {},
          }
          global.userId='';
          this.Onchangeuser = this.Onchangeuser.bind(this);
    }

    
  Login = (e) => {
    e.preventDefault();
    this.props.history.push('/login');
  };


  signUp = (e) => {
    e.preventDefault();
    this.props.history.push('/signup');
}

home = (e) => {
    e.preventDefault();
    this.props.history.push('/home');
}

    Onchangeuser = (event) => {
        this.setState({ userId: event.target.value });
      }; 
    
      validate() {
        let input = {
          userId: this.state.userId
        };
        let errors = {};
        let isValid = true;
    
        if (typeof input["userId"] !== "undefined") {
          var pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
          );
          if (!pattern.test(input["userId"])) {
            isValid = false;
            errors["userId"] = "Please enter valid email address.";
          }
        }
    
        this.setState({
          errors: errors,
        });
    
        return isValid;
      }
    
    forgotpswd = (e) => {
        e.preventDefault();
        if(this.validate()){
       let employee = {userId: this.state.userId};
        global.userId=this.state.userId;
        console.log("userId to be passed in back end"+this.state.userId);
        EmployeeService.forgotPassword(employee).then((res) => {
        let s = res.data;
        console.log(s);
        if (s.booleanMsg) {
          this.props.history.push("/ResetPassword");
          alert("Verification code is sent to your registered email address");
        } else {
          console.log("unsuccessful");
          this.props.history.push("/forgotPassword");
          alert("Error! Could not send a verification code, please make sure your email address is correct.");
        }
      });
    }}

    render() { 
        return ( 
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand>
              <img
                alt=""
                src="images/logosymbol.png"
                width="30"
                style={{ marginRight: "1.5em"}}
              />
              Recruit Right
            </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.home}>Home</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.home}>About Us</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.home}>Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav className="me-auto">
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link onClick={this.Login}>Log In</Nav.Link>
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link onClick={this.signUp}>
                    Create an Account?
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Grid
          textAlign="center"
          style={{ height: "110vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/logo.png" />
              Forgot Password
            </Header>
            <Form size="huge">
              <Segment stacked> 
              <Form.Input
                  fluid
                  placeholder="Enter Email Id"
                  icon="mail"
                  iconPosition="left"
                  value={this.state.userId}
                  onChange={this.Onchangeuser}
                  required="required"
                />
                <div className="text-danger">{this.state.errors.userId}</div>
                <Button
                  color="teal"
                  fluid
                  size="large"
                  disabled={
                    !this.state.userId 
                  }
                  onClick={this.forgotpswd}
                >
                  Send Verification Code
                </Button>
              </Segment>
            </Form><br></br>
            <div class="alert alert-info" role="alert" textAlign="left">
                <b>Steps for password reset:</b><br></br>
                1) Click on <i>"Send verification code"</i> and enter the code in verification code field.<br></br>
                2) Now, Set your new password and confirmPassword.
        </div>
          </Grid.Column>
        </Grid><FooterComponent></FooterComponent>
       </div>
         );

    }
}
 
export default ForgotPassword;