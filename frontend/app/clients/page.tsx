"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import ClientTable from "../../components/ClientTable";

import {
  fetchClientsApi,
} from "../../services/api";

export default function ClientsPage() {
  const [clients, setClients] =
    useState([]);

  const fetchData = async () => {
    const data =
      await fetchClientsApi();

    setClients(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1>Clients</h1>

        <ClientTable
          clients={clients}
        />
      </div>
    </div>
  );
}