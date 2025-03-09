import { lazy } from "react";
import Loadable from "../components/loadable";
import { useRoutes } from "react-router-dom";
import Theme from "../theme/Index";
import ProtectedRoute from "./protected-routes";
import CourseView from "../pages/view-page/Index";
const Purchased = Loadable(lazy(() => import("../pages/purchased/Index")));
const Setting = Loadable(lazy(() =>import("../pages/setting/Index")));
const Profile = Loadable(lazy(() => import("../pages/profile/Index")));
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
    {path:'/new-courses',element:<Courses/>},
    {path:'/purchased',element: (<ProtectedRoute element={<Purchased/>} />) },
    {path:'/setting',element:(<ProtectedRoute element={<Setting/>} />)},
    {path:'/new-course/:route',element:<CourseView/> }
]},
{path:'/my-profile',element:(<ProtectedRoute element={<Profile/>} />)},
]

const AppRoutes = () =>{

    return useRoutes(routes)
}

export default AppRoutes;