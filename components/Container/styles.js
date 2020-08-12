import styled from 'styled-components'
import {pageWidth} from '../../styles/spacing'

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${pageWidth};
  margin: 2rem auto;
  background: white;
`

export { StyledContainer }
