import React from "react"
import UserContext from "./user-context"

const Context = ({children}:{children:React.ReactNode}) => {


    return (
        <>
        <UserContext>
        {children}
        </UserContext>
        </>
    )
}

export default Context