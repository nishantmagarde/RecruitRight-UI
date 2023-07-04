import React, { Component } from 'react';
import { Nav,Navbar} from "react-bootstrap";
import './GlobalVariable';
import {
  Container,
  Button,
  Grid,
  Icon,
  Header,
  List,
  Segment,
} from "semantic-ui-react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

signUp = (e) => {
    e.preventDefault();
    this.props.history.push('/signup');
}

login = (e) => {
  e.preventDefault();
  this.props.history.push('/login');
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link href="#AboutUs">About Us</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav className="me-auto">
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link onClick={this.login}>
                    Log In
                  </Nav.Link>
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link onClick={this.signUp}>
                    Sign Up
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <div id="home"></div>
      <Segment
        style={{
          padding: "6em 0em",
          background: "#1B1C1D",
          color: "rgba(255, 255, 255, 0.9)",
        }}
        vertical
      >
        <Container text>
          <Header
            as="h1"
            content="Welcome to the world of possibilities"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              textAlign:"center",
              marginBottom: 0,
              marginTop: "1em",
            }}
          />
          <Header
            as="h3"
            content="Recruitment made easy "
            inverted
            style={{
              fontSize: "1.3em",
              fontWeight: "normal",
              textAlign:"center",
              marginBottom: 0,
              marginTop: "1em",
            }}
          /><br></br>
          <div className="text-center">
          <Button as="a" size="large" onClick={this.login}>
            Get Started
          </Button>
          </div>
        </Container>
      </Segment>
      <div style={{backgroundColor:"#f8f9fa"}} >
      <br></br><br></br><br></br>
          <Header as="h1" style={{ fontSize: "2em" ,textAlign:"center"}}>
                    Our Services
                  </Header><br></br><br></br>
          <div class="ui centered cards" >
            <div class="ui card" style={{width:250,height:200}}>
              <div class="content">
                <div class="header" style={{fontSize:25, textAlign:"center"}} >Easy Apply</div><br></br>
                <div class="description"><p style={{fontSize:20, textAlign:"center"}}>Single step protocol is used.</p></div>
              </div>
            </div>
            <div class="ui card" style={{width:250,height:200}}>
              <div class="content">
                <div class="header" style={{fontSize:25, textAlign:"center"}}>Opportunities</div><br></br>
                <div class="description"><p style={{fontSize:20, textAlign:"center"}}>We market your skills to ove 1000+ decision makers.</p></div>
              </div>
            </div>
            <div class="ui card" style={{width:250,height:200}}>
              <div class="content">
                <div class="header" style={{fontSize:25, textAlign:"center"}}>Decision</div><br></br>
                <div class="description"><p style={{fontSize:20, textAlign:"center"}}>We provide the best suitables to you.</p></div>
              </div>
            </div>
          </div>
            
            <div style={{ padding: "8em 0em"}} vertical id="AboutUs" >
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column floated="right" width={6}>
                  <img
                    alt=""
                    bordered
                    rounded
                    src="/images/aboutus.png"
                    width="400"
                    height="275"
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    About Us
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    We are a team of five, working for an organisation to
                    recruitment easier. We apply 100's of positions on your behalf
                    by sending your resume and CV to 100+ decision makers in your
                    field of experience and education. In only one step, you'll be
                    well on your way to market yourself.
                    <br></br>
                    <br></br>
                    1. Send us your resume or CV
                    <br></br>
                    <br></br>
                    We will calculate your profile and circulate among the
                    recruiters to give you the best suitable career growth job.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
      <div
        
        style={{ padding: "2em 0em" }}
        textAlign="center"
        vertical 
        id="Contact"
      >
        <div className="text-center mb-5 bg-light" >
          <br></br><br></br>
          <Icon name='mail' size='huge' /><br></br>
          <h2 class="fw-bolder">Get in touch</h2>
          <p class="lead mb-0">We'd love to hear from you</p><br></br><br></br>
          <div class="ui form">
            <div class="ui input">
              <textarea type="text" rows="6" cols="65" name="Opinion" placeholder="Please share your opinions here, It matters to us"></textarea>
            </div><br></br><br></br>
            <Button as="a" size="large">
            Send
          </Button>
          
          </div>
          <br></br><br></br><br></br>
        </div>
      </div>
      </div>
      <Segment
        inverted
        vertical 
        style={{ margin: "0em 0em 0em", padding: "4em 0em" }}
      >
        <Container textAlign="center">
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
            </Grid.Column>
            <Grid.Row ><br></br><br></br>
              <p textAlign="center">All Rights Reserved to Recruit Right</p></Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div> );
  }
}
export default Home;

