import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {components} from "react-select";
import ReactSelect from 'react-select';
import { Navbar, Container, Nav, NavDropdown ,Dropdown} from 'react-bootstrap';

Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

class PostRequirementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projectName:'',
                experience:'',
                 DDL1:[],
                 DDL2:[],
                 DDL3:[],
                 DDL4:[],
                 DDL12:[],
                domainValue:'',
                subDomainValue:'',
                jobRoleValue:'',
                jobRoleTypeValue:'',
                techStackValue:null,
                developerList:[],
                testerList:[],
                technicalArchitectList:[],
                bussinessAnalystList:[],
                managerList:[],
                fullstackList:[],
                frontendList:[],
                backendList:[],
                databaseList:[],
                list:'',
                bfsiUSEastList:[],
                bfsiUSWestList:[],
                lifeSciencesList:[],
                clBtsList:[],
                errors: {}
        }
        this.changeExperienceHandler = this.changeExperienceHandler.bind(this);
        this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
    }

    componentDidMount(){
        this.setState({
            DDL1: [
                { domain: 'IS-BFSI-US East', DDL2:[
                    {jobrole: 'Developer'},
                    {jobrole: 'Tester'},
                    {jobrole: 'Technical Architect'},
                    {jobrole: 'Bussiness Analyst'},
                    {jobrole: 'Manager'},
                ]},
                { domain: 'IS-BFSI-US West', DDL2:[
                    {jobrole: 'Developer'},
                    {jobrole: 'Tester'},
                    {jobrole: 'Technical Architect'},
                    {jobrole: 'Bussiness Analyst'},
                    {jobrole: 'Manager'},
                ]}, 
                { domain: 'IS-Life Sciences NA', DDL2:[
                    {jobrole: 'Developer'},
                    {jobrole: 'Tester'},
                    {jobrole: 'Technical Architect'},
                    {jobrole: 'Bussiness Analyst'},
                    {jobrole: 'Manager'},
                ]},
                { domain : 'CL-BTS', DDL2:[
                    {jobrole: 'Developer'},
                    {jobrole: 'Tester'},
                    {jobrole: 'Technical Architect'},
                    {jobrole: 'Bussiness Analyst'},
                    {jobrole: 'Manager'},
                ]}
            ]
        });

        
        this.setState({bfsiUSEastList: ['Capital Markets - I', 'Capital Markets - II', 'Capital Region', 'Large Bank/Mortgage', 'Mid-Atlantic', 'Mid-West', 'New England', 'PA & MI']});
        this.setState({bfsiUSWestList: ['BFSI-US-West 1.0', 'BFSI-US-West 1.1 Group1','BFSI-US-West 1.2-Group2', 'BFSI-US-West 1.3-Group3', 'BFSI-US-West 1.3-Group4', 'BFSI-US-West 1.3-Group5', 'BFSI-US-West 1.3-Group6']});
        this.setState({lifeSciencesList: ['IS-Life Sciences NA 1.0', 'IS-Life Sciences-East-1.2', 'IS-Life Sciences-J&J-1.1','IS-Life Sciences-West & Mid-West-1.3']});
        this.setState({clBtsList: ['AWS BU 1.0', 'EIS 1.0', 'Google BU 1.0', 'MBU - Azure', 'MBU - Bussiness Applications', 'MBU - Digital workplace']});

        this.setState({developerList: ['Fullstack Developer','Frontend Developer','Backend Developer', 'Database Developer']});
        this.setState({testerList: ['Manual Testing', 'Automatic Testing']});
        this.setState({technicalArchitectList:['Technical Architect']});
        this.setState({bussinessAnalystList:['Bussiness Analyst']});
        this.setState({managerList:['Manager']});



        
        this.setState({fullstackList:[{value:'HTML', label:'HTML'}, {value:'CSS', label:'CSS'}, {value:'JavaScript', label:'JavaScript'}, {value:'Bootstrap', label:'Bootstrap'}, {value:'Angular', label:'Angular'},  {value:'React', label:'React'},  {value:'Vue.js', label:'Vue.js'},  {value:'Flutter', label:'Flutter'},  {value:'Ionic', label:'Ionic'}, {value:'C', label:'C'}, {value:'Java', label:'Java'},{value:'Python', label:'Python'}, {value:'Spring Boot', label:'Spring Boot'}, {value:'NodeJS', label:'NodeJS'}, {value:'PHP', label:'PHP'}, {value:'Django', label:'Django'}]});
        this.setState({frontendList:[{value:'HTML', label:'HTML'}, {value:'CSS', label:'CSS'}, {value:'JavaScript', label:'JavaScript'}, {value:'Bootstrap', label:'Bootstrap'}, {value:'Angular', label:'Angular'},  {value:'React', label:'React'},  {value:'Vue.js', label:'Vue.js'},  {value:'Flutter', label:'Flutter'},  {value:'Ionic', label:'Ionic'}]}); 
        this.setState({backendList:[{value:'C', label:'C'}, {value:'Java', label:'Java'},{value:'Python', label:'Python'}, {value:'Spring Boot', label:'Spring Boot'}, {value:'NodeJS', label:'NodeJS'}, {value:'PHP', label:'PHP'}, {value:'Django', label:'Django'}]});
        this.setState({databaseList:[{value:'Oracle SQL', label:'Oracle SQL'}, {value:'MySql', label:'MySql'}, {value:'PostgreSQL', label:'PostgreSQL'}, {value:'DB2', label:'DB2'}, {value:'MongoDB', label:'MongoDB'}]});
        


    }

    selectDomain(e){
        this.setState({ domainValue: e.target.value});
        this.setState({ DDL2 : this.state.DDL1.find(x => x.domain === e.target.value).DDL2});
        this.state.DDL12=[];
        switch(e.target.value){
            case 'IS-BFSI-US East':
                for(var i of this.state.bfsiUSEastList) {
                    this.state.DDL12.push(i);
                }
                break;
            case 'IS-BFSI-US West':
                for(i of this.state.bfsiUSWestList) {
                    this.state.DDL12.push(i);
                }
                break;
            case 'IS-Life Sciences NA':
                for(i of this.state.lifeSciencesList) {
                    this.state.DDL12.push(i);
                }
                break;
            case 'CL-BTS':
                for(i of this.state.clBtsList) {
                    this.state.DDL12.push(i);
                }
                break;
        }
    }

    selectSubDomain(e){
        this.setState({ subDomainValue: e.target.value});
        
    }

    
    selectJobRole(e){
        this.setState({ jobRoleValue: e.target.value});
        this.state.DDL3=[];
        switch(e.target.value){
            case 'Developer':
                for( var i of this.state.developerList) {
                    this.state.DDL3.push(i);
                }
                break;
            case 'Tester':
                for(i of this.state.testerList) {
                    this.state.DDL3.push(i);
                }
                break;
            case 'Technical Architect':
                for(i of this.state.technicalArchitectList) {
                    this.state.DDL3.push(i);
                }
                break;
            case 'Bussiness Analyst':
                for(i of this.state.bussinessAnalystList) {
                    this.state.DDL3.push(i);
                }
                break;
            case 'Manager':
                for(i of this.state.managerList) {
                    this.state.DDL3.push(i);
                }
                break;
        }
    }

    selectJobRoleType(e){
        this.setState({ jobRoleTypeValue: e.target.value});
        this.state.DDL4=[];
        switch(e.target.value){
            case 'Fullstack Developer':
                for(var i of this.state.fullstackList) {
                    this.state.DDL4.push(i);
                }
                break;
            case 'Frontend Developer':
                for(i of this.state.frontendList) {
                    this.state.DDL4.push(i);
                }
                break;
            case 'Backend Developer':
                for(i of this.state.backendList) {
                    this.state.DDL4.push(i);
                }
                break;
            case 'Database Developer':
                for(i of this.state.databaseList) {
                    this.state.DDL4.push(i);
                }
                break;
        }
    }
    
    selectTechStackType = (e) => {
        this.setState({
            techStackValue: e
          });
      }

      handlePost = (e) => {
        e.preventDefault();
        if (this.validate()) {
        {this.state.techStackValue.map(x=> {
            this.state.list=this.state.list.concat(x.value);
            this.state.list=this.state.list.concat(",");
        })}
        this.state.list = this.state.list.slice(0, -1);
        let details = {sessionId: 'dsdf', isu: this.state.domainValue, subIsu: this.state.subDomainValue, jobRole: this.state.jobRoleValue, jobRoleType:this.state.jobRoleTypeValue, techStack: this.state.list, experience:this.state.experience, projectName:this.state.projectName, 
        };
        console.log('details => ' + JSON.stringify(details));
        
        // step 5
        EmployeeService.postRequirement(details).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            this.props.history.push('/ViewRequirements');
            alert("Posted requirement successfully, Id: "+s.reqId)
            }
            else{this.props.history.push('/PostRequirementComponent');
                alert("Post requirements fail");
            }
        });

        }
    }

    changeExperienceHandler= (event) => {
        this.setState({experience: event.target.value});
    }

    changeProjectNameHandler= (event) => {
        this.setState({projectName: event.target.value});
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
  
    validate() {
        let input = {
            experience: this.state.experience
        };
        let errors = {};
        let isValid = true;
    
        if (typeof input["experience"] !== "undefined") {
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(input["experience"])) {
            isValid = false;
            errors["experience"] = "Please enter only number.";
          } 
        }
    
        this.setState({
          errors: errors,
        });
    
        return isValid;
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

    render() {
        // const dFlag=this.state.domainFlag;
        return (
            <div className="page-wrap">
                <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand>
              <img
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
                <br></br>
                   <div className = "container p-3">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "5rem" }}>
                                <div className="p-5">
                                <h1 className="text-center">Post a Requirement</h1><br></br>
                                <div className = "card-body">
                                    <div className = "form-group">
                                            <label for="validFirstName" class="form-label"> Project Name: </label>
                                            <input placeholder="Project Name" name="projectName" className="form-control" id="validFirstName"
                                                value={this.state.projectName} onChange={this.changeProjectNameHandler} required></input>
                                    </div>
                                    <br></br>
                                    <select class="form-select" value={this.state.domainValue} onChange={this.selectDomain.bind(this)} >
                                        <option>-- IOU --</option>
                                        {this.state.DDL1.map(x=> {
                                            return <option>{x.domain}</option>
                                        })}
                                    </select>
                                    <br></br>
                                    <select class="form-select" value={this.state.subDomainValue} onChange={this.selectSubDomain.bind(this)} >
                                        <option>-- Sub-IOU --</option>
                                        {this.state.DDL12.map(x=> {
                                            return <option>{x}</option>
                                        })}
                                    </select>
                                    <br></br>
                                    <select class="form-select" value={this.state.jobRoleValue} onChange={this.selectJobRole.bind(this)}>
                                        <option>-- Job Role --</option>
                                        {this.state.DDL2.map(x=> {
                                            return <option>{x.jobrole}</option>
                                        })}
                                    </select>
                                    <br></br>
                                    <select class="form-select" value={this.state.jobRoleTypeValue} onChange={this.selectJobRoleType.bind(this)}>
                                        <option>-- Job Role Type--</option>
                                        {this.state.DDL3.map(x=> {
                                            return <option>{x}</option>
                                        })}
                                    </select>
                                    <br></br>
                                    <ReactSelect
                                            options={this.state.DDL4}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={false}
                                            components={{
                                                Option
                                            }}
                                            onChange={this.selectTechStackType}
                                            allowSelectAll={true}
                                            value={this.state.techStackValue}
                                    />
                                    <br></br>
                                    <div className = "form-group">
                                        <input placeholder="Experience (in Years)" name="experience" className="form-control" 
                                            value={this.state.experience} onChange={this.changeExperienceHandler}/>
                                    </div><div className="text-danger">{this.state.errors.experience}</div>
                                    <br></br>
                                    <div class="text-center">
                                    <button className="btn btn-primary" disabled={!this.state.projectName ||!this.state.domainValue ||!this.state.subDomainValue||
                    !this.state.jobRoleValue ||!this.state.jobRoleTypeValue || !this.state.techStackValue ||!this.state.experience} onClick={this.handlePost}>Post</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default PostRequirementComponent;