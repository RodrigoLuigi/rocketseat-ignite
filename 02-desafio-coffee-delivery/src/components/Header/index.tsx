import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { HeaderContainer, Content, Actions } from './styles'
import { useEffect, useState } from 'react'

export function Header() {
  const [isWindowScrolled, setIsWindowScrolled] = useState(false)

  function handleScroll() {
    setIsWindowScrolled(window.scrollY > 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer $isScrolled={isWindowScrolled}>
      <Content>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
        </NavLink>

        <Actions>
          <NavLink to="#" className="location">
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, Rs</span>
          </NavLink>

          <NavLink to="/checkout" className="cart">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </Actions>
      </Content>
    </HeaderContainer>
  )
}
