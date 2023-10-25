



import  { useContext, useEffect, useState } from 'react'
import { SubPlan } from '../../context/SubscriptionContext'
import Title from '../../components/Title'
import ButtonContainer from '../../components/ButtonContainer'
import { completeStep } from '../../context/reducers/actions'
import ChoiceOutline from './components/ChoiceOutline'
import Total from './components/Total'

const Summary = () => {
  const {state, dispatch} = useContext(SubPlan)
  const [total, setTotal] = useState([])
  const [isYearPlan, setIsYearPlan] = useState(false)
  const title = 'Finishing up'
  const desc = 'Double-check everything looks OK before confirming.'


    // update initail value from reducer store
    useEffect(() => {
      setIsYearPlan(state?.plan?.planDuration === 'yearly')
  }, [state])



    useEffect(() => {
      // {monthly, yearly} -> extracting/destructuring
      const addonTotal = state?.addons?.reduce((a, {monthly, yearly})=> isYearPlan ? a+yearly : a + monthly, 0)

      const planAmount = state?.plan?.planAmount
  
      const addAll = addonTotal + planAmount
      setTotal(addAll)
  }, [state])



  
  // next
    const handleSubmit = ()=>{
        dispatch(completeStep())
    }

  return (
    <div  className='flex flex-col w-full h-full'>
    <Title title={title} desc={desc}/>

    <div className=' mt-0 flex flex-col gap-y-1 h-full'>
      <ChoiceOutline data={state} action={dispatch} isYearPlan={isYearPlan} />
      <Total total={total} isYearPlan={isYearPlan}/>
    </div>

    <ButtonContainer data={state} nextAction={handleSubmit}/>
</div>
  )
}

export default Summary
