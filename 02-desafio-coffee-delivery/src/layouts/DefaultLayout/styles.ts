import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  min-height: 100vh;
  margin: 0 auto;

  background: ${(props) => props.theme['base-background']};

  display: grid;
  grid-template-rows: max-content auto;
  grid-template-areas:
    'header'
    'content';
`
