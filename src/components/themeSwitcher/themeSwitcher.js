import React, {useContext} from 'react';
import {CircleSwitcher} from "components/themeSwitcher/themeSwitcherStyles";

const ThemeSwitcher = (props) => {

    const changeTheme = (theme) => {

    }

    return (
        <CircleSwitcher onClick={() => changeTheme(true)}/>
    );
};

export default ThemeSwitcher;
