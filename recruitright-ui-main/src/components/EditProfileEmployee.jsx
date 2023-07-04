import React, { Component} from 'react';
import EmployeeService from '../services/EmployeeService';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import FooterComponent from './FooterComponent';
import './GlobalVariable';

class EditProfileEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          firstName: window.firstName,
          lastName: window.lastName,
          contact: window.contact,
          sessionId: window.sessionId,
          errors:{},
         }
         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
         this.changeContactHandler = this.changeContactHandler.bind(this);
         this.saveOrUpdateProfile = this.saveOrUpdateProfile.bind(this);
    }

    saveOrUpdateProfile= (event) => {
      event.preventDefault();
      if (this.validate()) {
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact, sessionId: this.state.sessionId};
        console.log('employee => ' + JSON.stringify(employee));
        window.firstName=employee['firstName'];
      window.lastName=employee['lastName'];
      window.contact=employee['contact'];
      console.log('Window employee => ' + window.firstName+" "+window.lastName+" "+window.contact);
        EmployeeService.editDetails(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            this.props.history.push('/ProfileEmployee');
            alert("Updated details successfully");
            }
            else{
              alert("Error: Update details fail");
              this.props.history.push('/EditProfileEmployee');
            }
        });}
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
  
  changeFirstNameHandler= (value) => {
    this.setState({firstName: value});
  }

    changeLastNameHandler= (event) => {
      this.setState({lastName: event.target.value});
  }

     changeContactHandler= (event) => {
      this.setState({contact: event.target.value});
  }

    cancel=()=>{
      this.props.history.push('/ProfileEmployee');
    }

    viewProfile= (e) => {
      e.preventDefault();
      this.props.history.push('/ProfileEmployee');
    };
  
    editProfile = (e) => {
      e.preventDefault();
      this.props.history.push('/EditProfileEmployee');
  }
  
    uploadProfile = (e) => {
    e.preventDefault();
    this.props.history.push('/UploadProfileEmployee');
  }
  
  feedback=(e) =>{
    e.preventDefault();
    this.props.history.push('/FeedbackComponent');
  }
  
  viewReqPanelist = (e) => {
    e.preventDefault();
    this.props.history.push('/ViewRequirementsPanelist');
  }
  
    home = (e) => {
        e.preventDefault();
        this.props.history.push('/EmployeeHomeComponent');
    }
  
    validate() {
      let input = {
        contact: this.state.contact
      };
      let errors = {};
      let isValid = true;
  
      if (typeof input["contact"] !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["contact"])) {
          isValid = false;
          errors["contact"] = "Please enter only number.";
        } else if (input["contact"].length !== 10) {
          isValid = false;
          errors["contact"] = "Please enter valid phone number.";
        }
      }
  
      this.setState({
        errors: errors,
      });
  
      return isValid;
    }

    render() { 
        return ( <div>
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
                <Nav.Link onClick={this.viewReqPanelist}>All Requirements</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.feedback}>Feedback</Nav.Link>
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
                                  <h1 className="text-center">Edit Profile</h1>
                                  <div className = "card-body"></div>
                                      <label style={{fontSize:16}}> First Name: </label><br></br>
                                      <input name="firstName" className="form-control" type="text"
                                          defaultValue={window.firstName}  onChange={this.changeFirstNameHandler} required/>
                                  <br></br>
              
                                      <label style={{fontSize:16}}> Last Name: </label><br></br>
                                      <input name="lastName" className="form-control" type="text"
                                          defaultValue={window.lastName}  onChange={this.changeLastNameHandler} required/>
                                  
                                  <br></br>
                                      <label style={{fontSize:16}}> Contact: </label><br></br>
                                      <input name="contact" className="form-control" 
                                          defaultValue={window.contact} onChange={this.changeContactHandler} required/>
                                          <div className="text-danger">{this.state.errors.contact}</div>
                                
                                  <br></br>
                                  <div className="text-center">
                                  <button className="btn btn-primary" onClick={this.saveOrUpdateProfile}>Save Profile</button>
                                  <button className="btn btn-primary" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                  </div>
                              </form>
                          </div>
                        </div>
                      </div>
              </div> <FooterComponent></FooterComponent> 
</div>
         );
        }
}
 
export default EditProfileEmployee;