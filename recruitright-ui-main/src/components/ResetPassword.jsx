import React, { Component } from 'react';
import EmployeeService from "../services/EmployeeService";
import { Navbar, Container, Nav} from "react-bootstrap";
import {Button,Form,Grid,Header,Image,Segment} from "semantic-ui-react";
import FooterComponent from './FooterComponent';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verificationCode: "",
            password: "",
            confirmPassword: "",
            userId: global.userId,
            errors:{}
          }
          this.changePassword = this.changePassword.bind(this);
          this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
          this.changeVerificationCode = this.changeVerificationCode.bind(this);
          this.changeuserId = this.changeuserId.bind(this);
          this.reset = this.reset.bind(this);
    }

    changeuserId = (event) => {
        this.setState({ userId: event.target.value});
      }; 

    changePassword = (event) => {
        this.setState({ password: event.target.value });
      };
    
      changeConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value });
      };
    
      changeVerificationCode = (event) => {
        this.setState({ verificationCode: event.target.value });
      };

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
    validate() {
      let input = {
        verificationCode: this.state.verificationCode,
        password: this.state.password,
        userId: this.state.userId,
        confirmPassword: this.state.confirmPassword,
      };
      let errors = {};
      let isValid = true;
  
      if (typeof input["verificationCode"] !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["verificationCode"])) {
          isValid = false;
          errors["verificationCode"] = "Please enter only number.";
        } else if (input["verificationCode"].length !==6) {
          isValid = false;
          errors["verificationCode"] = "Please enter valid verification code.";
        }
      }
  
      if (typeof input["userId"] !== "undefined") {
        pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(input["userId"])) {
          isValid = false;
          errors["userId"] = "Please enter valid email address.";
        }
      }
  
      if (
        typeof input["password"] !== "undefined" &&
        typeof input["confirmPassword"] !== "undefined"
      ) {
        if (input["password"] !== input["confirmPassword"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors,
      });
  
      return isValid;
    }
    reset = (e) => {
        e.preventDefault();
        if(this.validate()){
        let employee = {
            password: this.state.password,
            verificationCode: this.state.verificationCode,
            userId:this.state.userId
        }
        console.log("methods"+employee);
        EmployeeService.resetPassword(employee).then((res) => {
        let s = res.data;
        if (s.booleanMsg) {
          console.log("successful");
          alert("Password Changed Successfully");
          this.props.history.push("/login");
        } else {
          console.log("unsuccessful");
          this.props.history.push("/forgotPassword");
          alert("Error! Could not reset your password, please make sure your verification code is correct.");
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
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/logo.png" />
              Reset Password
            </Header>
            <Form size="huge">
              <Segment stacked> 
              <Form.Input
                  fluid
                  placeholder="Enter Email Id"
                  icon="mail"
                  iconPosition="left"
                  defaultValue={global.userId}
                  onChange={this.changeuserId}
                  required="required"
                />             
                <Form.Input
                  fluid
                  placeholder="Verification Code"
                  icon="mail"
                  iconPosition="left"
                  value={this.state.verificationCode}
                  onChange={this.changeVerificationCode}
                  required="required"
                />
                <div className="text-danger">{this.state.errors.verificationCode}</div>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.changePassword}
                  required="required"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.changeConfirmPassword}
                  required="required"
                />
                <div className="text-danger">{this.state.errors.password}</div>
                <br></br>
                <Button
                  color="teal"
                  fluid
                  size="large"
                  disabled={
                    !this.state.password ||
                    !this.state.confirmPassword ||
                    !this.state.verificationCode
                  }
                  onClick={this.reset}
                >
                  Reset Password
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid><FooterComponent></FooterComponent>
       </div>
         );
    }
}
 
export default ResetPassword;