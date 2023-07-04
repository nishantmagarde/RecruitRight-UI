import React, { Component } from "react";
import {withRouter } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from "react-bootstrap";
import "./GlobalVariable";
import { Grid, Segment, List, Header } from "semantic-ui-react";
import "../App.css";
import EmployeeService from "../services/EmployeeService";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'Sahiti',
      lastName:'Tadikonda',
    };
    this.logout = this.logout.bind(this);
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
          localStorage.clear();
          this.props.history.push('/Home');
        } 
        
      });
  };
  
  componentDidMount= (e) => {
      EmployeeService.getDetails().then(res =>{
      let s=res.data;
      console.log('employee => ' + JSON.stringify(s));
      console.log("firstName "+ res.data.user.firstName);
      this.setState(this.state.firstName=res.data.user.firstName);
      console.log("firstName1 "+ this.state.firstName);
      window.firstName =res.data.user.firstName;
  });
}

  viewProfile= (e) => {
    e.preventDefault();
    this.props.history.push('/ProfileComponent');
  };

  CandidateProfileStatus = (e) => {
    e.preventDefault();
    this.props.history.push('/CandidateProfileStatus');
}

  editProfile = (e) => {
    e.preventDefault();
    this.props.history.push('/EditProfileComponent');
}
uploadProfile = (e) => {
  e.preventDefault();
  this.props.history.push('/UploadFile');
}

  home = (e) => {
    e.preventDefault();
    this.props.history.push('/LandingPage');
}

CandidateViewAllReq = (e) =>{
  e.preventDefault();
  this.props.history.push('/CandidateViewAllRequirements');
}

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
                <Nav.Link onClick={this.CandidateProfileStatus}>Profile Status</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.CandidateViewAllReq}>View All Requirements</Nav.Link>
                
              </Nav>
              <Nav>
              <NavDropdown
                    title={window.firstName + " "+window.lastName}
                    id="basic-nav-dropdown"
                    style={{ marginLeft: "20" }}
                  >
                    <NavDropdown.Item onClick={this.viewProfile}>
                      View Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.editProfile}>
                      Edit Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.uploadProfile}>
                      Upload Resume
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
        }} id="CardsYO">
        </div>
        <div>
          <div className="container d-flex justify-content-center" >
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center d-flex">
                  <div className=" overflow">
                    <img
                      src="/images/resume.png"
                      alt="Image 1"
                      className="card-img-top" width="50" height="250"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">Upload your best CV or Resume.</p>
                    <a onClick={this.uploadProfile} className="btn btn-outline-primary">
                      Upload Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center d-flex">
                  <div className=" overflow">
                    <img
                      src="/images/profile.png"
                      alt="Image 1"
                      className="card-img-top" width="50" height="250"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">Click here to view your profile and to edit it</p>
                    <a onClick={this.viewProfile} className="btn btn-outline-primary">
                      Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className= "overflow" >
                    <img
                      src="/images/Status.png"
                      alt="Image 1"
                      className="card-img-top" width="50" height="250"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">Check out your profile status</p>
                    <a onClick={this.CandidateProfileStatus} className="btn btn-outline-primary">
                      Status
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

export default withRouter(LandingPage);
