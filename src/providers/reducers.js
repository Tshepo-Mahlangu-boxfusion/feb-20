import { handleAction } from "redux-actions"; 
import { ThemeActionEnums } from "./actions";

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