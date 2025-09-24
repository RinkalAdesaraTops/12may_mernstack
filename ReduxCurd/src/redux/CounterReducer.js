import { add, minus, reset } from "./CounterAction"

const initialstate = {
    count:0
}
const CounterReducer = (state=initialstate,action) => {
    switch(action.type){
        case add: return {
            count:state.count+1
        }
        case minus: return {
            count:state.count-1
        }
        case reset: return {
            count:0
        }
        default: return state
    }
}

export default CounterReducer
