


import  { createContext, useReducer } from 'react'
import {initialValue} from './reducers/initialValue'
import { reducer } from './reducers/reducer'



export const  SubPlan = createContext() 




const SubscriptionContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue())


  return (
    <SubPlan.Provider value={{
        state, dispatch
    }}>
      {children}
    </SubPlan.Provider>
  )
}

export default SubscriptionContext
