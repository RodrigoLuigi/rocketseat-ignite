import styled from 'styled-components'

export const CoffeeCardContainer = styled.article`
  width: 256px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
  padding: 0 20px 20px;

  .coffee-card-title {
    color: ${(props) => props.theme['base-subtitle']};
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 8px;
  }

  .coffee-card-description {
    color: ${(props) => props.theme['base-label']};

    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }
`

export const CoffeeCardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;
  margin-top: -20px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const CoffeeCardTags = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 4px;

  margin-top: 12px;
  margin-bottom: 16px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};

    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }
`

export const CoffeeCardCheckout = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 33px;
  display: flex;

  .coffee-card-price {
    color: ${(props) => props.theme['base-text']};
    text-align: right;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;

    span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 24px;
      font-weight: 800;
    }
  }

  .coffee-card-actions {
    display: flex;
    align-items: center;

    gap: 8px;
  }

  .coffee-card-add-to-cart {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: 6px;
    border: none;

    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};

    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['purple-medium']};
    }
  }
`
