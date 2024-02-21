import { createContext } from 'react';

/**
 * so we can pass down state to descendants
 */
export const ThemeStateContext = createContext({}); 
/**
 * so we can pass down actions/functions to descendants
 */
export const ThemeActionContext = createContext(); 