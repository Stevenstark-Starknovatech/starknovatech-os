export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h2>STARKNOVATECH</h2>

      <a
        href="/leads"
        style={linkStyle}
      >
        Leads
      </a>

      <a
        href="/clients"
        style={linkStyle}
      >
        Clients
      </a>
    </div>
  );
}

const linkStyle = {
  display: "block",
  color: "white",
  marginTop: "20px",
  textDecoration: "none",
};