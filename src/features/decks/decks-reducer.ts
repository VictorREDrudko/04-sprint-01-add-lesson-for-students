import { Decks, Item } from "./Decks-api-type"

const initialState = {
  decks: [] as Item[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS': 
      return {...state, decks: action.payload.decks}
    default:
      return state
  }
}

// Action creator
export const setDecksAC = (decks: Item[]) => {
  return {type: 'SET_DECKS', payload: {decks}}
}

// Type AC
type SetDecksAC = ReturnType<typeof setDecksAC>

// Type action
type DecksActions = SetDecksAC
