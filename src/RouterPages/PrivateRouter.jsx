import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom"; 
import PropTypes from 'prop-types';
 

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation() 
    console.log(location.pathname)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'>Login</Navigate>;
};

export default PrivateRoute;

 PrivateRoute.propTypes = {
    children: PropTypes.node
}