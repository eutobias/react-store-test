import { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer'

const DataContext = createContext(initialState)

function DataProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  )
}
export { DataContext, DataProvider }
