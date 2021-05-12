import React from 'react';
import Socials from "components/socials/socials";
import Footer from "components/footer/footer";
import ThemeSwitcher from "components/themeSwitcher/themeSwitcher";

import "fontsource-inter/400.css"
import "fontsource-inter/600.css"
import {GlobalStyle} from "components/layout/layoutStyles";

const Layout = (props) => {
    return (
        <>
            <GlobalStyle/>
            <main>
                <Socials/>
                {/*{props.isArrowVisible && <ScrollIcon/>}*/}
                <ThemeSwitcher setTheme={props.setTheme}/>
                {props.children}
                <Footer/>
            </main>
        </>
    );
};

export default Layout;
