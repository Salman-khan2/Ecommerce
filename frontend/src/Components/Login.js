import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async ()=>{
        console.log(email,password);
        let result = await fetch('http://localhost:5000/login',{
        method: 'POST',
        body: JSON.stringify({email, password }),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    });
       console.log(result);
       result = await result.json();
       
       if(result.auth){
        localStorage.setItem('user',JSON.stringify(result.user));
        localStorage.setItem('token',JSON.stringify(result.auth));
        navigate('/');
       }else{
        alert("Please Enter Correct Deatils");
       }

    }
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    }, [])

    return (
        <div className='login-box'>
            <input className="input-field" 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            type="email" placeholder="Enter Email" />
            <input className="input-field" 
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            type="password" placeholder="Password" />
            <button 
            onClick={handleLogin}
            className="Signup-button" type="button">Signup</button>
        </div>
    )
}
export default Login;