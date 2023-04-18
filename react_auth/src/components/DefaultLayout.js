import {Outlet, Navigate, NavLink} from 'react-router-dom';
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider";
import {useEffect} from 'react';

export default function DefaultLayout() {

    const {user, token, setUser, setToken, notification} = useStateContext();

    useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])

    if(!token){
        return <Navigate to="/login" />
    }

    const onLogout = (e) => {
        e.preventDefault()
    console.log("logout")
        axiosClient.post('/logout')
          .then(() => {
            setUser({})
            setToken(null)
          })
      }

      

return(
    <div id='defaultLayout'>
        <aside>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/users'>Users</NavLink>
            {/* <NavLink to='/'>List of Books</NavLink>
            <NavLink to='#'>Publishers</NavLink>
            <NavLink to='#'>Setting</NavLink> */}

        </aside>
        <div className='content'>
            <header>
                <div>
                    header
                </div>
                <div>
                    {/* {user.name} &nbsp; &nbsp; */}
                    <a href='#' onClick={onLogout} className='btn-logout'>Logout</a>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>

        </div>
    </div>
 )
}