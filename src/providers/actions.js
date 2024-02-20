import { createAction } from "redux-actions"; 

export const ThemeActionEnums = {
    setTheme: "SET_THEME"
};

/**
 * Create the action payload value
 */
export const setThemeAction 
    = createAction(ThemeActionEnums.setTheme, (theme) => ({theme}));