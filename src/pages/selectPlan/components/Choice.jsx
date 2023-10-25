



const Choice = ({image:Image, name, monthly, yearly, id,  isYearPlan, selectPlan, selectedPlan}) => {


  return (
    <button onClick={()=>selectPlan(id)} type='button' className={`flex flex-1 xlg:flex-col xlg:py-5 md:px-5 p-3 gap-3 border rounded-lg h-[60%] xlg:h-full   xlg:justify-between hover:border-color-primary-purple-blue  overflow-hidden ${selectedPlan === name && 'border-color-primary-marine-blue'}`}>

        <img src={Image} alt="" className='w-10' />
        <div className='text-start'>
            <div className=' text-color-primary-marine-blue font-bold'>{name}</div>
            <div className=' text-color-cool-gray'>
                ${
                    isYearPlan ? yearly : monthly
                }/{
                    isYearPlan ? 'yr' : 'mo' 
                }
            </div>
            <div>
                {
                    isYearPlan && <span className=' text-color-primary-marine-blue xlg:font-light  font-medium text-sm'>2 months free</span>
                }
            </div>
        </div>
    </button>
  )
}

export default Choice
