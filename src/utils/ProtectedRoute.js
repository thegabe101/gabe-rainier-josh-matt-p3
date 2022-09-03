import { React, Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "../views/home";


function ProtectedRoute({ Component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("token");
    console.log("this", isAuthenticated);


    return (
        <Route
            {...restOfProps}
            render={(props) => {
                console.log(props)
                isAuthenticated ? <Component {...props.location.pathname} /> : <Redirect to="/login" />
                console.log(Component)
            }
            }
        />
    );
}

// isAuthenticated ? <Component {...props} /> : <Redirect to="/login"
// return (
//     <Route exact path="/">
//         {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />}
//     </Route>
// )

export default ProtectedRoute;