import { handleAction } from "redux-actions"; 
import { ThemeActionEnums } from "./actions";

/**
 * Reducer takes in the state and action and gives new state
 */
export const themeReducer = handleAction(
    [ThemeActionEnums], 
    (state, action) => {
        return {
            ...state,
            theme: action.payload.theme
        }
    }, 
    { theme: 'gray' }
)