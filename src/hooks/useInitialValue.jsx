


import  { useContext, useEffect, useState } from 'react'
import { SubPlan } from '../context/SubscriptionContext'

const useInitialValue = () => {
    const {state} = useContext(SubPlan)
    const [value, setValue] = useState(null)

    useEffect(() => {
        setValue({...state})
    }, [state])
    



  return value
}

export default useInitialValue
