

const Title = ({title, desc}) => {
  return (
    <div className='flex flex-col gap-y-2 mb-7'>
      <header className=' text-3xl font-extrabold text-color-primary-marine-blue'>{title}</header>
      <p className=' text-color-cool-gray'>{desc}</p>
    </div>
  )
}

export default Title
