import EmployeeService from "../services/EmployeeService";
import React, { Component } from "react";
import FooterComponent from "./FooterComponent";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import Pdf from '../SampleResume.pdf';

class UploadFile extends Component {
  state = {
    resumeList: "",
  };

  onFileChange = (e) => {
    this.setState({ resumeList: e.target.files[0] });
  };

  onFileUpload = async (e) => {
    const formData = new FormData();
    for (let resumeList in this.state) {
      formData.append(resumeList, this.state[resumeList]);
    }
    if(this.state.resumeList==="")
    {
      alert("Please upload your resume");
    }
    console.log(this.state.resumeList);
    EmployeeService.Upload(formData).then((res) => {
      let s = res.data;
      if (s.booleanMsg) 
      {
        alert("Uploaded Successfully");
        this.props.history.push('/CandidateProfileStatus');
      } else {alert("Upload Fail!");
     }
    });
  };

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
        this.props.history.push("/Home");
      }
    });
  };

  CandidateProfileStatus = (e) => {
    e.preventDefault();
    this.props.history.push('/CandidateProfileStatus');
}

  editProfile = () => {
    this.props.history.push("/EditProfileComponent");
    
  };

  CandidateViewAllReq = (e) =>{
    e.preventDefault();
    this.props.history.push('/CandidateViewAllRequirements');
  }

  uploadProfile = () => {
    this.props.history.push("/UploadFile");
    
  };

  cancel=()=>{
    this.props.history.push('/ProfileComponent');
  }

  viewProfile = () => {
    this.props.history.push("/ProfileComponent");
    
  };

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

  home=()=>{
    this.props.history.push("/LandingPage");
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
                  style={{ marginRight: "1.5em" }}
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
                  <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <FooterComponent></FooterComponent>

        <div className="page-wrap">
          <div className="container p-5 center">
            <div
              className="card "
              style={{ width: "35rem", height: "25rem", marginTop: "7rem" }}
            >
              <div className="p-5">
                <form>
                  <h1 className="text-center">Upload Profile</h1>
                  <br></br>
                  <div class="alert alert-info" role="alert">
                    Upload only PDF Attachment
                  </div>
                  <div>
                    <input
                      type="file"
                      name="resumeList"
                      onChange={(e) => this.onFileChange(e)}
                      accept="application/pdf"
                    />
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={this.onFileUpload}
                    >
                      Upload
                    </button>
                    <br></br>
                    <br></br><br></br>
                    <a href = {Pdf} target = "_blank">View Sample Pdf</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadFile;
