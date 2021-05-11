import styled from "styled-components"
import breakpoints from "styles/breakpoints"
import {Link} from "components/socials/socialsStyles";
import colors from "styles/colors";

export const StyledIcon = styled.div`
  svg {
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
  }
`;
