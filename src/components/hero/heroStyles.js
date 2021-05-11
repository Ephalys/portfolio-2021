import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const HeroContainer = styled.section`
  padding-top: 300px;
  padding-bottom: 100px;
`

export const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;

  @media (min-width: ${breakpoints.$screenMinXs}) {
    font-size: 42px;
  }
  @media (min-width: ${breakpoints.$screenMinSm}) {
    font-size: 60px;
  }
  @media (min-width: ${breakpoints.$screenMinLg}) {
    font-size: 80px;
  }
`

export const SecondaryTitle = styled.h2`
  margin: 60px 0 0;
  font-size: 30px;
  font-weight: bold;

  @media (min-width: ${breakpoints.$screenMinXs}) {
    margin-top: 90px;
    font-size: 42px;
  }
  @media (min-width: ${breakpoints.$screenMinSm}) {
    font-size: 60px;
  }
  @media (min-width: ${breakpoints.$screenMinLg}) {
    font-size: 80px;
  }
`
