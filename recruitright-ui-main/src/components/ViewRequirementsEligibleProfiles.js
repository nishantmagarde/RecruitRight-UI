import React, {Component } from 'react';
import { Navbar, Container, Nav, NavDropdown ,Dropdown} from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import './GlobalVariable';
import EmployeeService from '../services/EmployeeService';
import { Header,Table} from "semantic-ui-react";
import FooterComponent from './FooterComponent';

class ViewRequirementsEligibleProfiles extends Component {
    constructor() {
        super();
        this.state = { 
            requirements:[],
         }
         this.renderRequirement = this.renderRequirement.bind(this);
    }

    componentDidMount(){
        let employee = {sessionId:global.sessionId} ;
        console.log(employee);
        EmployeeService.pocReqEligibleProfiles(employee).then(res => {
            let s=res.data;
            console.log(s);
            console.log(s.requirements);
            this.setState({requirements:s.feedbackList});
        })
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
      this.props.history.push('/ProfilePOC');
    };
  
    editProfile = (e) => {
      e.preventDefault();
      this.props.history.push('/EditProfilePOC');
  }
    uploadProfile = (e) => {
    e.preventDefault();
    this.props.history.push('/UploadProfilePOC');
  }
  
  postNewReq = (e) => {
    e.preventDefault();
    this.props.history.push('/PostRequirementComponent');
  }
  
  closeReq = (e) => {
    e.preventDefault();
    this.props.history.push('/CloseRequirement');
  }
  
  ViewAllReq = (e) => {
    e.preventDefault();
    this.props.history.push('/ViewAllRequirements');
  }
  
  ViewReqPOC = (e) => {
    e.preventDefault();
    this.props.history.push('/ViewRequirements');
  }
  ViewReqEpPOC = (e) => {
    e.preventDefault();
    this.props.history.push('/ViewRequirementsEligibleProfiles');
  }
  
    home = (e) => {
      e.preventDefault();
      this.props.history.push('/POCHomeComponent');
  }
  

    renderRequirement = (req,index) => {
        return(
            <Table.Row key={index}>
                <Table.Cell>{req.reqId}</Table.Cell>
                <Table.Cell>{req.userId}</Table.Cell>
                <Table.Cell>{req.name}</Table.Cell>
                <Table.Cell>{req.contact}</Table.Cell>
                <Table.Cell>{req.profileScore}</Table.Cell>
            </Table.Row>
        )
    }

    render() { 
        return ( 
            <div className="page-wrap">
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
                    <NavDropdown.Item onClick={this.postNewReq}>
                    Post New Requirement
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.closeReq}>
                      Close Requirement
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.ViewAllReq}>
                      View All Requirements
                    </NavDropdown.Item>
                    <Dropdown.Divider />
                    <NavDropdown.Item onClick={this.ViewReqPOC}>
                      View Your Requirements
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.ViewReqEpPOC}>
                      View Your Eligible Profiles
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
      
        <div className="container" style={{marginTop:"2em"}}>
        <b><Header
            as="h1"
            content="View Your Eligible Profiles"
            style={{
              fontWeight: "normal",
              textAlign:"center",
              marginBottom: 0,
              padding: "2em",
            }}
          /></b>
            <ReactBootstrap.Table stripped bordered hover>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Requirement Id</Table.HeaderCell>
                        <Table.HeaderCell>User Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Contact</Table.HeaderCell>
                        <Table.HeaderCell>Profile Score</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.requirements.map(this.renderRequirement)}   
                </Table.Body>
            </ReactBootstrap.Table>
            </div><FooterComponent></FooterComponent>
            </div>
         );
    }
}
 
export default ViewRequirementsEligibleProfiles;