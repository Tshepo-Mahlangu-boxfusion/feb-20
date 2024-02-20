import React, { useContext, useMemo, useReducer } from "react";
import { ThemeActionContext, ThemeStateContext } from "./contexts";
import { themeReducer } from "./reducers"; 
import { setThemeAction } from "./actions";

export const ThemeProvider = (props) => {
    /**
     * Make state using the reducer, initializing to theme: "red"
     * we getting make the state with the reducer and give it the initial state object
     */
    const [state, dispatch] = useReducer(themeReducer, {theme: 'gray'});

    /**
     * this theme config is linked to the value of the state
     */
    const themeConfig = useMemo(() => {
        console.log("in the memoization", state)
        return state.theme
    }, [state]);

    /** 
     * @param {*} theme the new theme color
     */
    const changeTheme = (theme) => {
        console.log(theme);
        dispatch(setThemeAction({theme}));
    }

    return (
        <ThemeStateContext.Provider value={ themeConfig }>
            {/**Here we pass down an object that's got the function changeTheme */}
            <ThemeActionContext.Provider value={{ changeTheme }}> 
                {props.children}
            </ThemeActionContext.Provider>
        </ThemeStateContext.Provider>
    );
}

/**
 * @returns custom hook to get context theme state object
 */
export const useThemeState = () => {
    const context = useContext(ThemeStateContext);
    if (context) return context;
    throw new Error("useThemeState must be within a ThemeStateProvider");
};

export const useThemeAction = () => {
    const context = useContext(ThemeActionContext);
    if (context) return context;
    throw new Error("useThemeAction must be within a ThemeActionProvider");
}