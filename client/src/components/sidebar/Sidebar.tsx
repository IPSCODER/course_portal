import React from 'react'
import classes from "./sidebar.module.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  
  const logoutFun = () =>{
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  return (
    <aside className={classes.sidebar} >
      <h2>Main Menu</h2>
      <ul>
        <li><Link to={"/"} >Home</Link></li>
        <li><Link to={"/new-courses"} >Courses</Link></li>
      </ul>
      {isAuthenticated && (<>
        <hr/>
      <ul>
        <li><Link to={"/purchased"} >Purchases</Link></li>
        <li><Link to={"/setting"} >Settings</Link></li>
        <li onClick={logoutFun } ><Link to={'/'} >Logout</Link></li>
      </ul>
      </>)}
    </aside>
  )
}

export default Sidebar