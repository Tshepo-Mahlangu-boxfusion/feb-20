import { createAction } from "redux-actions";

export const AuthActionEnums = {
    login: "LOGIN"
}

export const loginAction = createAction(
    AuthActionEnums.login,
    ({username, password}) => { /** the payload creator takes in one param */
        return {
            username,
            password
        }
    }
);