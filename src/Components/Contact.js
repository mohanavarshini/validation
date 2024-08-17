import {useState} from 'react';
import Swal from 'sweetalert2'
import './style.css'

function Contact() {

  const [email,SetEmail] = useState("");
  const [emailError,SetEmailError] = useState(false);
  const [validEmailError,SetValidEmailError] = useState(false);

  const [name,SetName] = useState("");
  const [nameError,SetNameError] = useState(false);
  const [validNameError,SetValidNameError] = useState(false);

  const [password,SetPassword] = useState("");
  const [pwdError,SetPwdError] = useState(false);
  const [validPwdError,SetValidPwdError] = useState(false);

  const [phno,SetPhno] = useState("");
  const [phnoError,SetPhnoError] = useState(false);
  const [validPhnoError,SetValidPhnoError] = useState(false);


  const validateForm =() => {

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Validated and Registred successfully"
    });

    
    let userEmail = email;
    let emailFormat = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(userEmail) {
      if(userEmail.match(emailFormat)){
        SetValidEmailError(false)
      } else {
        SetValidEmailError(true)
      }
      SetEmailError(false)
    } else {
      SetEmailError(true)
    }
    console.log('--user email--',userEmail);

    let userName = name;
    if(userName){
      if(userName.length>=3){
        SetValidNameError(false)
      } else {
        SetValidNameError(true)
      }
      SetNameError(false)
    } else {
      SetNameError(true)
    }   
    console.log('--user name--',userName);

    let userPassword = password;
    let pwdFormat = "^(?=.*[0-9])"
    + "(?=.*[a-z])(?=.*[A-Z])"
    + "(?=.*[@#$%^&+=])"
    + "(?=\\S+$).{8,20}$";
    if(userPassword){
      if(userPassword.match(pwdFormat)){
        SetValidPwdError(false)
      } else {
        SetValidPwdError(true)
      }
      SetPwdError(false)
    } else {
      SetPwdError(true)
    }
    console.log('---user password---',userPassword);

    let userPhno = phno;
    if(userPhno){
      if(userPhno.length==10){
        SetValidPhnoError(false)
      } else {
        SetValidPhnoError(true)
      }
      SetPhnoError(false)
    } else {
      SetPhnoError(true)
    }   
    console.log('--user phno--',userPhno);
  }  
  const handleInput =(event) => {
    const id = event.target.id;
    const value = event.target.value;
    if(id=='email') {
      SetEmail(value)
    }
    if(id == 'name'){
      SetName(value)
    }
    if(id == 'password'){
      SetPassword(value)
    }
    if(id == 'phno'){
      SetPhno(value)
    }
  }

  


  return (
    <>
    <center>
      <div>
        
        <h1>REGISTRATION FORM</h1>
      </div>
      <br/>


      <div>
        <label>FULLNAME:</label>
        <input type='text' id='name' value={name} onChange={handleInput}/>
      </div>  
      {nameError?<label style={{"color":"red"}}>FullName is required</label>:""}
      {validNameError?<label style={{"color":"red"}}>Enter a valid name</label>:""}
      
      
      <br/>
      <div>
        <label>EMAIL:</label>
        <input type="text" id='email' value={email} onChange={handleInput}/>     
      </div>   
      {emailError?<label style={{"color":"red"}}>Email is required</label>:""}
      {validEmailError?<label style={{"color":"red"}}>Enter a valid Email</label>:""}
      <br/>


      <div>
        <label>PASSWORD:</label>
        <input type='password' id='password' value={password} onChange={handleInput}/>
      </div>
      {pwdError?<label style={{"color":"red"}}>Password is required</label>:""}
      {validPwdError?<label style={{"color":"red"}}>Enter a valid Password</label>:""}
      <br/>

      <div>
        <label>PHONE NUMBER:</label>
        <input type='number' id='phno' value={phno} onChange={handleInput}/>
      </div>
      {phnoError?<label style={{"color":"red"}}>Phone number is required</label>:""}
      {validPhnoError?<label style={{"color":"red"}}>Enter a valid Phone Number</label>:""}
      <br/>


    

    
      <div>
        <input type='button' className='button' value="Validate" onClick={validateForm}/>
      </div>
    </center>
    </>
  );

  
}

export default Contact;