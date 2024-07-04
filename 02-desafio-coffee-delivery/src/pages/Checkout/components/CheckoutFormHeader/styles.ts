import styled from 'styled-components'

interface CheckoutFormHeaderProps {
  title: string
}

export const CheckoutFormHeaderContainer = styled.header<CheckoutFormHeaderProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) =>
      props.title === 'Pagamento'
        ? `${props.theme['purple-medium']}`
        : `${props.theme['yellow-dark']}`};
  }

  .form-header-info {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};

      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }

    p {
      color: ${(props) => props.theme['base-text']};

      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 130%;
    }
  }
`
