"use client";

import { useEffect, useState } from "react";
import { Lead } from "../types/lead";

export default function LeadsTable({
 leads,
 updateStatus,
 deleteLead,
 convertLead,
}:any){

 const [role,setRole] =
 useState("");

 useEffect(()=>{

  const savedRole =
   localStorage.getItem("role");

  if(savedRole){
   setRole(savedRole);
  }

 },[]);

 return(

<div style={{
background:"white",
padding:"20px",
borderRadius:"10px"
}}>

<table style={{width:"100%"}}>

<thead>
<tr>
<th>Company</th>
<th>Status</th>
<th>Convert</th>
<th>Delete</th>
</tr>
</thead>

<tbody>

{leads.map((lead:Lead)=>(

<tr key={lead.id}>

<td>{lead.company_name}</td>

<td>

<select
value={lead.status}
onChange={(e)=>
updateStatus(
lead.id,
e.target.value
)
}
>

<option>New Lead</option>
<option>Contacted</option>
<option>Negotiation</option>
<option>Closed</option>
<option>Lost</option>

</select>

</td>

<td>

{role==="admin" ? (

<button
onClick={()=>
convertLead(lead.id)
}
>
Convert
</button>

) : null}

</td>

<td>

{role==="admin" ? (

<button
onClick={()=>
deleteLead(lead.id)
}
>
Delete
</button>

) : null}

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}