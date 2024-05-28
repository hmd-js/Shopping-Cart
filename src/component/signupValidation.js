

export default function signupValidation(data, type) {
    
    const errors = {}
  
    ////////////////////////////////////////////email
    if (!data.Email){
        errors.Email="Email required"
    }
    else if(!/\S+@\S+\.\S+/.test(data.Email)){
        errors.Email= "Email invalid"
    }
    else delete errors.Email
    ////////////////////////////////////////////password
    if (!data.Password){
        errors.Password= "password required"
    }
    else if (data.Password.length<6){
        errors.Password="Password need to be 6 character or more"
    }
    else delete errors.Password
   
///////////////////////////////////////////////////////////////

    if(type=== "SignUp"){

            ///////////////////////////////////////////////name
            if (!data.name.trim()){
                errors.name = "Username required"
            }
            else {
                delete errors.name
            }
            
            ////////////////////////////////////////////confirm password
            if (!data.ConfirmPassword){
                errors.ConfirmPassword="confirm the password "
            }
            else if (data.ConfirmPassword !== data.Password){
                errors.ConfirmPassword="password do not match"
            }
            else delete errors.ConfirmPassword
            ///////////////////////////////////////// is accepted
            if(data.isAccepted){
            delete errors.isAccepted
            }
            else{
                errors.isAccepted="Accept our regulations"
            }

    }

    return errors

}
