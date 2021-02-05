import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const HeroContainer = styled.section`
  padding: 240px 30px 120px;
  
  @media (min-width: ${breakpoints.$screenMinSm}) {
    padding: 240px 120px 120px 180px;
  }
  @media (min-width: ${breakpoints.$screenMinMd}) {
    padding: 280px 120px 120px 180px;
  }
`

export const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;

  @media (min-width: ${breakpoints.$screenMinXs}) {
    font-size: 42px;
  }
  @media (min-width: ${breakpoints.$screenMinSm}) {
    font-size: 60px;
  }
  @media (min-width: ${breakpoints.$screenMinMd}) {
    font-size: 90px;
  }
`
