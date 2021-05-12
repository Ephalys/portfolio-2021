import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const CircleSwitcher = styled.div`
  position: fixed;
  bottom: 45px;
  left: 30px;
  z-index: 999;
  border-radius: 50%;
  background: ${({theme}) => theme.title};
  width: 15px;
  height: 15px;
  cursor: pointer;
  transition: all .3s;
  background-size: 1px 200px;
  &:after {
    content: "";
    width: 35px;
    height: 35px;
    position: absolute;
    top: -12px;
    left: -12px;
    background: transparent;
    border: 2px solid ${({theme}) => theme.paragraph};
    border-radius: 50%;
    animation: switcherAnimation 1s infinite;
  }
  
  @keyframes switcherAnimation {
    0%{transform: scale(0)}
    100%{transform: scale(1); opacity: 0.1}
  }
  
  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    background-image: linear-gradient(to right, #66ff00, #a80077);
    z-index: -1;
    transition: opacity 0.3s linear;
    opacity: 0;
  }

  &:hover:before {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.$screenMaxMd}) {
    position: absolute;
    bottom: unset;
    top: 45px;
    right: 30px;
    left: unset;
  }
`
