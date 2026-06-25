"use client";

import { useEffect, useState } from "react";
import DashboardCards from "../../components/DashboardCards";
import LeadsTable from "../../components/LeadsTable";
import Sidebar from "../../components/Sidebar";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);

  const fetchLeads = async () => {
    const response = await fetch("http://localhost:5000/leads");
    const data = await response.json();
    setLeads(data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    await fetch(`http://localhost:5000/update-lead-status/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    fetchLeads();
  };

  const deleteLead = async (id: number) => {
    if (!confirm("Delete this lead?")) return;

    await fetch(`http://localhost:5000/delete-lead/${id}`, {
      method: "DELETE",
    });

    fetchLeads();
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
          background: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            fontSize: "34px",
            color: "#111",
          }}
        >
          CRM Dashboard
        </h1>

        <DashboardCards leads={leads} />

        <LeadsTable
          leads={leads}
          updateStatus={updateStatus}
          deleteLead={deleteLead}
        />
      </div>
    </div>
  );
}