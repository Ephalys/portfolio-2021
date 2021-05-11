import styled from "styled-components"
import breakpoints from "styles/breakpoints"
import {Link} from "components/socials/socialsStyles";
import {ScrollIconContainer} from "components/scrollIcon/scrollIconStyles";
import colors from "styles/colors";

export const StyledIcon = styled.div`

  ${ScrollIconContainer} & {
    animation: arrowAnimation 1.5s infinite ease-in;
    
    svg {
      height: 30px;
    }
  }

  @keyframes arrowAnimation {
    0% {transform: translateY(-100%); opacity: 0}
    70% {transform: translateY(110%); opacity: 1}
    100% {transform: translateY(110%)}
  }
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
