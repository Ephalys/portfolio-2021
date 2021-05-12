import React from 'react';
import "fontsource-inter/400.css"
import "fontsource-inter/600.css"
import Socials from "components/socials/socials";
import {GlobalStyle} from "components/layout/layoutStyles";
import Footer from "components/footer/footer";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "styles/themes"
import ScrollIcon from "components/scrollIcon/scrollIcon";
import ThemeSwitcher from "components/themeSwitcher/themeSwitcher";

const Layout = (props) => {
    return (
        <ThemeProvider theme={props.theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <main>
                <Socials/>
                {props.isArrowVisible && <ScrollIcon/>}
                <ThemeSwitcher/>
                {props.children}
                <Footer/>
            </main>
        </ThemeProvider>
    );
};

export default Layout;
