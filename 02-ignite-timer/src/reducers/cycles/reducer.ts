import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cyclesReducer(prevState: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...prevState,
        cycles: [...prevState.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...prevState,
        cycles: prevState.cycles.map((cycle) => {
          if (cycle.id === prevState.activeCycleId) {
            return {
              ...cycle,
              interruptedDate: new Date(),
            }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...prevState,
        cycles: prevState.cycles.map((cycle) => {
          if (cycle.id === prevState.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }

    default:
      return prevState
  }
}
