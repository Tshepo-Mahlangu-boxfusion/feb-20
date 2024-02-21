import React from 'react';
import { useThemeAction } from '../providers/themeProvider/themeProvider';

export const ThemeSelector = () => {
    const { changeTheme } = useThemeAction();
    return (
        <div>
            <label htmlFor="themeSelector">
                Change theme <input type="color" id="themeSelector" 
                    onChange={e => changeTheme(e.target.value)} />
            </label>
        </div>
    );
}
