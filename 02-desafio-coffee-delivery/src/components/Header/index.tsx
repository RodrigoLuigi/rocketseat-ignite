import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { HeaderContainer, Content, Actions } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />

        <Actions>
          <div className="location">
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, Rs</span>
          </div>

          <div className="cart">
            <ShoppingCart size={22} weight="fill" />
          </div>
        </Actions>
      </Content>
    </HeaderContainer>
  )
}
