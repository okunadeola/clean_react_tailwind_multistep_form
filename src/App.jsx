import { useContext } from 'react'

import { SubPlan } from './context/SubscriptionContext'
import Stepper from './components/Stepper'
import PersonalInfo from './pages/personalInfo'
import SelectPlan from './pages/selectPlan'
import PickAddons from './pages/pickAddon'
import Summary from './pages/summary'
import ThankYou from './pages/thankYou'


function App() {
  const {state} = useContext(SubPlan)




  return (
    <div className='h-screen w-full grid place-items-center bg-color-light-gray' >

  

         <div className='w-full xl:w-4/6  xlg:w-[90%] h-full xlg:h-[73%] bg-transparent xlg:bg-color-whiten rounded-xl xlg:p-3  relative'>

          <div className='flex flex-col  xlg:gap-x-3 gap-0 md:gap-x-4 h-full w-full  xlg:flex-row'>


            <Stepper/>

            <div className='flex-1 xlg:py-7 py-7 px-9 bg-color-whiten absolute xlg:relative top-[9rem]  right-0 left-0 overflow-hidden  xlg:top-0 min-h-[60%] xlg:h-auto xlg:rounded-none rounded-2xl  2xl:mx-0 mx-4'>

              {
                state?.step === 0 && <PersonalInfo/>
              }
              {
                state?.step === 1 && <SelectPlan/>
              }
              {
                state?.step === 2 && <PickAddons/>
              }
              {
                state?.step === 3 && <Summary/>
              }
              {
                state?.step === 4 && <ThankYou/>
              }
             
            </div>

          </div>
         </div>

    </div>
  )
}

export default App
