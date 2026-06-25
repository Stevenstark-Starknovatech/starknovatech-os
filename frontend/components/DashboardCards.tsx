import { Lead } from "../types/lead";

export default function DashboardCards({
  leads,
}: {
  leads: Lead[];
}) {
  const totalLeads = leads.length;

  const closedDeals = leads.filter(
    (lead) => lead.status === "Closed"
  ).length;

  const revenuePipeline = leads.reduce(
    (total, lead) => total + lead.budget,
    0
  );

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <Card title="Total Leads" value={totalLeads} />
      <Card title="Closed Deals" value={closedDeals} />
      <Card
        title="Revenue"
        value={`₹${revenuePipeline}`}
      />
    </div>
  );
}

function Card({
  title,
  value,
}: any) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        width: "220px",
        borderRadius: "10px",
      }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}