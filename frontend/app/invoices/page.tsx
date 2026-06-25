"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  fetchInvoicesApi,
} from "../../services/api";

export default function InvoicePage() {
  const [invoices,setInvoices]=useState([]);

  const load = async()=>{
    const data=await fetchInvoicesApi();
    setInvoices(data);
  };

  useEffect(()=>{
    load();
  },[]);

  return (
    <div style={{display:"flex"}}>
      <Sidebar />

      <div style={{flex:1,padding:"40px"}}>
        <h1>Invoices</h1>

        <table style={{width:"100%"}}>
          <thead>
            <tr>
              <th>Client</th>
              <th>Invoice No</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice:any)=>(
              <tr key={invoice.id}>
                <td>{invoice.client_name}</td>
                <td>{invoice.invoice_number}</td>
                <td>₹{invoice.amount}</td>
                <td>{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}