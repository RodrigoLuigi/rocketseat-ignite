import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(1)

  function increaseCount() {
    if (count < 5) {
      setCount((prevState) => prevState + 1)
    }
  }

  function decreaseCount() {
    if (count > 1) {
      setCount((prevState) => prevState - 1)
    }
  }

  return (
    <CounterContainer>
      <button onClick={decreaseCount}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{count}</span>
      <button onClick={increaseCount}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
