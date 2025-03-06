import React from 'react'
import classes from "./services.module.css"
import Card from './card'

const Services = () => {
  return (
    <div className={classes.services}>
        <h1 className={classes.title} >Why 100xdevs</h1>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Services