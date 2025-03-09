import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

    const { isAuthenticated } = useAuth0();
  
    if(!isAuthenticated){
        console.log(isAuthenticated);
      return null
    }

  return (
    <>
          <li>
      <Link to={"/my-profile"} >
      <svg fill="#4daa6d" width={40}  viewBox="0 0 512 512" id="_x30_1" version="1.1" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,90 c37.02,0,67.031,35.468,67.031,79.219S293.02,248.438,256,248.438s-67.031-35.468-67.031-79.219S218.98,90,256,90z M369.46,402 H142.54c-11.378,0-20.602-9.224-20.602-20.602C121.938,328.159,181.959,285,256,285s134.062,43.159,134.062,96.398 C390.062,392.776,380.839,402,369.46,402z"></path></g></svg>
      </Link>
        </li>
    </>
  )
}

export default Profile