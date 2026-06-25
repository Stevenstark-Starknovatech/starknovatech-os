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

      <div style={menuStyle}>Dashboard</div>
      <div style={menuStyle}>Leads</div>
      <div style={menuStyle}>Clients</div>
      <div style={menuStyle}>Invoices</div>
      <div style={menuStyle}>Payments</div>
      <div style={menuStyle}>Settings</div>
    </div>
  );
}

const menuStyle = {
  marginBottom: "20px",
  cursor: "pointer",
  fontSize: "16px",
};