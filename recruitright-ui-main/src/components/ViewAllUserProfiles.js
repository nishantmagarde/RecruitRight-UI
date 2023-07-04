import React, {Component } from 'react';
import { Navbar, Container, Nav, NavDropdown ,Dropdown,DropdownButton} from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import './GlobalVariable';
import EmployeeService from '../services/EmployeeService';
import { Header,Table} from "semantic-ui-react";
import FooterComponent from './FooterComponent';

class   ViewAllUserProfiles extends Component {
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
        EmployeeService.AllActiveUserProfiles(employee).then(res => {
            let s=res.data;
            console.log(s);
            console.log(s.requirements);
            this.setState({requirements:s.userProfiles});
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
    
    viewReq = (e) => {
      e.preventDefault();
      this.props.history.push('/ViewRequirements');
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

    active = (e) => {
        e.preventDefault();
        this.state.requirements=[];
        EmployeeService.AllActiveUserProfiles().then(res => {
            let s=res.data;
            console.log(s);
            console.log(s.requirements);
            this.setState({requirements:s.userProfiles});
        })
    }

    selected = (e) => {
        e.preventDefault();
        this.state.requirements=[];
        let employee = {sessionId:global.sessionId} ;
        console.log(employee);
        EmployeeService.AllSelectedUserProfiles(employee).then(res => {
            let s=res.data;
            console.log(s);
            console.log(s.requirements);
            this.setState({requirements:s.userProfiles});
        })
    }

    progress = (e) => {
        e.preventDefault();
        this.state.requirements=[];
        let employee = {sessionId:global.sessionId} ;
        console.log(employee);
        EmployeeService.AllInProgressUserProfiles(employee).then(res => {
            let s=res.data;
            console.log(s);
            console.log(s.requirements);
            this.setState({requirements:s.userProfiles});
        })
    }

    renderRequirement = (req,index) => {
        return(
            <Table.Row key={index}>
                <Table.Cell>{req.uploader}</Table.Cell>
                <Table.Cell>{req.userId}</Table.Cell>
                <Table.Cell>{req.name}</Table.Cell>
                <Table.Cell>{req.contact}</Table.Cell>
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
      
        <div className="container" style={{marginTop:"2em"}}>
        <b><Header
            as="h1"
            content="View All User Profiles"
            style={{
              fontWeight: "normal",
              textAlign:"center",
              marginBottom: 0,
              padding: "2em",
            }}
          /></b>
          
            <DropdownButton id="dropdown-item-button" title="Filter">
            <Dropdown.Item as="button" onClick={this.active}>Active</Dropdown.Item>
                <Dropdown.Item as="button" onClick={this.selected}>Selected</Dropdown.Item>
                <Dropdown.Item as="button" onClick={this.progress}>In Progress</Dropdown.Item>
            </DropdownButton>
<br></br>
            <ReactBootstrap.Table stripped bordered hover>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Uploded By</Table.HeaderCell>
                        <Table.HeaderCell>User Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Contact</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
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
 
export default ViewAllUserProfiles;