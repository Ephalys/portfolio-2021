import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const MeContainer = styled.section`
  padding-top: 200px;
  text-align: center;
  color: ${({ theme }) => theme.paragraphs};

  @media (min-width: ${breakpoints.$screenMinXs}) {
    font-size: 24px;
  }
`
