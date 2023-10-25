

const DurationToggler = ({toggle, isYearPlan}) => {




  return (
    <div className='flex justify-center items-center p-3 bg-color-Magnolia rounded-lg h-auto'>
        <div className='flex gap-x-4 items-center'>
            <p className={` font-medium  ${isYearPlan ? ' text-color-cool-gray' : ' text-color-primary-marine-blue'}`}>Monthly</p>


            <label className="cursor-pointer relative inline-block w-16 h-8 rounded-full">
                            <input checked={isYearPlan} onChange={(e)=>toggle(e.target.checked)} type="checkbox"  className="peer opacity-0 w-0 h-0"/>
                            <span className="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-marine-blue border border-solid border-color-primary-pastel-blue rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-whiten before:duration-300 peer-checked:before:translate-x-7 "></span>
            </label>
       



            <p className={` font-medium  ${isYearPlan ? ' text-color-primary-marine-blue' : ' text-color-cool-gray'}`}>Yearly</p>
        </div>
    </div>
  )
}

export default DurationToggler
