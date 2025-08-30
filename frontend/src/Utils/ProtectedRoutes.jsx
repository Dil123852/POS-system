import { Outlet , Navigate} from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import React from 'react'

const ProtectedRoutes = () => {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
     return null;
    }

    if (!isSignedIn) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}


export default ProtectedRoutes