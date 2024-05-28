import React, { useEffect, useState } from 'react'
import styles from "./SignUp.module.css"

import signupValidation from './signupValidation'

import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';




export default function Login() {

/////////////////////////////////////////////////////////////////////////////////////////////states
    const [data, setData] = useState({
        
        Email: '',
        Password: '',
        
    })

    const [errors , setErrors]= useState({})
    const [touched , setTouched]= useState({})



   ////////////////////////////////////////// ///////////////////////////////////////////////functions

    const changeHandeler= (event) =>{
    
         
            setData({...data, [event.target.name]:event.target.value})
        
        console.log(data);
    }

/////////////////////////////////////////
    useEffect(()=>{
        setErrors(signupValidation(data , "Login"))
        // console.log(errors);
    },[data, touched])

////////////////////////////////////////
   const focusHandeler =(event) =>{
    setTouched({...touched,[event.target.name]: true})
    console.log(touched);
   }

////////////////////////////////////////
const SubmitHandeler = (event) =>{
    event.preventDefault();
   
    if (Object.keys(errors).length === 0 ){
        notify("success");

    }
    else{
        notify("error")
        setTouched({
            
            Email: true,
            Password: true, 
            
        })

    }
}

///////////////////////////////////
const notify= (type)=> {
    if (type==="success")
    toast.success("You Login successfully")
    else{toast.error("Invalid data!")}

}

///////////////////////////////////////////////////////////////////////////render

  return (
    <div className={styles.container}>

    <form onSubmit={SubmitHandeler} className={styles.formContainer}>

        <h2 className={styles.header} >Login</h2>

       

        <div className={styles.formField}>
        <label>Email</label>
        <input 
        className={(errors.Email && touched.Email) ? styles.uncompleted : styles.formInput}
        type="text" name='Email' value={data.Email} onChange={changeHandeler} onFocus={focusHandeler}/>
        {(errors.Email && touched.Email) && <span>{errors.Email}</span>}
        </div>

        <div className={styles.formField}>
        <label>Password</label>
        <input
        className={(errors.Password && touched.Password) ? styles.uncompleted : styles.formInput}
        type="password" name='Password' value={data.Password} onChange={changeHandeler} onFocus={focusHandeler}/>
        {(errors.Password && touched.Password) && <span>{errors.Password}</span>}
        </div>

        <div className={styles.formButtons}>

            <Link to = "/SignUp" >Sign Up</Link >
            <button type="submit">Login</button>
        </div>


    </form>
    <ToastContainer />
    </div>
  )
}
