import backgroundBanner from '../../assets/background-banner.svg'

import styled from 'styled-components'

export const HomeContainer = styled.main`
  grid-area: content;
  width: 100%;
  padding-bottom: 10rem;

  background-image: url('${backgroundBanner}');
  background-position: top;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 2rem;
`

export const SectionCoffee = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

  .coffee-card-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 32px;
  }
`
