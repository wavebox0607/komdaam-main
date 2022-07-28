

import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';

function PublicRoute({ children, ...rest }) {
    const { user } = useSelector((state) => state.auth);

    // const token = true

    let location = useLocation()
    
    if (!user?.verify) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />

}

export default PublicRoute;