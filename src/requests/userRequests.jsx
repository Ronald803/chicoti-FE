import axios from "axios";

const url = 'http://localhost:4000/api/'
export function postNewUserBackend(newUser){
    return(
        axios.post(
            url+'users/',
            newUser
        )
    )
}

export function loginBackendRequest(user){
    return(
        axios.post(
            url+'auth/',
            user
        )
    )
}