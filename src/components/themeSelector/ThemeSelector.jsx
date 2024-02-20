import React from 'react';
import { useThemeAction } from '../../providers/themeProvider';

const ThemeSelector = () => {
    const { changeTheme } = useThemeAction();
    return (
        <div>
            <label htmlFor="themeSelector">
                Select theme color: <input type="color" id="themeSelector" onChange={e => changeTheme(e.target.value)} />
            </label>
        </div>
    );
}

export default ThemeSelector;