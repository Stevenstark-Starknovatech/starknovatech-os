export default function DashboardCards({ leads }: any) {
  const totalLeads = leads.length;

  const closedDeals = leads.filter(
    (lead: any) => lead.status === "Closed"
  ).length;

  const revenuePipeline = leads.reduce(
    (total: number, lead: any) =>
      total + Number(lead.budget || 0),
    0
  );

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "40px",
      }}
    >
      <Card title="Total Leads" value={totalLeads} />
      <Card title="Closed Deals" value={closedDeals} />
      <Card title="Pipeline" value={`₹${revenuePipeline}`} />
    </div>
  );
}

function Card({ title, value }: any) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "30px",
        width: "250px",
        borderRadius: "18px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 30px rgba(26,90,255,0.08)",
      }}
    >
      <p style={{ color: "#666" }}>{title}</p>

      <h2
        style={{
          marginTop: "10px",
          color: "#1a5aff",
          fontSize: "30px",
        }}
      >
        {value}
      </h2>
    </div>
  );
}