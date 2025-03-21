import React from "react";
import { Redirect, Route } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ProtectedRoutes({ component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={(props) => {
            const token = cookies.get("TOKEN");
            if (token) {
                return <Component {...props} />;
            } else {
                return (
                    <Redirect
                    to={{
                        pathname: "/",
                        state: {
                        // sets the location a user was about to access before being redirected to login
                        from: props.location,
                        },
                    }}
                    />
                );
            }
        }}
        />
    );
}