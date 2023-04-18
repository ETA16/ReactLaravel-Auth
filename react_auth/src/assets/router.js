import {createBrowserRouter} from "react-router-dom"

import Login from '../views/Login'
import Signup from "../views/Signup";
import Users from "../views/Users";

import DefaultLayout from "../components/DefaultLayout";
import GuestLayout from "../components/GuestLayout";
import Dashboard from "../views/Dashboard";
import PageNotFound from "../views/PageNotFound"

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                element: <Users/>
            }
        ]
    },
    {
        path:'/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound/>
    }


])

export default router;

