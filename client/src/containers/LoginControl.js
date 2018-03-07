/** Bring in ability to connect to a component */
import {connect} from "react-redux";
/** Import component to connect to */
import {All} from "../pages";

/** Define function to handle routing to either main page, or back to login */
const decideLogin = userAuth => {
    return userAuth;
}

/** Relate state to props in the component */
const mapStateToProps = state => {
    return {
        login: decideLogin(state.login)
    }
}

/** Connect Redux to the All component */
const LoginControl = connect(mapStateToProps)(All);

export default LoginControl;