import styled, { css } from 'styled-components'

const StyledBox = styled.section`
  background: red;
  border: 2px solid blue;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  ${props =>
    props.variant === 'ml' &&
    css`
      margin-left: auto;
    `}
`

export { StyledBox }
