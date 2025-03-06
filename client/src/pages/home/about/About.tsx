import React from 'react'
import classes from "./about.module.css"

const About = () => {
  return (
    <div className={classes.about} >
      <h1 className={classes.title} >About 100xDevs</h1>
      <div className={classes.content} >
        <p>Welcome to 100xdevs.</p>
        <p>This is an initiative by Harkirat Singh to personally mentor folks in the field of Programming.</p>
        <p>Harkirat strongly feels that today you are either a 1x engineer or a 100x engineer and nothing in the middle, and his hope is to take everyone in this community to be a 100x Engineer.</p>
        <p>Join him in his first course on Full Stack development with a heavy focus on Open source projects to learn programming practically.</p>
      </div>
    </div>
  )
}

export default About