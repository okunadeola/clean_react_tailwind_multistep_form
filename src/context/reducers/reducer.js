import { COMPLETE_STEP, GO_TO_PLAN_CHOICE_STEP, GO_TO_PREVIOUS_STEP, PROCEED_TO_NEXT_STEP, SEEK } from "./constant";




export const reducer = (state, {type, payload})=>{
    switch (type) {
        case PROCEED_TO_NEXT_STEP:
            const latest = {...state, ...payload, step: state.step++ }
            localStorage.setItem('subplan', JSON.stringify(latest))
            return latest;
    
        case GO_TO_PREVIOUS_STEP:
            const current = {...state, step: state.step-- }
            localStorage.setItem('subplan', JSON.stringify(current))
            return current;
          
        case GO_TO_PLAN_CHOICE_STEP:
            const snapshot = {...state, step: 1 }
            localStorage.setItem('subplan', JSON.stringify(snapshot))
            return snapshot;
        case COMPLETE_STEP:
            const data = {...state, step: 4, isCompleted: true}
            localStorage.setItem('subplan', JSON.stringify(data))
            return data;
        case SEEK:
            const stepUI = {...state,  step: payload  }
            localStorage.setItem('subplan', JSON.stringify(stepUI))
            return stepUI;
        default:
            return state;
    }
}