import { useContext, useEffect, useState } from 'react'
import Title from '../../components/Title'
import ButtonContainer from '../../components/ButtonContainer'
import { SubPlan } from '../../context/SubscriptionContext'
import { goToNextStep } from '../../context/reducers/actions'
import ArcadeImage from '../../assets/images/icon-arcade.svg'
import AdvanceImage from '../../assets/images/icon-advanced.svg'
import ProImage from '../../assets/images/icon-pro.svg'
import PlanChoice from './components/PlanChoice'
import DurationToggler from './components/DurationToggler'

const SelectPlan = () => {
  const {state, dispatch} = useContext(SubPlan)
  const [planChoice, setPlanChoice] = useState( {
    planName: '',
    planAmount: 0,
    planDuration: ''
  })
  const [isYearPlan, setIsYearPlan] = useState(false)
  const [error, setError] = useState(false)


  const planOptions = [
    {
      image: ArcadeImage,
      name: 'Arcade',
      monthly: 9,
      yearly: 90,
      id: 1
    },
    {
      image: AdvanceImage,
      name: 'Advanced',
      monthly: 12,
      yearly: 120,
      id: 2
    },
    {
      image: ProImage,
      name: 'Pro',
      monthly: 15,
      yearly: 150,
      id: 3
    },
  ]
  const title = 'Select your plan'
  const desc = 'You have the option of monthlty or yearly billing.'



// update initail value from reducer store
  useEffect(() => {
    setPlanChoice(prev => ({...prev, ...state?.plan}))
    setIsYearPlan(state?.plan?.planDuration === 'yearly')
}, [state])


// listen for toggle
  useEffect(()=>{
    const item = planOptions?.find(it => it.name === planChoice?.planName)

    if(item){
      const amount = isYearPlan ? item.yearly : item.monthly
      const duration = isYearPlan ? 'yearly' : 'monthly'
  
      setPlanChoice(prev=> ({...prev, 
        planAmount: amount,   
        planDuration: duration }))
    }
  }, [isYearPlan])



// select a plan
const selectPlan = (id)=>{
  const item = planOptions?.find(it => it.id === id)
  const amount = isYearPlan ? item.yearly : item.monthly
  const duration = isYearPlan ? 'yearly' : 'monthly'

  setPlanChoice(prev=> ({...prev,    
      planName: item?.name,
      planAmount: amount,
      planDuration: duration }))
  setError(false)
}



// next
  const handleSubmit = ()=>{
    const { planName, planAmount, planDuration} = planChoice
    if(planName && planAmount && planDuration){
      dispatch(goToNextStep({...state, plan:{...planChoice}}))
    }else{
      setError(true)
    }
  }



  return (
    <div  className='flex flex-col w-full h-full'>
        <Title title={title} desc={desc}/>

        <div className=' mt-2 flex flex-col gap-y-5 h-full'>
          <div>
            {
              error && <span className=' text-color-berry-red'>Please select a plan</span>
            }
          </div>
          <PlanChoice options={planOptions} selectedPlan={planChoice.planName} isYearPlan={isYearPlan} selectPlan={selectPlan}/>
          <DurationToggler toggle={setIsYearPlan} isYearPlan={isYearPlan}/>
        </div>

        <ButtonContainer data={state} nextAction={handleSubmit}/>
    </div>
  )
}

export default SelectPlan
