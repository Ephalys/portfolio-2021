import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const MeContainer = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  color: ${({ theme }) => theme.paragraphs};

  @media (min-width: ${breakpoints.$screenMinSm}) {
    padding-top: 200px;
    padding-bottom: 200px;
    font-size: 24px;
  }
`
