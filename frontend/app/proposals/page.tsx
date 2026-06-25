"use client";

import { useEffect,useState } from "react";

import Sidebar from "../../components/Sidebar";

import {
fetchProposalsApi
} from "../../services/api";

export default function ProposalPage(){

const [proposals,setProposals]=useState([]);

const load=async()=>{
const data=await fetchProposalsApi();
setProposals(data);
};

useEffect(()=>{
load();
},[]);

const downloadPdf=(id:number)=>{
window.open(`http://localhost:5000/proposal-pdf/${id}`);
};

return(
<div style={{display:"flex"}}>

<Sidebar />

<div style={{flex:1,padding:"40px"}}>

<h1>Proposals</h1>

<table style={{width:"100%"}}>

<thead>
<tr>
<th>Client</th>
<th>Proposal No</th>
<th>PDF</th>
</tr>
</thead>

<tbody>

{proposals.map((proposal:any)=>(
<tr key={proposal.id}>

<td>{proposal.client_name}</td>

<td>{proposal.proposal_number}</td>

<td>
<button onClick={()=>downloadPdf(proposal.id)}>
Download PDF
</button>
</td>

</tr>
))}

</tbody>

</table>

</div>

</div>
);

}