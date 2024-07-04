import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import { CheckoutFormHeader } from './components/CheckoutFormHeader'
import { CheckoutFormInputs } from './components/CheckoutFormInputs'
import { CheckoutPaymentTypes } from './components/CheckoutPaymentTypes'

import {
  CheckoutContainer,
  Content,
  CheckoutForm,
  CheckoutFormContent,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Content>
        <CheckoutForm>
          <section>
            <h2>Complete seu pedido</h2>

            <CheckoutFormContent>
              <CheckoutFormHeader
                icon={MapPinLine}
                title="Endereço de Entrega"
                description="Informe o endereço onde deseja receber seu pedido"
              />

              <CheckoutFormInputs />
            </CheckoutFormContent>

            <CheckoutFormContent>
              <CheckoutFormHeader
                icon={CurrencyDollar}
                title="Pagamento"
                description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              />

              <CheckoutPaymentTypes />
            </CheckoutFormContent>
          </section>

          <section className="checkoutCart">
            <h2>Cafés selecionados</h2>
            <CheckoutFormContent />
          </section>
        </CheckoutForm>
      </Content>
    </CheckoutContainer>
  )
}
