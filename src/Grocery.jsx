import React from 'react';
import { useThemeState } from '../../providers/themeProvider';
import ThemeSelector from './components/themeSelector/ThemeSelector';
const Grocery = () => {
    const { theme } = useThemeState();
    return (
        <div style={{background: theme}}>
            <ThemeSelector />
        </div>
    );
}

export default Grocery;