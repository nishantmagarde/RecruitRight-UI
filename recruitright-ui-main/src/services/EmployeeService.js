import axios from 'axios';

class EmployeeService {

    signUp(employee){
        return axios.post("http://localhost:8080/signup", employee);
    }

    login(employee){
        return axios.post("http://localhost:8080/login", employee);
    }

    getDetails(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/user/getDetails",config);
    }

    logout(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/user/logout", employee,config);
    }

    forgotPassword(employee){
        return axios.post("http://localhost:8080/forgotPassword", employee);
    }

    resetPassword(employee){
        return axios.post("http://localhost:8080/resetPassword", employee);
    }

    candidateProfileStatus(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/candidate/profileStatus ", config);
    }

    postRequirement(details){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/postRequirement", details,config);
    }

    closeRequirement(details){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/poc/closeRequirement", details,config);
    }

    editDetails(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/user/editDetails", employee,config);
    }

    pocReqEligibleProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/poc/requirement/eligibleProfiles",config);
    }

    allRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/requirementList ", config);
    }

    fetchAllActiveRequirements(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/getActiveRequirements", config);
    }

    fetchAllClosedRequirements(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/getClosedRequirements", config);
    }

    fetchAllInProgressRequirements(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/getInProgressRequirements", config);
    }

    Upload(formData){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/uploadProfile", formData,config);
    }

    feedback(formData){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/submitFeedback", formData,config);
    }

    pocAllRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/poc/requirementList", config);
    }

    pocActiveRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/poc/getActiveRequirements", config);
    }

    pocClosedRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/poc/getClosedRequirements", config);
    }

    pocProgressRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/poc/getInProgressRequirements", config);
    }

    rmgUploadedProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/rmg/uploadedProfiles", config);
    }

    ActiveUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/rmg/getActiveUserProfiles", config);
    }

    SelectedUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/rmg/getSelectedUserProfiles", config);
    }

    InProgressUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/rmg/getInProgressUserProfiles", config);
    }

    AllActiveUserProfiles(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/getActiveUserProfiles", config);
    }

    AllSelectedUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/getSelectedUserProfiles", config);
    }

    AllInProgressUserProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/getInProgressUserProfiles", config);
    }

    AvailabilityStatus(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/", config);
    }
}

export default new EmployeeService()