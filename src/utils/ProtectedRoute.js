import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("token");
    console.log("this", isAuthenticated);


    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}


// return (
//     <Route exact path="/">
//         {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />}
//     </Route>
// )

export default ProtectedRoute;