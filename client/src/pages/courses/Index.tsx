import React from 'react'
import {  useSelector } from 'react-redux'
import classes from "./courses.module.css"
import CourseCard from '../../components/course-card/course-card'
import ErrorBoundary from '../../components/error-handling/Index'

const Courses = () => {

  const courses = useSelector((state:any) => state.user.courses)

  console.log("courses",courses)

  return (
      <div className={classes.courses} >

      {courses && courses.map((items:any,index:any) =>{
        return (
          <ErrorBoundary>
          <CourseCard key={index} items={items} />
          </ErrorBoundary>
        )
      })}
      </div>
  )
}

export default Courses