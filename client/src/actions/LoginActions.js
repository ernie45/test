import axios from "axios";
import bcrypt from "bcrypt-nodejs";

/** LOGIN ACTIONS *//////////////////////////////////////////////////////////////

/** LOGIN ACTION TYPES */
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const RECEIVE_LOGIN = "RECEIVE_LOGIN";

/** Export action creators */
/** These actions will be called by the thunk middleware */

/** Send LOGIN TYPE along with username and password */
export function requestLogin() {
    return { type: REQUEST_LOGIN };
}

/** Let reducer know the async is done */
export function receiveLogin(data) {
    return { type: RECEIVE_LOGIN, loggedIn: data.loggedIn, username: data.username };
}

/** Check the validity of the info passed by user in the login */
function checkAuth(email, password, callback) {
    /** Send post request with the data input by user */
    axios.post('/api/auth', { email: email, password: password })
        /** After evaluation by apiRoutes.js in routing */
        .then((res) => {
            localStorage.setItem("persist", res.data.loggedIn);
            localStorage.setItem("username", res.data.username);
            /** Logged in will be either true or false */
            localStorage.setItem("loggedIn", res.data.loggedIn);
            callback(res);
        })
};

function registerLoggedInState(email, password, callback) {
    if (localStorage.getItem('persist') === 'true') {
        /** Make a salt to make it difficult for a hacker to access password */
        let salt = bcrypt.genSaltSync(5)
        /** Create the hashcode associated with the password */
        let hash = bcrypt.hashSync(password, salt)

        /** Set localStorage variables */
        localStorage.setItem("email", email);
        localStorage.setItem('token', hash)

        /** Send the email and token to put into database */
        axios.post('/api/persist', { email: email, persistToken: hash }).then(data => {
            callback(data);
        });
    }
}

/** This reducer takes advantage of the redux thunk middleware */
/** It is used for asynchronous calls */
/** It performs the first dispatch and when the api call is done */
/** It dispatches the second action */
export function fetchLogin(email, password) {
    return function (dispatch) {
        /** Lets the reducer know an api call is about to run */
        dispatch(requestLogin());
        /** Try to login */
        return checkAuth(email, password, function (res) {
            /** Call on register persistence function */
            /** This updates to loggedin or not */
            registerLoggedInState(email, password, function () {
                localStorage.setItem("persist", res.data.loggedIn);
                if (res.data.loggedIn){
                    localStorage.setItem("username", res.data.username);
                }
                /** Once the async is done, dispatch the second action */
                /** This second action lets reducer know async is done */
                /** Logged in will be either true or false */
                dispatch(receiveLogin(res.data));
                window.location.reload();
            });
        });
    }
}