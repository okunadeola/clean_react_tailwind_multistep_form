
import { useContext } from 'react'
import { SubPlan } from '../context/SubscriptionContext'
import { seek } from '../context/reducers/actions'

const Steps = () => {
 const {state, dispatch} = useContext(SubPlan)

    const stepInfo = [
        {
            stepNo: 1,
            stepDesc: 'your info'
        },
        {
            stepNo: 2,
            stepDesc: 'select plan'
        },
        {
            stepNo: 3,
            stepDesc: 'add-ons'
        },
        {
            stepNo: 4,
            stepDesc: 'summary'
        },
    ]


  return (
    <div className='flex xlg:flex-col gap-y-7 justify-center xlg:justify-start gap-x-5  xlg:gap-x-0 '>
        {
            stepInfo?.map(stp=>(
        <div key={stp.stepNo} onClick={state?.isCompleted ? ()=>dispatch(seek(stp.stepNo -1)) : ()=>{}} className={`flex items-center gap-x-4 ${state?.isCompleted && 'cursor-pointer'} `}>
                <div className={`p-5 w-9 h-9 border-2 flex items-center justify-center    
                border-color-primary-light-blue  rounded-full  font-medium text-lg ${
                    state?.step +1 == stp.stepNo ||( stp.stepNo === 4 && state?.step === 4)  ? 'bg-color-primary-light-blue text-color-primary-marine-blue' : 'text-color-primary-light-blue'
                }`}>{stp.stepNo}</div>
                <div className=' hidden xlg:block'>
                    <div className=' text-color-primary-pastel-blue text-sm'>STEP {stp.stepNo}</div>
                    <div className=' font-medium text-color-whiten text-sm'>{stp?.stepDesc?.toLocaleUpperCase()}</div>
                </div>
        </div>
            ))
        }
    </div>
  )
}
export default Steps
