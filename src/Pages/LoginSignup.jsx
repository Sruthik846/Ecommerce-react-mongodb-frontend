import React, { useState } from 'react'

const LoginSignup = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const onchangeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async() =>{
    console.log("Login function excecuted",formData);
    let responseData ;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if (responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  const signup = async() =>{
    console.log("signup function excecuted",formData);
    let responseData ;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if (responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      alert("Successfuly registered!");
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }
  return (
    <div className='bg-purple-100 text-[14px]'>
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center py-6 px-4">
        <div className="max-w-md w-full py-8 px-6 rounded bg-white">
      <div className='text-left mb-4'>
        <h1 className='text-2xl font-bold text-gray-700'>{state}</h1>
      </div>

      <div className='flex flex-col gap-4 mb-4'>
        {state === "Sign Up"? <input type="text" name='username' value={formData.username} onChange={onchangeHandler} placeholder='Your Name' className='border border-gray-100 p-2 px-2' />: <></>}
        <input type="text"name='email' value={formData.email} onChange={onchangeHandler} placeholder='Email Address' className='border border-gray-100 p-2 px-2' />
        <input type="password" name='password' value={formData.password} onChange={onchangeHandler} placeholder='password' className='border border-gray-100 p-2 px-2'/>
      </div>
      <button onClick={()=>{state === 'Login'?login():signup()}} className='w-full bg-red-500 text-white p-2 mb-4'>Continue</button>
      {state === "Sign Up"? <p className='mb-4'>Already have an account? <span className='text-red-500 cursor-pointer' onClick={()=>{setState("Login")}}>Login here</span></p> : <p className='mb-4'>Create an account? <span onClick={()=>{setState("Sign Up")}} className='text-red-500 cursor-pointer'>Click here</span></p>}
      
      
      <div className='flex gap-2'>
        <input type="checkbox" name='' id='' />
        <p className='text-[14px]'>By continuing, i agree to the terms of use & privacy policy</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default LoginSignup 