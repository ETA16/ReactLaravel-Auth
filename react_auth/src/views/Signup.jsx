import {Link} from 'react-router-dom'
import { useRef } from 'react';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Signup(){
   //ref to use imput data send as request
   const nameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();
   const passwordConfirmationRef = useRef();

   const {setUser, setToken} = useStateContext();


   const onSubmit = (e) => {
      e.preventDefault()
      const payload = {
         name:nameRef.current.value,
         email:emailRef.current.value,
         password:passwordRef.current.value,
         password_confirmation:passwordConfirmationRef.current.value
      }
      axiosClient.post('/register', payload)
         .then(({data} ) => {
            setUser(data.user);
            setToken(data.token);
            // localStorage.setItem('user',setUser);
         })
         .catch(err => {
            const response = err.response;
            if(response && response.status === 422){
               console.log(response.data.errors);
            }
         })
   }
return(
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
         <h1 className='title'>Signup</h1>
       <form onSubmit={onSubmit}>
         <input ref={nameRef} type="text" placeholder="Name"/>
         <input ref={emailRef} type="email" placeholder="Email"/>
         <input ref={passwordRef} type="password" placeholder="Password"/>
         <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation"/>
         <button className="btn btn-block">Signup</button>
         <p className="message">
         Already Regiestered? <Link to="/login">Login</Link>
         </p>
       </form>
       </div>
    </div>
 )
}