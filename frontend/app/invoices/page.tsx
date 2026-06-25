"use client";

import { useEffect,useState } from "react";
import Sidebar from "../../components/Sidebar";

import {
fetchInvoicesApi,
addPaymentApi
} from "../../services/api";

export default function InvoicePage(){

const [invoices,setInvoices]=useState([]);

const load=async()=>{
const data=await fetchInvoicesApi();
setInvoices(data);
};

useEffect(()=>{
load();
},[]);

const downloadPdf=(id:number)=>{
window.open(`http://localhost:5000/invoice-pdf/${id}`);
};

const addPayment=async(invoice:any)=>{
const paid_amount=prompt("Paid Amount");

await addPaymentApi({
invoice_id:invoice.id,
client_name:invoice.client_name,
total_amount:invoice.amount,
paid_amount
});

alert("Payment Added");
};

return(
<div style={{display:"flex"}}>

<Sidebar />

<div style={{flex:1,padding:"40px"}}>

<h1>Invoices</h1>

<table style={{width:"100%"}}>

<thead>
<tr>
<th>Client</th>
<th>Amount</th>
<th>PDF</th>
<th>Payment</th>
</tr>
</thead>

<tbody>

{invoices.map((invoice:any)=>(
<tr key={invoice.id}>

<td>{invoice.client_name}</td>

<td>₹{invoice.amount}</td>

<td>
<button onClick={()=>downloadPdf(invoice.id)}>
PDF
</button>
</td>

<td>
<button onClick={()=>addPayment(invoice)}>
Add Payment
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