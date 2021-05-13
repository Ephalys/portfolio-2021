import styled from "styled-components"
import breakpoints from "styles/breakpoints"

export const MeContainer = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
  color: ${({ theme }) => theme.paragraph};
  background: ${props => props.backgroundColor || 'transparent'};
  color: ${props => props.backgroundColor ? props.theme.secondaryParagraph : props.theme.paragraph};

  @media (min-width: ${breakpoints.$screenMinSm}) {
    padding-top: 200px;
    padding-bottom: 200px;
    font-size: 24px;
  }
`
