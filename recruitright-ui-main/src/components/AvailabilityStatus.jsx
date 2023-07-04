import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import FooterComponent from './FooterComponent';
import './GlobalVariable';

class AvailabilityStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
          date: '',
          time: '',
          userId: '',
          reqId:'',
          errors: {},
        };
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeuserId = this.onChangeuserId.bind(this);
        this.onChangeReqId = this.onChangeReqId.bind(this);
    }

    onChangeDate= (event) => {
      this.setState({date: event.target.value});
  }

    onChangeTime= (event) => {
      this.setState({time: event.target.value});
  }

    onChangeuserId= (event) => {
      this.setState({userId: event.target.value});
  }

    onChangeReqId= (event) => {
      this.setState({reqId: event.target.value});
    }

    sendAvailabilityStatus= (e) => {
      e.preventDefault();
      if (this.validate()) {
      let employee = {userId:this.state.userId, reqId:this.state.reqId, date: this.state.date, time: this.state.time};
      console.log('employee => ' + JSON.stringify(employee));
      EmployeeService.AvailabilityStatus(employee).then(res =>{
          let s=res.data;
          if(s.booleanMsg){
            alert('Thanks for your letting know your status. We will reach out to you soon.');
            this.props.history.push('/EmployeeHomeComponent');
            }
            else{
              alert('Oops! Your status did not reach us');
              this.props.history.push('/FeedbackComponent');
            }
      });
    }
  }

  validate() {
    let input = {
      reqId: this.state.reqId,
      userId: this.state.userId
    };
    let errors = {};
    let isValid = true;
    var pattern;

    if (typeof input["reqId"] !== "undefined") {
      pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["reqId"])) {
        isValid = false;
        errors["reqId"] = "Please enter only number.";
      }
    }

    if (typeof input["userId"] !== "undefined") {
      pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["userId"])) {
        isValid = false;
        errors["userId"] = "Please enter valid email address.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            <div className="page-wrap">
               <div className = "container p-5 center">
               <div className="card " style={{width: "35rem" }}>
                        <div className="p-5">
                        <form onSubmit={this.onSubmit}>
                        <h1 className="text-center">Availability Status</h1>
                        <div className = "card-body"></div>
                        <label style={{fontSize:16}}> Email Id: </label><br></br>
                          <input name="userId" className="form-control" type="email" value={this.state.userId} onChange={this.onChangeuserId} required/>
                          <div className="text-danger">{this.state.errors.userId}</div>
                          <br></br>
                          <label style={{fontSize:16}}> Req Id: </label><br></br>
                          <input name="reqId" className="form-control" value={this.state.reqId} onChange={this.onChangeReqId} required/>
                          <div className="text-danger">{this.state.errors.reqId}</div>
                          <br></br> 
                          <div>
                          <label  style={{fontSize:16}} for="validsel" class="form-label">Date:</label>
                            <select class="form-select" id="validsel" value={this.state.date}  onChange={this.onChangeDate} required="required">
                            <option selected disabled value="">Choose Option</option>
                            <option>Tomorrow</option>
                            <option>Day After Tomorrow</option>
                            </select>
                          <br></br>
                          <label  style={{fontSize:16}} for="validsel" class="form-label">Time:</label>
                            <select class="form-select" id="validsel" value={this.state.time} onChange={this.onChangeTime} required="required">
                            <option selected disabled value="">Choose Option</option>
                            <option>9am to 1pm</option>
                            <option>2pm to 6pm</option>
                            </select>
                          </div>
                          <div class="text-center"><br></br>
                          <button className="btn btn-primary" disabled={!this.state.reqId || !this.state.userId || !this.state.date || !this.state.time} onClick={this.sendAvailabilityStatus}>Submit</button>
                          </div>
                        </form>
                        </div>
                    </div>
                  </div><FooterComponent></FooterComponent>
               </div>
            </div>     
        );
    }
}
 
export default AvailabilityStatus;