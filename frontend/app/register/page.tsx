"use client";

import { useState } from "react";

export default function RegisterPage(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const register=async()=>{

await fetch(
"http://localhost:5000/register",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
password,
role:"admin"
})
}
);

alert("Registered");
};

return(

<div style={{
padding:"100px"
}}>

<h1>Register</h1>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

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

<button onClick={register}>
Register
</button>

</div>

);

}