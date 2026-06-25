"use client";

import { useState } from "react";

export default function LoginPage(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login=async()=>{

const response=await fetch(
"http://localhost:5000/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
}
);

const data=await response.json();

localStorage.setItem(
"token",
data.token
);

localStorage.setItem(
"role",
data.role
);

alert("Login Success");

window.location.href="/leads";
};

return(

<div style={{padding:"100px"}}>

<h1>Login</h1>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<input
placeholder="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={login}>
Login
</button>

</div>
);

}