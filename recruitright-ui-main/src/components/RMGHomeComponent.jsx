import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from "react-bootstrap";
import "./GlobalVariable";
import { Grid, Segment, List, Header} from "semantic-ui-react";
import "../App.css";
import EmployeeService from "../services/EmployeeService";

class RMGHomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
    };
  }

  logout = (e) => {
    e.preventDefault();
      EmployeeService.logout().then((res) => {
        let s = res.data;
        if (s.booleanMsg) {
          window.userId = "";
          window.userType = "";
          window.firstName = "";
          window.lastName = "";
          window.contact = "";
          window.sessionId = "";
          localStorage.clear();
          this.props.history.push('/Home');
        } 
        
      });
  };

  viewProfile= (e) => {
    e.preventDefault();
    this.props.history.push('/ProfileRMG');
  };

  editProfile = (e) => {
    e.preventDefault();
    this.props.history.push('/EditProfileRMG');
}
  uploadProfile = (e) => {
  e.preventDefault();
  this.props.history.push('/UploadProfileRMG');
}

uploadedProfiles = (e) => {
  e.preventDefault();
  this.props.history.push('/RMGUploadedProfiles');
}

viewAllUP = (e) => {
  e.preventDefault();
  this.props.history.push('/ViewAllUserProfiles');
}

  home = (e) => {
    e.preventDefault();
    this.props.history.push('/RMGHomeComponent');
}

  render() {
    console.log("title"+(window.firstName + " " + window.lastName));
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
                <NavDropdown
                    title="Services"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={this.uploadProfile}>
                      Upload Candidate Profiles
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.uploadedProfiles}>
                    View User Profiles
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.viewAllUP}>
                    View All Users Profiles
                    </NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              <Nav>
              <NavDropdown
                    title={window.firstName + " " + window.lastName}
                    id="basic-nav-dropdown"
                    style={{ marginLeft: "20" }}
                  >
                    <NavDropdown.Item onClick={this.viewProfile}>
                      View Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.editProfile}>
                      Edit Profile
                    </NavDropdown.Item>
                  </NavDropdown>
                <Nav className="me-auto">
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link onClick={this.logout}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="masthead segment bg1">
          <img alt="" src="/images/welcome.png" width="1600" height="650" />
        </div>
        <div
        style={{
          padding: "4em 0em"
        }}>
        </div>
        <div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className=" overflow">
                    <img
                      src="/images/resume.png"
                      alt=""
                      className="card-img-top" width="50" height="250"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">Upload Candidates best CV or Resume.</p>
                    <a onClick={this.uploadProfile} className="btn btn-outline-primary" href="#">
                      Upload Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className=" overflow">
                    <img
                      src="/images/profile.png"
                      alt=""
                      className="card-img-top" width="50" height="250"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">Click here to view your profile and to edit it</p>
                    <a onClick={this.viewProfile} className="btn btn-outline-primary" href="#">
                      Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4" height="20">
                <div className="card text-center">
                  <div className= "overflow">
                    <img
                      src="/images/Status.png"
                      alt=""
                      className="card-img-top" width="50" height="250"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">Check out your profiles</p>
                    <a onClick={this.uploadedProfiles} className="btn btn-outline-primary" href="#">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "4em 20em" }}
      >
        <Container className="text-center">
          <Grid divided inverted stackable>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Company" />
              <List link inverted>
                <List.Item as="a">Site Map</List.Item>
                <List.Item as="a">Contact</List.Item>
                <List.Item as="a">Terms and Conditions</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Social Media" />
              <List link inverted>
                <List.Item as="a">Facebook</List.Item>
                <List.Item as="a">Instagram</List.Item>
                <List.Item as="a">LinkedIn</List.Item>
                <List.Item as="a">Twitter</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <p fontSize="15" textAlign="center">
                Recruit Right is a small application which helps people find jobs
                according to their profile.
              </p>
            </Grid.Column><Grid.Row ><br></br><br></br>
              <p textAlign="center">All Rights Reserved to Recruit Right</p></Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
    );
  }
}

export default RMGHomeComponent;
