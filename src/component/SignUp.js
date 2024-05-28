import React, { useEffect, useState } from 'react'
import styles from "./SignUp.module.css"

import signupValidation from './signupValidation'

import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function SignUp() {

/////////////////////////////////////////////////////////////////////////////////////////////states
    const [data, setData] = useState({
        name: '',
        Email: '',
        Password: '',
        ConfirmPassword:'', 
        isAccepted:false
    })

    const [errors , setErrors]= useState({})
    const [touched , setTouched]= useState({})



   ////////////////////////////////////////// ///////////////////////////////////////////////functions

    const changeHandeler= (event) =>{
        if (event.target.name === "isAccepted"){
            setData({...data , [event.target.name]: event.target.checked})
        }
        else {
            setData({...data, [event.target.name]:event.target.value})
        }
        console.log(data);
    }

/////////////////////////////////////////
    useEffect(()=>{
        setErrors(signupValidation(data, "SignUp"))
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
            name: true,
            Email: true,
            Password: true, 
            ConfirmPassword:true, 
            isAccepted:true
        })

    }
}

///////////////////////////////////
const notify= (type)=> {
    if (type==="success")
    toast.success("You signed up successfully")
    else{toast.error("Invalid data!")}

}

///////////////////////////////////////////////////////////////////////////render

  return (
    <div className={styles.container}>

    <form onSubmit={SubmitHandeler} className={styles.formContainer}>

        <h2 className={styles.header} >SignUp</h2>

        <div className={styles.formField}>
        <label>Name</label>
        <input
        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
        type='text' name='name' value={data.name} onChange={changeHandeler} onFocus={focusHandeler}/>
        {(errors.name && touched.name) &&  <span>{errors.name}</span>}
        </div>

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

        <div className={styles.formField}>
        <label>Confirm Password</label>
        <input
        className={(errors.ConfirmPassword && touched.ConfirmPassword) ? styles.uncompleted : styles.formInput}
        type="password" name='ConfirmPassword' value={data.ConfirmPassword} onChange={changeHandeler} onFocus={focusHandeler}/>
        {(errors.ConfirmPassword && touched.ConfirmPassword) && <span>{errors.ConfirmPassword}</span>}
        </div>

        <div className={`${styles.formField}`}>
                <div className={styles.checkBoxContainer}>
                    <label>I Accept all privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandeler} onFocus={focusHandeler}/>
                </div>

            {(errors.isAccepted && touched.isAccepted) && <span>{errors.isAccepted}</span>}
        </div>

        <div className={styles.formButtons}>
            <Link to = "/Login" >Login</Link >
            <button type="submit">Sign Up</button>
        </div>


    </form>
    <ToastContainer />
    </div>
  )
}
