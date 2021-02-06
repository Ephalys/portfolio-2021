import React, {useState, useRef, useEffect} from 'react';
import "fontsource-inter/400.css"
import "fontsource-inter/700.css"
import Socials from "components/socials/socials";
import Hero from "components/hero/hero";
import {GlobalStyle} from "components/layout/layoutStyles";
import Footer from "components/footer/footer";
import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "styles/themes"

const Layout = () => {
    const [theme, setTheme] = useState('dark');
    const heroRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    })

    const onScroll =  () => {
        const heroPos= heroRef.current.getBoundingClientRect().bottom;
        (heroPos < 0 ) ? setTheme('light') : setTheme('dark')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <main>
                <Socials/>
                <Hero innerRef={heroRef}/>
                <Footer/>
            </main>
        </ThemeProvider>
    );
};

export default Layout;
