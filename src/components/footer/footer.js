import React from 'react';
import {FooterContainer, FooterTitle} from "components/footer/footerStyles";

const Footer = () => {
    return (
        <FooterContainer className="container">
            <FooterTitle>
                Thank You.
            </FooterTitle>
            <a href="mailto:nvnrtnl@gmail.com">
                nvnrtnl@gmail.com
            </a>
        </FooterContainer>
    );
};

export default Footer;
