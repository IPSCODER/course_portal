import React, { createContext, useContext, useState } from "react";


const contextProvider = createContext<any>(null)

const UserContext = ({children}:{children:React.ReactNode}) =>{
    const [open, setOpen] = useState(false);

    console.log("user context")

    return (
    <contextProvider.Provider value={{open,setOpen}}>
    {children}
    </contextProvider.Provider>)
}

export default UserContext

export const useUser = () => useContext(contextProvider)