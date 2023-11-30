import styled from 'styled-components'

export const BannerContainer = styled.div`
  padding-block: 5.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.5rem;

  .banner-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.9rem;

    gap: 4.125rem;
  }

  .banner-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 130%;

      color: ${(props) => props.theme['base-title']};
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .banner-items {
    display: flex;
    gap: 40px;
  }

  .banner-items-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .banner-item {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      padding: 8px;
      border-radius: 999px;
      display: flex;
      justify-content: center;
      align-items: center;

      color: white;
      background-color: gray;
    }

    p {
      color: ${(props) => props.theme['base-text']};
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 130%;
    }

    &.item-1 span {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    &.item-2 span {
      background-color: ${(props) => props.theme['yellow-medium']};
    }
    &.item-3 span {
      background-color: ${(props) => props.theme['base-text']};
    }
    &.item-4 span {
      background-color: ${(props) => props.theme['purple-medium']};
    }
  }
`
