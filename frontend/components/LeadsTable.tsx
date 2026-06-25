import { Lead } from "../types/lead";

export default function LeadsTable({
  leads,
  updateStatus,
  deleteLead,
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
            <th>Budget</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead: Lead) => (
            <tr key={lead.id}>
              <td>{lead.company_name}</td>
              <td>{lead.contact_person}</td>
              <td>{lead.service_required}</td>
              <td>₹{lead.budget}</td>

              <td>
                <select
                  value={lead.status}
                  onChange={(e) =>
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
                <button
                  onClick={() =>
                    deleteLead(lead.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}