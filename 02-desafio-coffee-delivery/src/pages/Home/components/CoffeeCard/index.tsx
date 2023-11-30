import expressoTradicional from '../../../../assets/expresso-tradicional.svg'

import { CoffeeCardContainer } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <div className="coffee-image">
        <img src={expressoTradicional} alt="" />
      </div>

      <div className="coffee-tags">
        <span>Tradicional</span>
      </div>

      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div className="coffee-buy">
        <p className="price">
          R$ <span>9,90</span>
        </p>
        <div className="counter">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
