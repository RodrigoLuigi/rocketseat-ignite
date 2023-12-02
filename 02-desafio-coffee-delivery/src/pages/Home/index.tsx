import { useEffect, useState } from 'react'
import coffeesJson from '../../../coffees.json'

import { Banner } from './components/Banner'
import { CoffeeCard, CoffeeTypes } from './components/CoffeeCard'

import { HomeContainer, Content, SectionCoffee } from './styles'

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeTypes[]>([])

  useEffect(() => {
    setCoffees(coffeesJson)

    console.log(coffees)
  }, [coffees])

  return (
    <HomeContainer>
      <Content>
        <Banner />

        <SectionCoffee>
          <h2>Nossos Cafés</h2>

          <div className="coffee-card-wrapper">
            {coffees.map((coffee) => {
              return <CoffeeCard coffee={coffee} key={String(coffee.id)} />
            })}
          </div>
        </SectionCoffee>
      </Content>
    </HomeContainer>
  )
}
