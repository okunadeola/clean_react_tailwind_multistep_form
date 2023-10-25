import { useContext, useEffect, useState } from 'react'
import Title from '../../components/Title'
import ButtonContainer from '../../components/ButtonContainer'
import { SubPlan } from '../../context/SubscriptionContext'
import AddonsChoice from './components/AddonsChoice'
import { goToNextStep } from '../../context/reducers/actions'

const PickAddons = () => {
  const {state, dispatch} = useContext(SubPlan)
  const [addons, setAddons] = useState([])
  const [isYearPlan, setIsYearPlan] = useState(false)
  const title = 'Pick add-ons'
  const desc = 'Add-ons help enhance your gaming experience.'

  const addonOptions = [
    {
      id: 1,
      name: 'Online service',
      desc: 'Access to multiplayer games',
      yearly: 10,
      monthly: 1
    },
    {
      id: 2,
      name: 'Larger storage',
      desc: 'Extra 1TB of cloud save',
      yearly: 20,
      monthly: 2
    },
    {
      id: 3,
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      yearly: 20,
      monthly: 2
    },
  ]

  // update initail value from reducer store
  useEffect(() => {
    setAddons(prev => ([...state?.addons]))
    setIsYearPlan(state?.plan?.planDuration === 'yearly')
}, [state])

// next
  const handleSubmit = ()=>{
      dispatch(goToNextStep({...state, addons:[...addons]}))
  }

  const selectAddon = (id)=>{
    const item = addons?.find(it=> it.id === id)
    const theItem = addonOptions?.find(it=> it.id === id)

    if(item){
      setAddons([...addons?.filter(it => it.id !== item.id)])
    }else{
      setAddons([...addons, {...theItem}])
    }
  }



  return (
    <div  className='flex flex-col w-full h-full'>
    <Title title={title} desc={desc}/>

    <div className=' mt-0 flex flex-col gap-y-1 h-full'>
          <AddonsChoice options={addonOptions} addons={addons} selectAddon={selectAddon} isYearPlan={isYearPlan}/>
    </div>

    <ButtonContainer data={state} nextAction={handleSubmit}/>
</div>
  )
}

export default PickAddons
