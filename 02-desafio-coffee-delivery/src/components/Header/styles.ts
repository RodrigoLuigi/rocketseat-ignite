import styled from 'styled-components'

export const HeaderContainer = styled.header`
  grid-area: header;
  width: 100%;
`

export const Content = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  .location {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4px;

    padding: 8px;
    border-radius: 6px;

    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    svg {
      color: ${(props) => props.theme['purple-medium']};
    }
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: 6px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
