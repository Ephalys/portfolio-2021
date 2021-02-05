import React from 'react';
import "fontsource-inter/400.css"
import "fontsource-inter/700.css"
import Socials from "components/socials/socials";
import Hero from "components/hero/hero";
import {GlobalStyle} from "components/layout/layoutStyles";

const Layout = () => {
    return (
        <React.Fragment>
            <GlobalStyle theme="purple" />
            <main>
                <Socials/>
                <Hero/>
            </main>
        </React.Fragment>
    );
};

export default Layout;
