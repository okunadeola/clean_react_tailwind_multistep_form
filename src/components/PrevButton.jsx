import { useContext } from 'react'
import { SubPlan } from '../context/SubscriptionContext'
import { goToPreviousStep } from '../context/reducers/actions'

const PrevButton = () => {
  const {dispatch} = useContext(SubPlan)





  const goBack = ()=>{
    dispatch(goToPreviousStep())
  }


  return (
    <div>
      <button className=' text-color-cool-gray hover:text-color-primary-marine-blue' onClick={goBack}>Go Back</button>
    </div>
  )
}

export default PrevButton
