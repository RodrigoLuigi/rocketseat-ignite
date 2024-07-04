import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  grid-area: content;
  width: 100%;
`

export const Content = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 6.75rem 2rem;
`

export const CheckoutForm = styled.form`
  display: flex;
  gap: 32px;
  padding-top: 2.5rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.93rem;
    padding-top: 0.93rem;
    border: none;

    &:first-child {
      width: 640px;
    }
  }

  h2 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }

  .checkoutCart {
    flex: 1;
  }
`

export const CheckoutFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`
