import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { Navbar, Container, Nav} from "react-bootstrap";
import "./GlobalVariable";
import {Button,Form,Grid,Header,Image,Segment} from "semantic-ui-react";
import FooterComponent from "./FooterComponent";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      userType: "",
      firstName: "",
      lastName: "",
      password: "",
      emailId: "",
      contact: "",
      is_Active: "",
      errors: {},
      p: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeContactHandler = this.changeContactHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeConfirmPasswordHandler =this.changeConfirmPasswordHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    if (this.validate()) {
      let employee = {
        userId: this.state.emailId,
        userType: this.state.userType,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        contact: this.state.contact,
        password: this.state.password,
        emailId: this.state.emailId,
        confirmPassword: this.state.confirmPassword,
      };
      console.log("employee => " + JSON.stringify(employee));
      EmployeeService.signUp(employee).then((res) => {
        let s = res.data;
        if (s.booleanMsg) {
          this.props.history.push("/login");
          alert("Sign up successful");
        } else {
          console.log("unsuccessful");
          this.props.history.push("/signup");
          alert("Sign up failed");
        }
      });
    }
  };

  signUp = (e) => {
    e.preventDefault();
    this.props.history.push('/signup');
}

home = (e) => {
    e.preventDefault();
    this.props.history.push('/home');
}

login = (e) => {
  e.preventDefault();
  this.props.history.push('/login');
}

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeContactHandler = (event) => {
    this.setState({ contact: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeConfirmPasswordHandler = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  selectUserType = (e) => {
    this.setState({ userType: e.target.value });
  };

  cancel() {
    this.props.history.push("/signup");
  }

  validate() {
    let input = {
      contact: this.state.contact,
      userType: this.state.userType,
      password: this.state.password,
      emailId: this.state.emailId,
      confirmPassword: this.state.confirmPassword,
    };
    let errors = {};
    let isValid = true;
    var pattern;

    if (typeof input["contact"] !== "undefined") {
      pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["contact"])) {
        isValid = false;
        errors["contact"] = "Please enter only number.";
      } else if (input["contact"].length !== 10) {
        isValid = false;
        errors["contact"] = "Please enter valid phone number.";
      }
    }

    if (typeof input["emailId"] !== "undefined") {
      pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["emailId"])) {
        isValid = false;
        errors["emailId"] = "Please enter valid email address.";
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

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="images/logosymbol.png"
                width="30"
                style={{ marginRight: "1.5em"}}
              />
              Recruit Right</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
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
                  <Nav.Link onClick={this.login}>
                    Log In
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
              Sign Up
            </Header>
            <Form size="huge">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="pencil alternate"
                  iconPosition="left"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.changeFirstNameHandler}
                  required="required"
                />
                <Form.Input
                  fluid
                  placeholder="Last Name"
                  icon="pencil alternate"
                  iconPosition="left"
                  value={this.state.lastName}
                  onChange={this.changeLastNameHandler}
                  required="required"
                />
                <Form.Input
                  fluid
                  placeholder="E-mail"
                  icon="user"
                  iconPosition="left"
                  value={this.state.emailId}
                  onChange={this.changeEmailHandler}
                  required="required"
                />
                <div className="text-danger">{this.state.errors.emailId}</div>
                <Form.Input
                  fluid
                  icon="phone"
                  iconPosition="left"
                  placeholder="Contact"
                  value={this.state.contact}
                  onChange={this.changeContactHandler}
                  required="required"
                />
                <div className="text-danger">{this.state.errors.contact}</div>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.changePasswordHandler}
                  required="required"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.changeConfirmPasswordHandler}
                  required="required"
                />
                <div className="text-danger">{this.state.errors.password}</div>
                <div>
                  <select
                    class="form-select"
                    value={this.state.userType}
                    onChange={this.selectUserType.bind(this)}
                    required="required"
                  >
                    <option selected disabled value="">
                      Choose Option
                    </option>
                    <option>Candidate</option>
                    <option>RMG</option>
                    <option>Account POC</option>
                    <option>Panelist</option>
                  </select>
                </div>
                <div className="text-danger">{this.state.errors.userType}</div>
                <br></br>
                <Button
                  color="teal"
                  fluid
                  size="large"
                  disabled={
                    !this.state.firstName ||
                    !this.state.lastName ||
                    !this.state.emailId ||
                    !this.state.password ||
                    !this.state.contact ||
                    !this.state.confirmPassword ||
                    !this.state.userType
                  }
                  onClick={this.saveOrUpdateEmployee}
                >
                  Sign Up
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid><FooterComponent></FooterComponent>
      </div>
    );
  }
}

export default SignUp;
