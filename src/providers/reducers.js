import { handleAction } from "redux-actions"; 
import { ThemeActionEnums } from "./actions";

/**
 * We make reducer
 */
export const themeReducer = handleAction(
    ThemeActionEnums.setTheme, 
    (state, action) => {
        return {
            ...state,
            theme: action.payload.theme
        }
    }, 
    { theme: 'gray' }
)