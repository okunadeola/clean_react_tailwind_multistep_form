

const Total = ({total, isYearPlan}) => {
  return (
    <div className="flex flex-col h-auto p-6 rounded-lg">
        <div className="flex justify-between">
            <div className=" text-color-cool-gray">Total (per {isYearPlan ? 'year' : 'month'})</div>
            <div className="font-bold text-xl text-color-primary-purple-blue">+${total} 
                        /{isYearPlan ? 'yr' : 'mo'}</div>
        </div>
    </div>
  )
}

export default Total
