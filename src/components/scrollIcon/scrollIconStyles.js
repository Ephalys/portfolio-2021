import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const ScrollIconContainer = styled.aside`
  position: fixed;
  bottom: 45px;
  z-index: 999;
  display: flex;
  width: 74px;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.$screenMaxMd}) {
    display: none;
  }
  
  svg {
    height: 30px;
  }
`
