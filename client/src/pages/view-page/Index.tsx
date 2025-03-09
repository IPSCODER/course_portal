import React from 'react'
import classes from "./veiw.module.css"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../../ui/button/Button'

const CourseView = () => {
  const {route} =  useParams()
  const course =  useSelector((state:any) => state.user.course)
  const discountPercentage = Math.round(((course.price - course.discounted_price) / course.price) * 100);

  


  return (
    <div className={classes.main} >
      {/* header */}
    <div className={classes.header} >
    <h2>{course.title}</h2>
    </div>
    {/* header */}
    {/* card */}
    <div className={classes.card} >
      <img src={course?.img} alt={course.title} />
      <h2>{course.title}</h2>
      <h4>{course.description}</h4>
      <span>
          <p>
            Rs.{course.discounted_price}
            <br/>
            Rs.<del>{course.price}</del>
          </p>
          <p>{discountPercentage}% Off</p>
        </span>
        <Button className='btn' >Buy Now</Button>
    </div>
    {/* card */}
    {/* body */}
    <div className={classes.body} >

    </div>
    {/* body */}
    </div>
  )
}

export default CourseView