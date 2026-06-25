"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "../../components/Sidebar";
import DashboardCards from "../../components/DashboardCards";
import LeadsTable from "../../components/LeadsTable";
import SearchFilter from "../../components/SearchFilter";

import {
  fetchLeadsApi,
  updateLeadApi,
  deleteLeadApi,
  convertClientApi,
} from "../../services/api";

export default function LeadsPage() {
  const router = useRouter();

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");

  const role =
    typeof window !== "undefined"
      ? localStorage.getItem("role")
      : "";

  useEffect(() => {
    if (role === "employee") {
      router.push("/projects");
      return;
    }

    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchLeadsApi();
    setLeads(data);
  };

  const updateStatus = async (
    id: number,
    status: string
  ) => {
    await updateLeadApi(id, status);
    fetchData();
  };

  const deleteLead = async (id: number) => {
    await deleteLeadApi(id);
    fetchData();
  };

  const convertLead = async (id: number) => {
    await convertClientApi(id);
    fetchData();
  };

  const filteredLeads = leads.filter(
    (lead: any) => {
      const matchesSearch =
        lead.company_name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All"
          ? true
          : lead.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    }
  );

  return (
    <div
      style={{
        display: "flex",
        background: "#f3f4f6",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1>Leads</h1>

        <DashboardCards leads={leads} />

        <SearchFilter
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <LeadsTable
          leads={filteredLeads}
          updateStatus={updateStatus}
          deleteLead={deleteLead}
          convertLead={convertLead}
        />
      </div>
    </div>
  );
}