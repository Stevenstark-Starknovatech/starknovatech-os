export default function LeadsTable({
  leads,
  updateStatus,
  deleteLead,
}: any) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        overflowX: "auto",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#f5f5f5",
              textAlign: "left",
            }}
          >
            <th style={thStyle}>Company</th>
            <th style={thStyle}>Contact</th>
            <th style={thStyle}>Service</th>
            <th style={thStyle}>Budget</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Delete</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead: any) => (
            <tr key={lead.id}>
              <td style={tdStyle}>{lead.company_name}</td>
              <td style={tdStyle}>{lead.contact_person}</td>
              <td style={tdStyle}>{lead.service_required}</td>
              <td style={tdStyle}>₹{lead.budget}</td>

              <td style={tdStyle}>
                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(lead.id, e.target.value)
                  }
                >
                  <option>New Lead</option>
                  <option>Contacted</option>
                  <option>Negotiation</option>
                  <option>Closed</option>
                  <option>Lost</option>
                </select>
              </td>

              <td style={tdStyle}>
                <button
                  onClick={() => deleteLead(lead.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    cursor: "pointer",
                    borderRadius: "6px",
                  }}
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

const thStyle = {
  padding: "14px",
};

const tdStyle = {
  padding: "14px",
  borderBottom: "1px solid #eee",
};