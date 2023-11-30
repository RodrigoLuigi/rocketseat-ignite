import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import bannerCoffeeDelivery from '../../../../assets/banner-coffee-delivery.png'

import { BannerContainer } from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <div className="banner-content">
        <div className="banner-info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="banner-items">
          <div className="banner-items-group">
            <div className="banner-item item-1">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div className="banner-item item-2">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
          </div>

          <div className="banner-items-group">
            <div className="banner-item item-3">
              <span>
                <Package size={16} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="banner-item item-4">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
      </div>

      <img src={bannerCoffeeDelivery} alt="Banner do Coffee Delivery" />
    </BannerContainer>
  )
}
