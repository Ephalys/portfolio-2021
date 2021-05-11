import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const ScrollIconContainer = styled.aside`
  position: absolute;
  bottom: 30px;
  z-index: 999;
  display: flex;
  width: 80px;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.$screenMinSm}) {
    position: fixed;
  }
`
