import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const SwitcherContainer = styled.div`
  position: fixed;
  bottom: 45px;
  left: 30px;
  z-index: 999;

  @media (max-width: ${breakpoints.$screenMaxSm}) {
    position: absolute;
    bottom: unset;
    top: 45px;
    right: 30px;
    left: unset;
  }
`

export const CircleSwitcher = styled.div`
  border-radius: 50%;
  background: ${({theme}) => theme.title};
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: all .3s;
  background-size: 1px 200px;
  &:after {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    top: -13px;
    left: -13px;
    background: transparent;
    border: 2px solid ${({theme}) => theme.title};
    border-radius: 50%;
    animation: switcherAnimation 1s infinite;
    z-index: -2;
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
    transition: all .8s;
    opacity: 0;
  }

  &:hover:before {
    opacity: 1;
    transform: scale(1.4);
    transition: all 0.4s;
  }
`

export const SwitcherLabel = styled.span`
  position: absolute;
  left: calc(100% + 15px);
  top: 50%;
  transform: translate(-5px, -50%);
  padding: 5px 15px;
  background-color: ${({theme}) => theme.secondaryTitle};
  color: ${({theme}) => theme.primaryBackground};
  white-space: nowrap;
  border-radius: 25px;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: all .5s;
  
  ${CircleSwitcher}:hover + & {
    opacity: 1;
    visibility: visible;
    transition: all .4s;
    transform: translate(0, -50%);
  }

  @media (max-width: ${breakpoints.$screenMaxSm}) {
    display: none;
  }
`
