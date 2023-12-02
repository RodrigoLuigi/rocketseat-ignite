import { ShoppingCartSimple } from 'phosphor-react'

import { Counter } from '../../../../components/Counter'

import {
  CoffeeCardContainer,
  CoffeeCardImage,
  CoffeeCardTags,
  CoffeeCardCheckout,
} from './styles'

export interface CoffeeTypes {
  id: number
  title: string
  description: string
  tags: string[]
  price: string
  imagePath: string
}

interface CoffeeProps {
  coffee: CoffeeTypes
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeCardImage>
        <img src={coffee.imagePath} alt="Café tradicional" />
      </CoffeeCardImage>

      <CoffeeCardTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeCardTags>

      <h3 className="coffee-card-title">{coffee.title}</h3>
      <p className="coffee-card-description">{coffee.description}</p>

      <CoffeeCardCheckout>
        <p className="coffee-card-price">
          R$ <span>{coffee.price}</span>
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
