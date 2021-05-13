import styled from "styled-components"
import breakpoints from "styles/breakpoints"
import {Link} from "components/socials/socialsStyles";
import {ScrollIconContainer} from "components/scrollIcon/scrollIconStyles";
import colors from "styles/colors";
import {Stacks} from "components/story/storyStyles";

export const StyledIcon = styled.div`

  ${ScrollIconContainer} & {
    animation: arrowAnimation 1.5s infinite ease-in;

    svg {
      height: 30px;
    }
  }

  @keyframes arrowAnimation {
    0% {transform: translateY(-100%); opacity: 1}
    70% {transform: translateY(110%); opacity: 0}
    100% {transform: translateY(110%)}
  }

  ${Stacks} & {
    @media (max-width: ${breakpoints.$screenMaxSm}) {
      width: 33%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px 0;
    }
  }

  svg {
    width: ${props => props.width};
    height: ${props => props.height};
    transition: all .3s;
    overflow: visible;

    @media (min-width: ${breakpoints.$screenMinLg}) {
      width: ${props => props.width};
      height: ${props => props.height};
    }

    ${Link}:hover & {
      fill: ${colors.lightgrey};
    }

    path {
      width: 100%;
    }

    &.vuejs {
      .exterior {
        fill: ${({ theme }) => theme.title};
      }
      .interior {
        fill: ${({ theme }) => theme.paragraph};
      }
    }

    &.gatsby {
      circle {
        fill: ${({ theme }) => theme.name === 'rainbow' ? 'transparent' : theme.title};
      }
      path {
        fill: ${({ theme }) => theme.name === 'rainbow' ? theme.title : theme.primaryBackground};
      }
    }
    &.reactjs {
      stroke: ${({ theme }) => theme.title};
      fill: none;
    }
    &.vercel {
      fill: ${({ theme }) => theme.title};
    }
    &.netlify {
      fill: ${({ theme }) => theme.title};
    }
  }
`;
