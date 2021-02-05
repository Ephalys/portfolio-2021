import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const SocialContainer = styled.nav`
  position: absolute;
  top: 30px;
  z-index: 999;
  display: flex;
  width: 80px;
  height: 100%;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.$screenMinSm}) {
    position: fixed;
  }
`

export const Link = styled.a`
  padding: 15px 0;
  transition: padding .5s;
  &:hover {
    padding-left: 10px;
    transition: padding .5s;
  }
`
