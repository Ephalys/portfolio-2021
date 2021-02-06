import React, {useState} from 'react';
import "fontsource-inter/400.css"
import "fontsource-inter/700.css"
import Socials from "components/socials/socials";
import Hero from "components/hero/hero";
import {GlobalStyle} from "components/layout/layoutStyles";
import Footer from "components/footer/footer";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "styles/themes"

const Layout = () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyle/>
                <main>
                    <Socials/>
                    <Hero/>
                    <Footer/>
                </main>
            </>
        </ThemeProvider>
    );
};

export default Layout;
