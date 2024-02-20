import React from 'react';
import { useThemeState } from './providers/provider.jsx'
import {ThemeSelector} from './components/ThemeSelector';
const Grocery = () => {
    const { theme } = useThemeState();
    return (
        <div style={{backgroundColor: theme}}>
            <ThemeSelector />
        </div>
    );
}

export default Grocery;