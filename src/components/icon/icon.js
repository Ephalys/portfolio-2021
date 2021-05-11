import React, {useContext} from 'react';
import {ThemeContext} from "styled-components";
import styled from "styled-components"
import breakpoints from "styles/breakpoints"
import colors from "styles/colors"
import {Link} from "../socials/socialsStyles"

const Icon = (props) => {
    const themeContext = useContext(ThemeContext);

    const StyledIcon = styled(props.icon)`
      width: 16px;
      height: 16px;
      transition: all .3s;
      overflow: visible;

      @media (min-width: ${breakpoints.$screenMinLg}) {
        width: 24px;
        height: 24px;
      }
      ${Link}:hover & {
        fill: ${colors.lightgrey};
      }
      path {
        width: 100%;
      }
    `;

    return (
        <>
            <StyledIcon fill={themeContext.text}/>
        </>
    );
};

export default Icon;
