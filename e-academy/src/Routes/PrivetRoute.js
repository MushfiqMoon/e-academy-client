import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/account/login" state={{from: location}} replace></Navigate>
    }
    return children;
}

export default PrivetRoute