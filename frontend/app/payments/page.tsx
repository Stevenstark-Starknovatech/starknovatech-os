"use client";

import { useEffect,useState } from "react";
import Sidebar from "../../components/Sidebar";

import {
fetchPaymentsApi
} from "../../services/api";

export default function PaymentsPage(){

const [payments,setPayments]=useState([]);

const load=async()=>{
const data=await fetchPaymentsApi();
setPayments(data);
};

useEffect(()=>{
load();
},[]);

return(
<div style={{display:"flex"}}>

<Sidebar />

<div style={{flex:1,padding:"40px"}}>

<h1>Payments</h1>

<table style={{width:"100%"}}>

<thead>
<tr>
<th>Client</th>
<th>Total</th>
<th>Paid</th>
<th>Pending</th>
</tr>
</thead>

<tbody>

{payments.map((payment:any)=>(
<tr key={payment.id}>

<td>{payment.client_name}</td>

<td>₹{payment.total_amount}</td>

<td>₹{payment.paid_amount}</td>

<td>₹{payment.pending_amount}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>
);

}