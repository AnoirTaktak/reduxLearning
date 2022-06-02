import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addt, filtert } from '../redux/actions'


const AddTask = () => {
    const dispatch = useDispatch()
    const [tn, settn] = useState('')
    const newtask = {
        id:Math.random(),
        tname : tn ,
        isDone : false
    }
  return (
    <div>
        <input type="text" value={tn} onChange={(e)=>settn(e.target.value)} />
        <button onClick={()=>dispatch(addt(newtask))}>Add task</button>
        <button onClick={()=>dispatch(filtert(true))}>Filter True</button>
        <button onClick={()=>dispatch(filtert(false))}>Filter false</button>
    </div>
  )
}

export default AddTask