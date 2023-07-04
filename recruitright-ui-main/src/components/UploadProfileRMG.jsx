import EmployeeService from '../services/EmployeeService';
import React,{Component} from 'react';
import FooterComponent from './FooterComponent';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Pdf from '../SampleResume.pdf';

class UploadProfileRMG extends Component {
	constructor(props) {
        super(props)
        this.state = {
              f:null,
        }
    }

	onFileChange = e => {
		const formData = new FormData(); 
		for( let i =0; i <e.target.files.length; i++){
			formData.append('resumeList', e.target.files[i]);}
		this.state.f=formData;
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
  
onFileUpload = async e => {
  const formData = new FormData();
    for (let resumeList in this.state) {
      formData.append(resumeList, this.state[resumeList]);
    }
  if(this.state.f==null)
    {
      alert("Please upload your resume");
    }
	EmployeeService.Upload(this.state.f).then(res =>{
        let s=res.data;
        
        if(s.booleanMsg){
            console.log(s.incorrectProfiles);
            if(s.incorrectProfiles){
              alert("Uploaded all the files, except "+s.incorrectProfiles);
            }
            else{
              alert("Upload Successful");
              this.props.history.push('/RMGUploadedProfiles');
            }
        }
        else{
            alert("Upload File");
        }
    });
	};




	
	render() {
	return (<div>
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
<div className="page-wrap">
<div className="container p-5 center">
  <div
    className="card "
    style={{ width: "35rem", height: "23rem", marginTop: "7rem" }}
  >
    <div className="p-5">
      <form>
        <h1 className="text-center">Upload Candidate Profiles</h1>
        <br></br>
        <div class="alert alert-info" role="alert">
          Upload only PDF Attachment
        </div>
        <div>
				<input type="file" onChange={(e) => this.onFileChange(e)} accept="application/pdf" multiple="multiple"/>
				<button type="button" class="btn btn-primary" onClick={this.onFileUpload}>Upload</button><br></br>
        <br></br><br></br>
        <a href = {Pdf} target = "_blank">View Sample Pdf</a>
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

export default UploadProfileRMG;