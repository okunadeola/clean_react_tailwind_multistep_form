

import { useContext, useEffect } from 'react'
import Title from '../../components/Title'
import ButtonContainer from '../../components/ButtonContainer'
import Input from './components/Input'
import { SubPlan } from '../../context/SubscriptionContext'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import { goToNextStep } from '../../context/reducers/actions'




const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const Schema = yup.object().shape({
  name: yup.string().required("This is required"),
  email: yup.string().required("This is required").email('Invalid email format'),
  phone: yup.string().required("This is required").matches(phoneRegExp, 'Invalid phone')
})






const PersonalInfo = () => {
  const {state, dispatch} = useContext(SubPlan)
    // const [personalInfo, setPersonalInfo] = useState( {
    //     name: '',
    //     email: '',
    //     phone: ''
    // })

    const {handleSubmit, register, setValue, formState: {errors}} = useForm({
      resolver: yupResolver(Schema)
    })

    useEffect(() => {
      setValue('name', state?.personalInfo?.name)
      setValue('email', state?.personalInfo?.email)
      setValue('phone', state?.personalInfo?.phone)
      // setPersonalInfo(prev => ({...prev, ...state?.personalInfo}))
  }, [state])


    // const handleChange = (e)=>{
    //     e.preventDefault()
    //     setPersonalInfo(prev => ({...prev, [e.target.name]: e.target.value }))
    // }



    const onSubmit = (data)=>{
        dispatch(goToNextStep({...state, personalInfo: {...data}}))
    }



    const title = 'Personal info'
    const desc = 'Please provide your name, email address, and phone mumber'


  return (
    <div  className='flex flex-col  w-full '>
        <Title title={title} desc={desc}/>

      <div className=' mt-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-7 xlg:gap-y-4'>
            <Input type='text' label='Name' name={'name'} placeholder='your fullname'  error={errors.name} register={register}/>

            <Input type='email' label='Email' name={'email'} placeholder={'example@mail.com'} error={errors.email} register={register} />

            <Input type='number' label={'Phone Number'} name={'phone'} placeholder='e.g +1 234 56 798'  error={errors.phone} register={register} />
        </form>
      </div>

        <ButtonContainer data={state} nextAction={handleSubmit(onSubmit)}/>
    </div>
  )
}

export default PersonalInfo
