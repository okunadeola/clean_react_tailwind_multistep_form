


import PrevButton from './PrevButton'
import NextButton from './NextButton'

const ButtonContainer = ({nextAction, data}) => {
  return (
    <div className=' bg-color-whiten h-20 xlg:15  xlg:absolute xlg:bottom-2 xlg:w-auto xlg:max-w-[100%] xlg:mx-9 fixed bottom-0 w-full right-0 left-0'>
        <div className='flex w-full  gap-x-6 justify-between items-center xlg:px-0 px-6 h-full'>

          {
            data?.step > 0 && data?.step <= 3 ?  (
              <PrevButton/> 
            ) : <div></div>
          }
            <NextButton action={nextAction} step={data?.step}/>
        </div>
    </div>
  )
}

export default ButtonContainer
