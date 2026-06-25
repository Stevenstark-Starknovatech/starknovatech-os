export default function ClientTable({
  clients,
}: any) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Service</th>
            <th>Project Value</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client: any) => (
            <tr key={client.id}>
              <td>{client.company_name}</td>
              <td>{client.contact_person}</td>
              <td>{client.service_taken}</td>
              <td>₹{client.project_value}</td>
              <td>{client.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}