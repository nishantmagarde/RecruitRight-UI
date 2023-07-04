
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Route } from 'react-router';
import CandidateHomeComponent from '../components/CandidateHomeComponent';
import '../components/GlobalVariable';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            userType: '',
            firstName: '',
            lastName: '',
            password: '',
            emailId: '',
            contact: '',
            errors:{},
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.loginEmp = this.loginEmp.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    handleSelect = (event) => {
        this.setState({userType: event});
        console.log(event);
    }

    loginEmp = (e) => {
        e.preventDefault();
        if(this.validate()){
        let employee = {userId: this.state.userId, userType: this.state.userType,firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact, password: this.state.password};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('Sahiti firstName =>'+employee['firstName']+'SAHITI');
        
        
        // step 5
        EmployeeService.login(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
                const ut= this.state.userType;
                
                if(this.state.userType==='Candidate'){
                    this.props.history.push('/CandidateHomeComponent');
                    alert('Login Successful');
                }

                else if(this.state.userType==='RMG'){
                    this.props.history.push('/RMGHomeComponent');
                    alert('Login Successful');
                }
                else if(this.state.userType==='Panelist'){
                    this.props.history.push('/EmployeeHomeComponent');
                    alert('Login Successful');
                }
                else{
                    this.props.history.push('/POCHomeComponent');
                    alert('Login Successful');
                }
            }
            else{
                this.state.err=1;
                this.state.userId='';
                this.state.password='';
                this.state.userType='';
                this.props.history.push('/login');
                alert('Login Failed');
            }
        });
    }
    }

    selectUserType= (e)=> {
            this.setState({userType:e.target.value});
    }

    cancel(){
       // this.props.history.push('/employees');
       this.setState.userId='';
       this.setState.password='';
       this.setState.userType='';
    }

    validate(){
        let input = {userId:this.state.userId};
        let errors = {};
        let isValid = true;
    
        if (typeof input["userId"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["userId"])) {
            isValid = false;
            errors["userId"] = "Please enter valid email address.";
          }
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }

    LoginComponent = (props) => {
        return(
              <h2> {props.message} </h2>
        );
    }

    render() {
        const err=this.state.err;
        return (
            <div className="page-wrap">
                <br></br>
                   <div className = "container p-4">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <div className="p-5"><h3 className="text-center">Login</h3>
                            <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>User Id: </label>
                                            <input placeholder="Email@example.com" name="userId" className="form-control" type="email"
                                                value={this.state.userId} onChange={this.changeUserIdHandler} required="required"/>
                                                <div className="text-danger">{this.state.errors.userId}</div>
                                        </div><br></br>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" type="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler} required="required"/>
                                        </div><br></br>
                                        <div>
                                        <label for="validationDefault04" class="form-label">User Type:</label>
                                        <select class="form-select" id="validationDefault04" value={this.state.userType} onChange={this.selectUserType.bind(this)} required="required">
                                        <option selected disabled value="">Choose Option</option>
                                        <option>Candidate</option>
                                        <option>RMG</option>
                                        <option>Account POC</option>
                                        <option>Panelist</option>
                                        </select>
                                        </div><br></br>
                                       {/* <ProfileComponent sess={s.sessionId}></ProfileComponent> */} 
                                        <button disabled={!this.state.userId || !this.state.password || !this.state.userType} value={this.state.userType} className="btn btn-success" onClick={this.loginEmp}>Login</button>
                                
                                        <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                        <br></br><br></br><a href='http://localhost:3000/signup'>Create a new Account?</a>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default LoginComponent