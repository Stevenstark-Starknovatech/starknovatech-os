"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login = async()=>{

const { error } =
await supabase.auth.signInWithPassword({
email,
password
});

if(error){
alert(error.message);
return;
}

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
type="password"
placeholder="Password"
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