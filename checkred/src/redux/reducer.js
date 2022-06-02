import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionTypes";

export const init = {
  tasks : [
      {id:Math.random(),tname:'react',isDone:true},
      {id:Math.random(),tname:'redux',isDone:false},
      {id:Math.random(),tname:'api',isDone:false}
  ]
  
}
export const reducer = (state=init,{type,payload}) => {
    switch (type) {
      case DELETE_TASK:
        
        return { ...state,tasks:state.tasks.filter(el => el.id !== payload) };

      case COMPLETE_TASK :
        return {
          ...state,tasks:state.tasks.map((el) => 
          el.id === payload ?
          {...el ,isDone :!el.isDone }  
           : el 
           )
          };

      case ADD_TASK : 
       
        return {...state,tasks:[...state.tasks,payload]}

      case EDIT_TASK : 
       
        return {...state,tasks:state.tasks.map((el) => 
          el.id === payload.id ?
          {...el ,tname :payload.tname }  
           : el 
           )}

      case FILTER_TASK : 
          
          return {...state,tasks:state.tasks.filter(el => el.isDone===payload)}

      default:

         return state ;
        
    }
}