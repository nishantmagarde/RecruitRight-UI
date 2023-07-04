import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class SignUpComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userId: '',
            userType: '',
            firstName: '',
            lastName: '',
            password: '',
            emailId: '',
            contact: '',
            is_Active: '',
            errors: {},
            p: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        if(this.validate()){
        let employee = {userId: this.state.emailId, userType:this.state.userType,firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact, password: this.state.password, emailId:this.state.emailId, confirmPassword:this.state.confirmPassword
        };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.signUp(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            this.props.history.push('/login');
            alert('Sign up successful');
            }
            else{
                console.log("unsuccessful");
            this.props.history.push('/signup');
            alert('Sign up failed');
            }
        });}
    }

    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeContactHandler= (event) => {
        this.setState({contact: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeConfirmPasswordHandler= (event) => {
        this.setState({confirmPassword: event.target.value});
    }

    selectUserType= (e)=> {
        this.setState({userType:e.target.value});
    }

    cancel(){
        this.props.history.push('/signup');
            
    }

    validate(){
        let input = {contact: this.state.contact, password: this.state.password, emailId:this.state.emailId, confirmPassword:this.state.confirmPassword};
        let errors = {};
        let isValid = true;

        if (typeof input["contact"] !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input["contact"])) {
            isValid = false;
            errors["contact"] = "Please enter only number.";
            }else if(input["contact"].length != 10){
            isValid = false;
            errors["contact"] = "Please enter valid phone number.";
            }
        }
    
        if (typeof input["emailId"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["emailId"])) {
            isValid = false;
            errors["emailId"] = "Please enter valid email address.";
          }
        }
    
        if (typeof input["password"] !== "undefined" && typeof input["confirmPassword"] !== "undefined") {
            
          if (input["password"] != input["confirmPassword"]) {
            isValid = false;
            errors["password"] = "Passwords don't match.";
          }
        } 
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }

    render() {
        return (
            <div className="page-wrap">
                <br></br>
                   <div className = "container-fluid p-4">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3"> 
                                <div className="p-5"> <h3 className="text-center">Sign Up</h3> 
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label for="validFirstName" class="form-label"> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" id="validFirstName"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler} required></input>
                                        </div>
                                        <div className = "form-group">
                                            <label for="validLastName" class="form-label"> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" id="validLastName" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label for="validEmail" class="form-label"> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" id="validEmail" type="email"
                                                value={this.state.emailId} onChange={this.changeEmailHandler} required/>
                                            <div className="text-danger">{this.state.errors.emailId}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label for="validContact" class="form-label"> Contact: </label>
                                            <input placeholder="Contact" name="contact" className="form-control" id="validContact"
                                                value={this.state.contact} onChange={this.changeContactHandler} required/>
                                            <div className="text-danger">{this.state.errors.contact}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label for="validPassword" class="form-label"> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" id="validPassword"
                                                value={this.state.password} onChange={this.changePasswordHandler} type="password" required/>
                                            <div className="text-danger">{this.state.errors.password}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label for="validConfirmPassword" class="form-label"> Confirm Password: </label>
                                            <input placeholder="Confirm Password" name="confirmPassword" className="form-control" id="validConfirmPassword"
                                                value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler} type="password" required/>
                                            <div className="text-danger">{this.state.errors.confirmPassword}</div>
                                        </div>
                                        <div>
                                        <label for="validationDefault04" class="form-label">User Type:</label>
                                        <select class="form-select" id="validationDefault04" value={this.state.userType} onChange={this.selectUserType.bind(this)} required="required">
                                        <option selected disabled value="">Choose Option</option>
                                        <option>Candidate</option>
                                        <option>RMG</option>
                                        <option>Account POC</option>
                                        <option>Panelist</option>
                                        </select>
                                        </div>
                                        <br></br>
                                        <button disabled={!this.state.firstName || !this.state.lastName|| !this.state.emailId || !this.state.password || !this.state.userType || !this.state.contact || !this.state.confirmPassword} className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Sign Up</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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

export default SignUpComponent
