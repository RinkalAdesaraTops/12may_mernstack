export const add = "INCREMENT"
export const minus = "DECREMENT"
export const reset = "CLEAR"

export const addFunc = ()=>{
    return {
        type:add 
    }
}
export const minusFunc = ()=>{
    return {
        type:minus
    }
}
export const resetFunc = ()=>{
    return {
        type:reset
    }
}