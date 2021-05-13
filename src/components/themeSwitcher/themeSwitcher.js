import React, {useContext} from 'react';
import {ThemeContext} from "styled-components";
import {CircleSwitcher, SwitcherLabel, SwitcherContainer} from "components/themeSwitcher/themeSwitcherStyles";

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
        <SwitcherContainer>
            <CircleSwitcher onClick={() => changeTheme(theme)}/>
            <SwitcherLabel>
                Wanna go fancy ?
            </SwitcherLabel>
        </SwitcherContainer>
    );
};

export default ThemeSwitcher;
