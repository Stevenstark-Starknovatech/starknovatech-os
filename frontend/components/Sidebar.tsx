export default function Sidebar() {

 const logout=()=>{

  localStorage.removeItem(
   "token"
  );

  window.location.href=
   "/login";
 };

 return (
  <div style={{
   width:"220px",
   background:"#111827",
   color:"white",
   minHeight:"100vh",
   padding:"30px"
  }}>

   <h2>STARKNOVATECH</h2>

   <a href="/leads" style={linkStyle}>Leads</a>
   <a href="/clients" style={linkStyle}>Clients</a>
   <a href="/projects" style={linkStyle}>Projects</a>
   <a href="/invoices" style={linkStyle}>Invoices</a>
   <a href="/proposals" style={linkStyle}>Proposals</a>
   <a href="/payments" style={linkStyle}>Payments</a>

   <br/><br/>

   <button onClick={logout}>
    Logout
   </button>

  </div>
 );
}

const linkStyle={
 display:"block",
 color:"white",
 marginTop:"20px",
 textDecoration:"none",
};