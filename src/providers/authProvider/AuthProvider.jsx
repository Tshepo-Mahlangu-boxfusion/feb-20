import React, { useMemo, useReducer } from "react";
import { AuthContext } from "./contexts"; 
import { loginReducer } from "./reducers";
import { loginAction } from "./actions";

export const AuthProvider = (props) => {
    // we get our state from the reducer and we store it in the provider
    // then we can decide to pass it down to the descendants
    const [user, dispatch] = useReducer(loginReducer, {username: "t", password: "boxfusion"});

    const latestUser = useMemo(() => {
        console.log("memoized user", user);
        return {
            ...user
        };
    }, [user]);

    // we dispatch the action with the desired new state
    function login(newUser) {
        console.log("Dispatching", newUser);
        dispatch(loginAction(newUser));
    }

    function logout() {
        console.log("Logging Out");
        dispatch(loginAction({username: "", password: ""}));
        console.log(user);
    }

    /**
     * Passing down the user object and the login function to the descendants
     */
    return (
        <AuthContext.Provider
            value={{user: latestUser, login, logout}} 
        >
            {props.children}
        </AuthContext.Provider>
    );
}