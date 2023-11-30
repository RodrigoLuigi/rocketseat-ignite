import expressoTradicional from '../../../../assets/expresso-tradicional.svg'
import { ShoppingCartSimple } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'

import {
  CoffeeCardContainer,
  CoffeeCardImage,
  CoffeeCardTags,
  CoffeeCardCheckout,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardImage>
        <img src={expressoTradicional} alt="Café tradicional" />
      </CoffeeCardImage>

      <CoffeeCardTags>
        <span>Tradicional</span>
        <span>Tradicional</span>
      </CoffeeCardTags>

      <h3 className="coffee-card-title">Expresso Tradicional</h3>
      <p className="coffee-card-description">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <CoffeeCardCheckout>
        <p className="coffee-card-price">
          R$ <span>9,90</span>
        </p>

        <div className="coffee-card-actions">
          <Counter />
          <button className="coffee-card-add-to-cart">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </CoffeeCardCheckout>
    </CoffeeCardContainer>
  )
}
