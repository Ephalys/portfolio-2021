import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const HeroContainer = styled.section`
  padding-top: 240px;
  padding-bottom: 120px;
  
  @media (min-width: ${breakpoints.$screenMinMd}) {
    padding-top: 280px;
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

export const SecondaryTitle = styled.h2`
  margin-top: 60px;
  font-size: 30px;
  font-weight: bold;

  @media (min-width: ${breakpoints.$screenMinXs}) {
    margin-top: 90px;
    font-size: 42px;
  }
  @media (min-width: ${breakpoints.$screenMinSm}) {
    font-size: 60px;
  }
  @media (min-width: ${breakpoints.$screenMinMd}) {
    font-size: 90px;
  }
`
