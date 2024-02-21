import { handleAction } from "redux-actions"; 
import { AuthActionEnums } from "./actions"; 

export const loginReducer = handleAction(
    AuthActionEnums.login,
    (state, action) => {
        return {
            ...state,
            username: action.payload.username,
            password: action.payload.password
        }
    },
    { username: "", password: "" }
);