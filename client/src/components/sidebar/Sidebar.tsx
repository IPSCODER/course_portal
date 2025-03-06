import React from 'react'
import classes from "./sidebar.module.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const loginState = useSelector((state:any) =>state?.user?.loginState)

  return (
    <aside className={classes.sidebar} >
      <h2>Main Menu</h2>
      <ul>
        <li><Link to={"/"} >Home</Link></li>
        <li><Link to={"/new-courses"} >Courses</Link></li>
      </ul>
      {loginState && (<>
        <hr/>
      <ul>
        <li><Link to={"/purchased"} >Purchases</Link></li>
        <li><Link to={"/setting"} >Settings</Link></li>
        <li>Logout</li>
      </ul>
      </>)}
    </aside>
  )
}

export default Sidebar