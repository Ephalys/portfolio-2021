import styled from "styled-components"

export const LabelTitle = styled.h2`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0 0 15px;
  color: ${props => props.backgroundColor ? props.theme.secondaryTitle : props.theme.title};
`
