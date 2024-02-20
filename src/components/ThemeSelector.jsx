import React from 'react';
import { useThemeAction } from '../providers/provider';

export const ThemeSelector = () => {
    const { changeTheme } = useThemeAction();
    return (
        <div>
            <label htmlFor="themeSelector">
                <input type="color" id="themeSelector" 
                    onChange={e => changeTheme(e.target.value)} />
            </label>
        </div>
    );
}
