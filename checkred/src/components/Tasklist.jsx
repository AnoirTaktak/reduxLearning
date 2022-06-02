import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const Tasklist = () => {
   const {tasks} = useSelector(state => state)
  return (
    <div>
        {
            tasks.map((el,i) =>
                <Task task={el} key={i} />  
                )
        }
    </div>
  )
}

export default Tasklist