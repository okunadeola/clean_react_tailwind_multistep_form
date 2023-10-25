

import Choice from './Choice'

const PlanChoice = ({options, isYearPlan, selectPlan, selectedPlan}) => {
  return (
    <div className='flex flex-col xlg:flex-row xlg:gap-x-2  gap-y-3 h-[50%]'>
      {
        options?.map(opt => (
            <Choice 
                key={opt.id}
                name={opt.name}
                image={opt.image}
                monthly={opt.monthly} 
                yearly={opt.yearly} 
                id={opt.id}
                isYearPlan={isYearPlan}
                selectPlan={selectPlan}
                selectedPlan={selectedPlan}
            />
        ))
      }
    </div>
  )
}

export default PlanChoice
