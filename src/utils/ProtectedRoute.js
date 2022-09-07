import React from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "../views/home";


function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("token");
    console.log("this", isAuthenticated);


    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? <Component {...props.location.pathname} /> : <Redirect to="/login" />
            }
        />
    );
}


export default ProtectedRoute;