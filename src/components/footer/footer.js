import React from 'react';
import {FooterContainer, FooterTitle, Mail} from "components/footer/footerStyles";

const Footer = () => {
    return (
        <FooterContainer className="container">
            <FooterTitle>
                Thank You.
            </FooterTitle>
            <Mail href="mailto:nvnrtnl@gmail.com">
                nvnrtnl@gmail.com
            </Mail>
        </FooterContainer>
    );
};

export default Footer;
