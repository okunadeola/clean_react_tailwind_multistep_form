import CheckImage from '../../assets/images/icon-thank-you.svg'

const ThankYou = () => {
  return (
    <div  className='flex flex-col w-full h-full'>
    <div className=' mt-0 flex flex-col gap-y-7 h-full justify-center items-center'>
      <div>
        <img src={CheckImage} alt="" />
      </div>
      <div>
        <span className=' text-color-primary-marine-blue font-bold text-2xl'>Thank you!</span>
      </div>
        <div>
          <p className='text-center text-color-cool-gray text-lg'>
            Thanks for confirming your subscription! <br />
            We hope you have fun using our <br />
            platform. If you ever need support, <br />
            please feel free to email us at <br />
            support@loremgaming.com.
          </p>
        </div>
    </div>


</div>
  )
}

export default ThankYou
