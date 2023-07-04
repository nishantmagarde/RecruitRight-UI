import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProfileComponent from './components/ProfileComponent';
import EditProfileComponent from './components/EditProfileComponent';
import UploadFile from './components/UploadFile';
import RMGHomeComponent from './components/RMGHomeComponent';
import EmployeeHomeComponent from './components/EmployeeHomeComponent';
import PostRequirementComponent from './components/PostRequirementComponent';
import POCHomeComponent from './components/POCHomeComponent';
import FeedbackComponent from './components/FeedbackComponent';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Status from './components/RMGUploadedProfiles';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ViewRequirements from './components/ViewRequirements';
import ViewRequirementsPanelist from './components/ViewRequirementsPanelist';
import EditProfileEmployee from './components/EditProfileEmployee';
import EditProfilePOC from './components/EditProfilePOC';
import EditProfileRMG from './components/EditProfileRMG';
import ProfileEmployee from './components/ProfileEmployee';
import ProfileRMG from './components/ProfileRMG';
import ProfilePOC from './components/ProfilePOC';
import UploadProfileRMG from './components/UploadProfileRMG';
import CandidateProfileStatus from './components/CandidateProfileStatus';
import POCEligibleProfiles from './components/POCEligibleProfiles';
import CloseRequirement from './components/CloseRequirement';
import ViewAllRequirements from './components/ViewAllRequirements';
import Error from './components/Error';
import RMGUploadedProfiles from './components/RMGUploadedProfiles';
import ViewRequirementsEligibleProfiles from './components/ViewRequirementsEligibleProfiles';
import CandidateViewAllRequirements from './components/CandidateViewAllRequirements';
import ViewAllUserProfiles from './components/ViewAllUserProfiles';
import AvailabilityStatus from './components/AvailabilityStatus';

class App extends React.Component {

  componentDidMount() {
    const { history } = this.props;

    window.addEventListener("popstate", () => {
      history.go(1);
    });
  }

render(){
  return (
    <div>
        <Router>
                <div className="Container-fluid app-routes">
                    <Switch> 
                          <Route path = "/" exact render={() => <Redirect to="/Home" />}></Route>
                          <Route path = "/signup" exact component = {SignUp}></Route>
                          <Route path = "/login" exact component = {Login}></Route>
                          <Route path = "/ProfileComponent" exact component = {ProfileComponent}></Route>
                          <Route path = "/EditProfileComponent" exact component = {EditProfileComponent}></Route>
                          <Route path = "/UploadFile" exact component = {UploadFile}></Route>
                          <Route path = "/RMGHomeComponent" exact component = {RMGHomeComponent}></Route>
                          <Route path = "/EmployeeHomeComponent" exact component = {EmployeeHomeComponent}></Route>
                          <Route path = "/PostRequirementComponent" exact component = {PostRequirementComponent}></Route>
                          <Route path = "/POCHomeComponent" exact component = {POCHomeComponent}></Route>
                          <Route path = "/FeedbackComponent" exact component = {FeedbackComponent}></Route>
                          <Route path = "/LandingPage" exact component={()=> <LandingPage authorized={false} />}></Route>
                          <Route path = "/Home" exact component={Home}></Route>
                          <Route path = "/Status" exact component={Status}></Route>
                          <Route path = "/ForgotPassword" exact component={ForgotPassword}></Route>
                          <Route path = "/ResetPassword" exact component={ResetPassword}></Route>
                          <Route path = "/ViewRequirements" exact component = {ViewRequirements}></Route>
                          <Route path = "/ViewRequirementsPanelist" exact component = {ViewRequirementsPanelist}></Route>
                          <Route path = "/EditProfileEmployee" exact component = {EditProfileEmployee}></Route>
                          <Route path = "/EditProfilePOC" exact component = {EditProfilePOC}></Route>
                          <Route path = "/EditProfileRMG" exact component = {EditProfileRMG}></Route>
                          <Route path = "/ProfileEmployee" exact component = {ProfileEmployee}></Route>
                          <Route path = "/ProfileRMG" exact component = {ProfileRMG}></Route>
                          <Route path = "/ProfilePOC" exact component = {ProfilePOC}></Route>
                          <Route path = "/UploadProfileRMG" exact component = {UploadProfileRMG}></Route>
                          <Route path = "/CandidateProfileStatus" exact component = {CandidateProfileStatus}></Route>
                          <Route path = "/POCEligibleProfiles" exact component = {POCEligibleProfiles}></Route>
                          <Route path = "/CloseRequirement" exact component = {CloseRequirement}></Route>
                          <Route path = "/ViewAllRequirements" exact component = {ViewAllRequirements}></Route>
                          <Route path = "/ViewRequirementsEligibleProfiles" exact component = {ViewRequirementsEligibleProfiles}></Route>
                          <Route path = "/RMGUploadedProfiles" component = {RMGUploadedProfiles}></Route>
                          <Route path = "/CandidateViewAllRequirements" component = {CandidateViewAllRequirements}></Route>
                          <Route path = "/ViewAllUserProfiles" component = {ViewAllUserProfiles}></Route>
                          <Route path = "/AvailabilityStatus" component = {AvailabilityStatus}></Route>
                          <Route component={Error} />
                    </Switch>
                </div>
        </Router>
    </div>
  );
}
}

export default withRouter(App);
