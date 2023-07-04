import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import FooterComponent from './FooterComponent';
import './GlobalVariable';

class FeedbackComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            reqId: '',
            remarks: '',
            status: ''
        }
        this.changeReqId = this.changeReqId.bind(this);
        this.changeUserId = this.changeUserId.bind(this);
        this.changeRemarks = this.changeRemarks.bind(this);
        this.selectStatus = this.selectStatus.bind(this);
    }

    changeReqId= (event) => {
        this.setState({reqId: event.target.value});
    }

    changeUserId= (event) => {
        this.setState({userId: event.target.value});
    }

    changeRemarks= (event) => {
        this.setState({remarks: event.target.value});
    }

    selectStatus= (e)=> {
        this.setState({status:e.target.value});
    }

    cancel(){
        this.props.history.push('/FeedbackComponent');
            
    }

    sendFeedback = (e) => {
        e.preventDefault();
        let employee = {userId:this.state.userId, reqId:this.state.reqId, remarks: this.state.remarks, status: this.state.status};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        EmployeeService.feedback(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            alert('Feedback sent successfully');
            this.props.history.push('/EmployeeHomeComponent');
            }
            else{
              alert('Oops! Your Feedback did not reach us');
              this.props.history.push('/FeedbackComponent');
            }
        });
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
    this.props.history.push('/UploadFileEmployee');
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
            <div className="page-wrap">
               <div className = "container p-5 center">
                   
               <div className="card " style={{width: "35rem" }}>
                        <div className="p-5">
                                <form>
                                    <h1 className="text-center">Feedback</h1>
                                    <div className = "card-body"></div>
                                        <label style={{fontSize:16}}> Requirement Id: </label><br></br>
                                        <input name="reqId" className="form-control" 
                                            value={this.state.reqId} onChange={this.changeReqId} required/>
                                    <br></br>
                                        <label style={{fontSize:16}}> User Id: </label><br></br>
                                        <input name="userId" className="form-control" type="email"
                                            value={this.state.userId} onChange={this.changeUserId} required/>
                                    
                                    <br></br>
                                    <div>
                                        <label  style={{fontSize:16}} for="validsel" class="form-label">Status:</label>
                                        <select class="form-select" id="validsel" value={this.state.status} onChange={this.selectStatus.bind(this)} required="required">
                                        <option selected disabled value="">Choose Option</option>
                                        <option>Accept</option>
                                        <option>Reject</option>
                                        </select>
                                    </div>
                                    <br></br>
                                        <label style={{fontSize:16}}> Remarks: </label><br></br>
                                        <textarea name="Remarks" className="form-control" 
                                            value={this.state.remarks} onChange={this.changeRemarks} required/>
                                  
                                    <br></br>
                                    <div class="text-center">
                                    <button className="btn btn-primary" disabled={!this.state.reqId || !this.state.userId || !this.state.status || !this.state.remarks} onClick={this.sendFeedback}>Submit</button>
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
 
export default FeedbackComponent;