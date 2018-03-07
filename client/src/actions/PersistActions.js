import axios from "axios";
import bcrypt from "bcrypt-nodejs";

export const REQUEST_PERSIST = "REQUEST_PERSIST";
export const RECEIVE_PERSIST = "RECEIVE_PERSIST";

export function requestPersist() {
    return { type: REQUEST_PERSIST};
}

export function receivePersist() {
    return { type: RECEIVE_PERSIST };
}

export function fetchPersist() {
    return function (dispatch) {
        dispatch(requestPersist());
        if (localStorage.getItem('persist') !== 'false' || !localStorage.getItem('persist')) {
            localStorage.setItem("persist", false)
        } else {
            localStorage.setItem("persist", true)
        }
        dispatch(receivePersist());
    }
}