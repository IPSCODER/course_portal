import React, { createContext, useContext, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useDispatch } from 'react-redux';
import { setCourses } from "../store/reducers/userSlice";

const contextProvider = createContext<any>(null)

const UserContext = ({children}:{children:React.ReactNode}) =>{
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()
    const { data, refetch, isLoading, error } = useQuery({
      queryKey: ["data"],
      queryFn: async () => {
        const response = await fetch("http://localhost:8080/courses");
        console.log(response);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      },
    });
    
    if(data){
      dispatch(setCourses(data))
    }

    console.log("user context")

    return (
    <contextProvider.Provider value={{open,setOpen}}>
    {children}
    </contextProvider.Provider>)
}

export default UserContext

export const useUser = () => useContext(contextProvider)