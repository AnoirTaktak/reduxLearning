import React, { useState } from 'react'
import { completet, deletet, editt } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Task = ({task}) => {
    console.log(task)
    const dispatch = useDispatch()
    const [ed, seted] = useState(false)
    const [newname, setnewname] = useState('')
    const x = {
      id:task.id,
      tname:newname, 
      isDone:task.isDone,
    }
  return (
    <div>
      {
        ed ? 
        <div>
        <input type="text" value={newname} onChange={(e)=>setnewname(e.target.value)}/>
        <button onClick={()=>{dispatch(editt(x)) ;seted(!ed);}} >make it happen</button>
        <button onClick={()=>seted(!ed)}>go away</button>
        </div>
        :
        <div>
      {task.isDone?
        <h3 style={{color:'green'}} >{task.tname}</h3>
        :
        <h3 style={{color:'red'}} >{task.tname}</h3>
        }
      </div>
      }
      
        <button onClick={()=>dispatch(deletet(task.id))}>delete</button>
        <button onClick={()=>dispatch(completet(task.id))} >{task.isDone?'UNDO':'COMPLETE'}</button>
        <button onClick={()=>seted(!ed)}  >edit</button>
    </div>
  )
}

export default Task