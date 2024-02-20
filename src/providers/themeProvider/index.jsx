import React, { useContext, useMemo, useReducer } from "react";
import { ThemeActionContext, ThemeStateContext } from "./contexts";
import { themeReducer } from "./reducers"; 
import { setThemeAction } from "./actions";

const ThemeProvider = (props) => {
    // Make state using the reducer, initializing to theme: "red"
    const [state, dispatch] = useReducer(themeReducer, { theme: "green" });

    // this theme config is linked to the value of the state
    const themeConfig = useMemo(() => {
        return {
            theme: state.theme
        }
    }, [state]);

    const changeTheme = (theme) => {
        dispatch(setThemeAction(theme));
    }

    return (
        <ThemeStateContext.Provider value={themeConfig}>
            <ThemeActionContext.Provider value={{changeTheme}}>
                {props.children}
            </ThemeActionContext.Provider>
        </ThemeStateContext.Provider>
    );
}

export default ThemeProvider;

// custom hooks to get context objects
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