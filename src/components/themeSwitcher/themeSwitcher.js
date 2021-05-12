import React, {useContext} from 'react';
import {ThemeContext} from "styled-components";
import {CircleSwitcher} from "components/themeSwitcher/themeSwitcherStyles";

const ThemeSwitcher = (props) => {
    const theme = useContext(ThemeContext);

    const changeTheme = (theme) => {
        if(theme.name === 'light' || theme.name === 'dark') {
            props.setTheme('rainbow')
        } else {
            props.setTheme('dark')
        }
    }

    return (
        <CircleSwitcher onClick={() => changeTheme(theme)}/>
    );
};

export default ThemeSwitcher;
