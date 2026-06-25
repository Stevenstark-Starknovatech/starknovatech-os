import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        background: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "30px 20px",
      }}
    >
      <h2
        style={{
          color: "#1a5aff",
          marginBottom: "40px",
        }}
      >
        STARKNOVATECH
      </h2>

      <Link href="/leads" style={linkStyle}>Dashboard</Link>
      <Link href="/leads" style={linkStyle}>Leads</Link>
      <Link href="/clients" style={linkStyle}>Clients</Link>
      <Link href="/invoices" style={linkStyle}>Invoices</Link>
      <Link href="/payments" style={linkStyle}>Payments</Link>
      <Link href="/settings" style={linkStyle}>Settings</Link>
    </div>
  );
}

const linkStyle = {
  display: "block",
  marginBottom: "20px",
  cursor: "pointer",
  fontSize: "16px",
  color: "white",
  textDecoration: "none",
};