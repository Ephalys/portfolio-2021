import styled from "styled-components"
import breakpoints from "styles/breakpoints"
import colors from "styles/colors"

export const FooterContainer = styled.footer`
  background-color: ${colors.white};
  color: ${colors.black};
  padding-top: 200px;
  padding-bottom: 200px;
`

export const FooterTitle = styled.h3`
  font-size: 40px;
  margin-bottom: 15px;
  
  @media (min-width: ${breakpoints.$screenMinSm}) {
    font-size: 60px;
    margin-bottom: 30px;
  }
`

