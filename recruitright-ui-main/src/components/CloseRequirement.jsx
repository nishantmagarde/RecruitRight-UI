import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Navbar, Container, Nav, NavDropdown ,Dropdown} from 'react-bootstrap';
import FooterComponent from './FooterComponent';
import './GlobalVariable';

class CloseRequirement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reqId: '',
            errors:{}
        }
        this.changeReqId = this.changeReqId.bind(this);
    }

    changeReqId= (event) => {
        this.setState({reqId: event.target.value});
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

    cancel(){
        this.props.history.push('/POCHomeComponent');
            
    }

    validate() {
      let input = {
          reqId: this.state.reqId
      };
      let errors = {};
      let isValid = true;
  
      if (typeof input["reqId"] !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["reqId"])) {
          isValid = false;
          errors["reqId"] = "Please enter only number.";
        } 
      }
  
      this.setState({
        errors: errors,
      });
  
      return isValid;
    }

    closeRequirement = (e) => {
        e.preventDefault();
        if (this.validate()) {
        let employee = {reqId:this.state.reqId};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        EmployeeService.closeRequirement(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            this.props.history.push('/POCHomeComponent');
            alert('Requirement Closed.');
            }
            else{
                console.log("unsuccessful");
                alert('Error: Unable to close the requirement.');
                this.props.history.push('/CloseRequirement');
            }
        });
      }
    }

    
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
    logout = (e) => {
        e.preventDefault();
        window.userId="";
            window.userType="";
            window.firstName="";
            window.lastName="";
            window.contact="";
            window.sessionId="";
        this.props.history.push('/home');
    }

    render() { 
        return (  <div>
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
            <div className="page-wrap">
               <div className = "container p-5 center">
                   
               <div className="card " style={{width: "35rem" }}>
                        <div className="p-5">
                                <form>
                                    <h1 className="text-center">Close Requirement</h1>
                                    <div className = "card-body"></div>
                                        <label style={{fontSize:16}}> Requirement Id: </label><br></br>
                                        <input name="reqId" className="form-control" 
                                            value={this.state.reqId} onChange={this.changeReqId} required/>
                                            <div className="text-danger">{this.state.errors.reqId}</div>
                                    <br></br>
                                    <div class="text-center">
                                    <button className="btn btn-primary" disabled={!this.state.reqId} onClick={this.closeRequirement}>Submit</button>
                                    <button className="btn btn-primary" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div><FooterComponent></FooterComponent>
               </div>     
        );
    }
}
 
export default CloseRequirement;