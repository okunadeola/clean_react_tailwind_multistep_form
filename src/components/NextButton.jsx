

const NextButton = ({action, step}) => {
  return (
    <div>
        <button onClick={action} className=' bg-color-primary-marine-blue text-color-Magnolia outline-none px-6 py-3 rounded-lg hover:text-color-primary-light-blue'> {step === 3 ? 'Confirm' : 'Next Step'}  </button>
    </div>
  )
}

export default NextButton
