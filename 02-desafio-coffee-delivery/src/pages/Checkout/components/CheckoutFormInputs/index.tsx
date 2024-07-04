import { CheckoutFormInputsContainer } from './styles'

export function CheckoutFormInputs() {
  return (
    <CheckoutFormInputsContainer>
      <label htmlFor="cep" className="info">
        <input type="text" id="cep" placeholder="CEP" />
      </label>

      <label htmlFor="street" className="info">
        <input type="text" id="street" placeholder="Rua" />
      </label>

      <div className="input-wrapper-info">
        <label htmlFor="number" className="info">
          <input type="text" id="number" placeholder="Número" />
        </label>

        <label htmlFor="complement" className="info">
          <input type="text" id="complement" placeholder="Complemento" />
        </label>
      </div>

      <div className="input-wrapper-info">
        <label htmlFor="district" className="info">
          <input type="text" id="district" placeholder="Bairro" />
        </label>

        <label htmlFor="city" className="info">
          <input type="text" id="city" placeholder="Cidade" />
        </label>

        <label htmlFor="state" className="info">
          <input type="text" id="state" placeholder="UF" />
        </label>
      </div>
    </CheckoutFormInputsContainer>
  )
}
