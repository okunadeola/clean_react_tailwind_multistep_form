



export const initialValue  = ()=> {
     const storedData = window.localStorage.getItem('subplan')

    return storedData  ? JSON.parse(storedData) : {
        step: 0,
        personalInfo : {
            name: 'ade tunji',
            email: 'bola@gmail.com',
            phone: ''
        },
        plan : {
            planName: '',
            planAmount: 0,
            planDuration: 'monthly'
        },
        addons: [],
        total: 0,
        isCompleted: false
    }

}

