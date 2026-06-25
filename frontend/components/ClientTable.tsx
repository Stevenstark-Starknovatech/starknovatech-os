import {
  addProjectApi,
  createInvoiceApi,
  createProposalApi,
} from "../services/api";

export default function ClientTable({
  clients,
}: any) {

  const createProject = async (client:any)=>{
    const project_name=prompt("Project Name");
    const assigned_to=prompt("Assign To");
    const deadline=prompt("Deadline");

    await addProjectApi({
      client_id:client.id,
      client_name:client.company_name,
      project_name,
      assigned_to,
      deadline,
    });
  };

  const createInvoice = async (client:any)=>{
    const amount=prompt("Amount");

    await createInvoiceApi({
      client_id:client.id,
      client_name:client.company_name,
      amount,
    });
  };

  const createProposal = async (client:any)=>{
    const service=prompt("Service");
    const price=prompt("Price");
    const timeline=prompt("Timeline");

    await createProposalApi({
      client_id:client.id,
      client_name:client.company_name,
      service,
      price,
      timeline,
    });
  };

  return (
    <table style={{width:"100%"}}>
      <thead>
        <tr>
          <th>Company</th>
          <th>Project</th>
          <th>Invoice</th>
          <th>Proposal</th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client:any)=>(
          <tr key={client.id}>
            <td>{client.company_name}</td>

            <td><button onClick={()=>createProject(client)}>Project</button></td>

            <td><button onClick={()=>createInvoice(client)}>Invoice</button></td>

            <td><button onClick={()=>createProposal(client)}>Proposal</button></td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}