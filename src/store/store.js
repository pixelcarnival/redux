import { legacy_createStore as createStore } from 'redux'
import { tascReducer } from './tascReducer'

const initialState = [
  { id: 1, title: 'Tasc 1', completed: false },
  { id: 2, title: 'Tasc 2', completed: false },
]

export function initialeState() {
  return createStore(tascReducer, initialState)
}
