import {React, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUP = ()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collecData = async ()=>{
        // console.log(name,email,password)
        let result = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
    });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result.result));
        localStorage.setItem('token',JSON.stringify(result.auth));
        
            navigate("/");
        
    }

    return (
        <div className="Signup-box">
            <h1>This is signup Page</h1>
            <input className="input-field" 
            value={name}
            onChange={(event)=>setName(event.target.value)} 
            type="text" placeholder="Enter Name" />
            <input className="input-field" 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            type="email" placeholder="Enter Email" />
            <input className="input-field" 
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            type="password" placeholder="Password" />
            <button 
            onClick={collecData}
            className="Signup-button" type="button">Signup</button>
        
        </div>
    )

}

export default SignUP;