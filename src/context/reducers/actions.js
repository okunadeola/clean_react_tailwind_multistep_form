import { COMPLETE_STEP, GO_TO_PLAN_CHOICE_STEP, GO_TO_PREVIOUS_STEP, PROCEED_TO_NEXT_STEP, SEEK } from "./constant"


export const goToNextStep = (data)=>{
    return {
        type: PROCEED_TO_NEXT_STEP,
        payload: data
    }
}

export const goToPreviousStep = ()=>{
    return {
        type: GO_TO_PREVIOUS_STEP,
    }
}

export const goToPlanStep = ()=>{
    return {
        type: GO_TO_PLAN_CHOICE_STEP,
    }
}

export const seek = (data)=>{
    return {
        type: SEEK,
        payload: data
    }
}


export const completeStep = ()=>{
    return {
        type: COMPLETE_STEP,
    }
}