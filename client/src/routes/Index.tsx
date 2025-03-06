import { lazy } from "react";
import Loadable from "../components/loadable";
import { useRoutes } from "react-router-dom";
import Theme from "../theme/Index";
const Auth = Loadable(lazy(() => import("../pages/auth/Index")))
const Courses = Loadable(lazy(() => import("../pages/courses/Index")))
const Home = Loadable(lazy(() => import("../pages/home/Index")))
const NotAuthorized = Loadable(lazy(() => import("../pages/not-authorized/Index")))
const Admin = Loadable(lazy(() => import("../pages/admin/Index")))
const NotFound = Loadable(lazy(() => import("../pages/404/Index")))

const routes = [
    {path:'/auth',element:<Auth/>},
    {path:'*',element:<NotFound/>},
    {path:'/not-authorized',element:<NotAuthorized/>},
    {path:'/',element:<Theme/>,children:[
    {path:'/',element:<Home/>},
    {path:'/admin',element:<Admin/>},
    {path:'/courses',element:<Courses/>},
    ]}
]

const AppRoutes = () =>{

    return useRoutes(routes)
}

export default AppRoutes;