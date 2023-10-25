

const AddonsChoice = ({options, selectAddon, addons, isYearPlan}) => {
  return (
    <div className='flex flex-col gap-y-3'>
      {
        options?.map(opt =>(
        
            <label key={opt.id} htmlFor="checkb" className='w-full'>
                <button 
                onClick={()=>selectAddon(opt.id)} type='button' className={`flex py-3 px-2 text-start w-full gap-2 border rounded-lg h-[60%] xlg:h-full  justify-between items-center hover:border-color-primary-purple-blue overflow-hidden ${addons?.some(it=> it.id === opt.id) && ' border-color-primary-purple-blue'}`}
                >
                    <div className='flex gap-x-5'>
                        <input readOnly className='w-5 
                         checked:bg-color-primary-purple-blue
                        bg-color-primary-purple-blue text-color-primary-purple-blue' checked={addons?.some(it=> it.id === opt.id) && true}  type="checkbox"  id="checkb" />
                        <div className='flex flex-col justify-start items-start'>
                            <div className=' font-medium text-lg text-color-primary-marine-blue'>{opt.name}</div>
                            <div className=' text-color-cool-gray'>{opt.desc}</div>
                        </div>  
                    </div>


                    <div className=' text-color-primary-purple-blue'>+${
                        isYearPlan ? opt?.yearly : opt.monthly}/   {
                            isYearPlan ? 'yr' : 'mo'
                        }</div>
                </button>


            </label>


        ))
      }
    </div>
  )
}

export default AddonsChoice
