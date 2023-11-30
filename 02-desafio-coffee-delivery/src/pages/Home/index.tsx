import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'

import { HomeContainer, Content, SectionCoffee } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Content>
        <Banner />

        <SectionCoffee>
          <h2>Nossos Cafés</h2>

          <div className="coffee-card-wrapper">
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
          </div>
        </SectionCoffee>
      </Content>
    </HomeContainer>
  )
}
