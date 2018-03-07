import axios from "axios";
/** CREATE USER ACTIONS *////////////////////////////////////////////////////////////////////////////////////////////

/** Export create actions action types */

export const REQUEST_CREATE_USER = "CREATE_USER";
export const RECEIVE_CREATE_USER = "RECEIVE_CREATE_USER";

/** Send CREATE_USER action along with an emmail, username and password */
export function requestCreateUser() {
    return { type: REQUEST_CREATE_USER};
}

/** Let reducers know async call is done */
export function receiveCreateUser(res) {
    return { type: RECEIVE_CREATE_USER, loggedIn: res.data };
}

/** This action uses redux-thunk middleware to perform async */
/** It dispatches two actions */
export function fetchCreateUser(username, email, password) {
    return function (dispatch) {
        /** Dispatch first action to let reducers know async is coming */
        dispatch(requestCreateUser());
        /** Send post request with the data input by user */
        return axios.post('/api/create', { email: email, username: username, password: password })
            .then((res) => {
                axios.get("/api/all").then(data => {
                    let emailCheck = data.data.filter(dat => {return email === dat.email});
                    if (!emailCheck.length){
                        dispatch(receiveCreateUser(res));
                        localStorage.setItem("persist", true);
                        localStorage.setItem("username", username);
                        window.location.reload();
                    }
                    else{
                        console.log("Already exists");
                    }
                });
            })
    }
}