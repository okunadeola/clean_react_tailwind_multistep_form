import { goToPlanStep } from "../../../context/reducers/actions"


const ChoiceOutline = ({data, action, isYearPlan}) => {
  return (
    <div className="flex flex-col bg-color-Magnolia h-auto p-6 rounded-lg">
      <div className="flex justify-between text-color-primary-marine-blue font-semibold">
            <div>
                <span>{data?.plan?.planName} ({data?.plan?.planDuration})</span>
                <div>
                    <button className=" text-color-primary-purple-blue underline font-normal" onClick={()=>action(goToPlanStep())}>Change</button>
                </div>
            </div>

            <div>
                ${data?.plan?.planAmount}/{isYearPlan ? 'yr' : 'mo'}
            </div>
      </div>
      <div className="border-b  my-6"></div>

      <div className="flex flex-col gap-y-3">
        {
            data?.addons?.map(ad => (
                <div key={ad.name} className="flex justify-between">
                    <div className=" text-color-cool-gray">{ad?.name}</div>
                    <div className=" text-color-primary-marine-blue opacity-80">
                        +${isYearPlan ? ad?.yearly : ad?.monthly} 
                        /{isYearPlan ? 'yr' : 'mo'}
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ChoiceOutline
