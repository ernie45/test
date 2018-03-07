import {combineReducers} from "redux";
import {

    /** For logging in */
    REQUEST_LOGIN, 
    RECEIVE_LOGIN, 

    /** For creating a new user */
    REQUEST_CREATE_USER, 
    RECEIVE_CREATE_USER, 

    /** To persist login */
    REQUEST_PERSIST, 
    RECEIVE_PERSIST, 

    /** For stock retrieval */
    REQUEST_STOCKS, 
    RECEIVE_STOCKS,

    ADD_CITY

} from "../actions";

/** REQRES FOR ALL Asynchronous ACTIONS *//////////////////////////////////////////////////////////////////////////////////////////////////
function ReqRes(state = {isFetching: false}, action){ 
    switch(action.type){

        /** LOGIN REQRES *///////////////////////////////////////////
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                isFetching: false
            });


        /** CREATE USER REQRES *//////////////////////////////////////
        case REQUEST_CREATE_USER:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CREATE_USER:
            return Object.assign({}, state, {
                isFetching: false
            });


        /** CREATE PERSISTENCE REQRES *///////////////////////////////////////////
        case REQUEST_PERSIST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_PERSIST:
            return Object.assign({}, state, {
                isFetching: false
            });


        /** STOCKS REQRES */////////////////////////////////////////////
        case REQUEST_STOCKS:
            /** Translate the booleans into the state */
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_STOCKS: 
            /** Translate the booleans into the state */
            return Object.assign({}, state, {
                isFetching: false
            })


        /** Return the false state by default */
        default: return state;
    }
}


/** ACTUAL REDUCERS */////////////////////////////////////////////////////////////////////////////////

/** LOGIN REDUCER *///////////////////////////////////////////////////////////////
function login(state = {}, action){
    switch(action.type){
        case RECEIVE_LOGIN:
            return Object.assign({}, state, {
                loggedIn: action.loggedIn,
                username: action.username
            });
        default: return state;
    }
}

/** CREATE USER REDUCER *//////////////////////////////////////////////////////////
function createUser(state = {}, action){
    switch(action.type){
        case RECEIVE_CREATE_USER:
            return Object.assign({}, state, {
                loggedIn: action.loggedIn
            });
        default: return state;
    }
}

/** PERSISTENCE REDUCER *///////////////////////////////////////////////////////////
function persist(state = {}, action){
    switch(action.type){
        case RECEIVE_PERSIST:
            return Object.assign({}, state, {
                persist: true
            });
        default: return state;
    }
}

/** STOCKS REDUCER *////////////////////////////////////////////////////////////////

function stocks(state = [], action){
    switch(action.type){
        case RECEIVE_STOCKS:
            return [...state, {
                tickerSymbol: action.tickerSymbol, 
                price: action.price, 
                trend: action.trend
            }];
        /** If no action is provided, return default state */
        default: return state;
    }
}

/** WEATHER REDUCER */

function weather(state = {}, action){
    switch(action.type){
        case ADD_CITY:
            return Object.assign({}, state, {
                city: action.city
            });
        default: return state;
    }
}


/** COMBINE ALL USERS TO EXPORT to the store in the ../configureStore.js file */
const suiteApp = combineReducers({
    login,
    createUser,
    persist,
    stocks,
    weather
});

export default suiteApp;