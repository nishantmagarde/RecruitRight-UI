import React, {Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import './GlobalVariable';
import EmployeeService from '../services/EmployeeService';
import { Header,Table} from "semantic-ui-react";
import FooterComponent from './FooterComponent';

class CandidateProfileStatus extends Component {
    constructor() {
        super();
        this.state = { 
          userProfileStatusList:[],
         }
         this.renderUserProfileStatusList = this.renderUserProfileStatusList.bind(this);
    }

    componentDidMount(){
        let employee = {sessionId:global.sessionId} ;
        EmployeeService.candidateProfileStatus(employee).then(res => {
            let s=res.data;
            console.log(s);
            console.log(s.userProfileStatusList);
            this.setState({userProfileStatusList:s.userProfileStatusList});
        })
    }
    
  
    viewProfile= (e) => {
        e.preventDefault();
        this.props.history.push('/ProfileComponent');
      };
    
      editProfile = (e) => {
        e.preventDefault();
        this.props.history.push('/EditProfileComponent');
    }
    uploadProfile = (e) => {
      e.preventDefault();
      this.props.history.push('/UploadFile');
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

    CandidateProfileStatus = (e) => {
        e.preventDefault();
        this.props.history.push('/CandidateProfileStatus');
    }

    CandidateViewAllReq = (e) =>{
        e.preventDefault();
        this.props.history.push('/CandidateViewAllRequirements');
    }
      home = (e) => {
        e.preventDefault();
        this.props.history.push('/LandingPage');
    }

    renderUserProfileStatusList = (req,index) => {
        return(
            <Table.Row key={index}>
                <Table.Cell>{req.reqId}</Table.Cell>
                <Table.Cell>{req.projectName}</Table.Cell>
                <Table.Cell>{req.status}</Table.Cell>
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
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.CandidateProfileStatus}>Profile Status</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.CandidateViewAllReq}>View All Requirements</Nav.Link>
              </Nav>
              <Nav>
              <NavDropdown
                    title={global.firstName + " " + global.lastName}
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
      
        <div className="container" style={{marginTop:"2em"}}>
        <b><Header
            as="h1"
            content="Profile Status"
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
                        <Table.HeaderCell>Project Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.userProfileStatusList.map(this.renderUserProfileStatusList)}   
                </Table.Body>
            </ReactBootstrap.Table>
            </div>
            <FooterComponent></FooterComponent>
            </div>
         );
    }
}
 
export default CandidateProfileStatus;