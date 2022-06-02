import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionTypes"



export const deletet = (id) => {
    return {type : DELETE_TASK,
            payload : id}
}
export const completet = (id) => {
    return {
        type : COMPLETE_TASK,
        payload :id
    }
}

export const addt = (newtask) => {
    return {
        type : ADD_TASK,
        payload :newtask
    }
}

export const editt = (x) => {
    return {
        type : EDIT_TASK,
        payload :x
    }
}

export const filtert = (y) => {
    return {
        type : FILTER_TASK,
        payload :y
    }
}