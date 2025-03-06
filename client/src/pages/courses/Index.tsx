import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/reducers/userSlice'

const Courses = () => {

  const count = useSelector((state:any) => state.user.count)
  const disptach =useDispatch()

  console.log("courses")

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{disptach(increment())}} >Increment</button>
      <button onClick={()=>{disptach(decrement())}} >Decrement</button>

      <h2>Course</h2>
    </div>
  )
}

export default Courses