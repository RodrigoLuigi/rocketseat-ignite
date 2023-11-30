import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  height: 32px;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    width: 20px;

    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-title']};
    text-align: center;
    font-weight: 400;
    line-height: 130%;
  }
`
