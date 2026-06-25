import {
  addProjectApi,
  createInvoiceApi,
} from "../services/api";

export default function ClientTable({
  clients,
}: any) {
  const createProject = async (
    client: any
  ) => {
    const project_name =
      prompt("Project Name");

    const assigned_to =
      prompt("Assign To");

    const deadline =
      prompt("Deadline");

    await addProjectApi({
      client_id: client.id,
      client_name:
        client.company_name,
      project_name,
      assigned_to,
      deadline,
    });

    alert("Project Created");
  };

  const createInvoice = async (
    client: any
  ) => {
    const amount =
      prompt("Invoice Amount");

    await createInvoiceApi({
      client_id: client.id,
      client_name:
        client.company_name,
      amount,
    });

    alert("Invoice Created");
  };

  return (
    <table style={{width:"100%"}}>
      <thead>
        <tr>
          <th>Company</th>
          <th>Project</th>
          <th>Invoice</th>
        </tr>
      </thead>

      <tbody>
        {clients.map(
          (client:any)=>(
            <tr key={client.id}>
              <td>{client.company_name}</td>

              <td>
                <button onClick={()=>createProject(client)}>
                  Project
                </button>
              </td>

              <td>
                <button onClick={()=>createInvoice(client)}>
                  Invoice
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}