"use client";

import { useState } from "react";

export default function RegisterPage(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [role,setRole]=useState("admin");

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
role
})
}
);

alert("Registered");

window.location.href =
"/login";

};

return(

<div style={{padding:"100px"}}>

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

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option>admin</option>
<option>employee</option>

</select>

<br/><br/>

<button onClick={register}>
Register
</button>

</div>

);

}