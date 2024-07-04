import styled from 'styled-components'

export const CheckoutFormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .input-wrapper-info {
    display: flex;
    gap: 0.75rem;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &[for='cep'],
    &[for='number'],
    &[for='district'] {
      max-width: 200px;
    }

    &[for='state'] {
      max-width: 60px;
    }
  }

  .info input {
    width: 100%;
    padding: 12px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    color: ${(props) => props.theme['base-text']};

    font-family: 'Roboto', sans-serif;
    font-size: 14px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
