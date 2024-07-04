import { Bank, CreditCard, Money } from 'phosphor-react'
import { CheckoutPaymentTypesContainer } from './styles'

export function CheckoutPaymentTypes() {
  return (
    <CheckoutPaymentTypesContainer>
      <button className="credit-card-button">
        <CreditCard size={16} />
        cartão de crédito
      </button>

      <button className="debit-card-button">
        <Bank size={16} />
        cartão de débito
      </button>

      <button className="cash-button">
        <Money size={16} />
        dinheiro
      </button>
    </CheckoutPaymentTypesContainer>
  )
}
