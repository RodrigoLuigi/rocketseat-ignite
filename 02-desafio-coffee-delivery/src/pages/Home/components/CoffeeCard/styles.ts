import styled from 'styled-components'

export const CoffeeCardContainer = styled.article`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 256px;
  //height: 310px;

  padding: 0 20px 20px;

  .coffee-image {
    display: flex;
    width: 120px;
    height: 120px;
    justify-content: center;
    align-items: center;

    margin-top: -20px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .coffee-tags {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    span {
      display: flex;
      padding: 4px 8px;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme['yellow-light']};

      color: ${(props) => props.theme['yellow-dark']};
      font-family: 'Roboto', sans-serif;
      font-size: 10px;
      font-weight: 700;
      line-height: 130%;
      text-transform: uppercase;

      margin-top: 12px;
      margin-bottom: 16px;
    }
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    text-align: center;
    font-family: 'Baloo 2', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 8px;
  }

  p {
    color: ${(props) => props.theme['base-label']};

    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    // margin-bottom: 33px;
  }

  .coffee-buy {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 33px;
    display: flex;

    .price {
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

    .counter {
      display: flex;
      height: 38px;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 6px;
      background: ${(props) => props.theme['base-button']};

      button {
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme['purple-medium']};
        width: 14px;
        height: 14px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      span {
        color: ${(props) => props.theme['base-title']};
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 130%;
      }
    }
  }
`
