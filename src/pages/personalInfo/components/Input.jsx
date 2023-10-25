

const Input = ({
    label, placeholder, error, type, name, register
    // onChange, value,
}) => {
  return (
    <div>
        <div className='flex justify-between mb-2'>
            <label htmlFor={name} className='text-color-primary-marine-blue text-md font-medium'>{label}</label>
            <div className={`text-color-berry-red font-medium  ${error?.message ? 'block' : 'hidden'}`}>{error?.message}</div>
        </div>
      <input className={`border border-color-light-gray p-3 inset-0 outline-none w-full rounded-xl ${error?.message ? 'border-color-berry-red' : 'border-color-light-gray'}`}
       type={type} placeholder={placeholder}  name={name}  {...register(name)} />


      {/* <input className='border border-color-light-gray p-3 inset-0 outline-none w-full rounded-xl'
       type={type} placeholder={placeholder}  name={name} value={value}  onChange={onChange} /> */}
    </div>
  )
}

export default Input
