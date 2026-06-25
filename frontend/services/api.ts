const BASE_URL = "http://localhost:5000";

export const fetchLeadsApi = async()=> (await fetch(`${BASE_URL}/leads`)).json();
export const updateLeadApi = async(id:number,status:string)=>fetch(`${BASE_URL}/update-lead-status/${id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status})});
export const deleteLeadApi = async(id:number)=>fetch(`${BASE_URL}/delete-lead/${id}`,{method:"DELETE"});
export const convertClientApi = async(id:number)=>fetch(`${BASE_URL}/convert-client/${id}`,{method:"POST"});
export const fetchClientsApi = async()=> (await fetch(`${BASE_URL}/clients`)).json();
export const addProjectApi = async(data:any)=>fetch(`${BASE_URL}/add-project`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
export const fetchProjectsApi = async()=> (await fetch(`${BASE_URL}/projects`)).json();
export const createInvoiceApi = async(data:any)=>fetch(`${BASE_URL}/create-invoice`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
export const fetchInvoicesApi = async()=> (await fetch(`${BASE_URL}/invoices`)).json();
export const createProposalApi = async(data:any)=>fetch(`${BASE_URL}/create-proposal`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
export const fetchProposalsApi = async()=> (await fetch(`${BASE_URL}/proposals`)).json();

export const addPaymentApi = async(data:any)=>fetch(`${BASE_URL}/add-payment`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
});

export const fetchPaymentsApi = async()=> (await fetch(`${BASE_URL}/payments`)).json();