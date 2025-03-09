import React from 'react'
import classes from "./featured.module.css"
import CourseCard from '../../../components/course-card/course-card'

const Featured = () => {
  return (
    <div className={classes.featured} >
        <h1 className={classes.title} >Featured</h1>
    </div>
  )
}

export default Featured