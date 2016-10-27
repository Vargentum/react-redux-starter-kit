import {createStore} from 'redux'
import rootReducer from 'redux/rootReducer'

export const makeFakeStore = (initialState = {}) => 
  createStore(rootReducer, initialState)
