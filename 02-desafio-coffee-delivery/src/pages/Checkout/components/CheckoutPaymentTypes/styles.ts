import styled from 'styled-components'

export const CheckoutPaymentTypesContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
    padding: 1rem;
    border: none;

    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }
`
