"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";

import {
  fetchProjectsApi,
} from "../../services/api";

export default function ProjectsPage() {
  const [projects, setProjects] =
    useState([]);

  const load = async () => {
    const data =
      await fetchProjectsApi();

    setProjects(data);
  };

  useEffect(() => {
    load();
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
        <h1>Projects</h1>

        <table
          style={{
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th>Client</th>
              <th>Project</th>
              <th>Assigned</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {projects.map(
              (project: any) => (
                <tr
                  key={project.id}
                >
                  <td>
                    {
                      project.client_name
                    }
                  </td>
                  <td>
                    {
                      project.project_name
                    }
                  </td>
                  <td>
                    {
                      project.assigned_to
                    }
                  </td>
                  <td>
                    {
                      project.deadline
                    }
                  </td>
                  <td>
                    {
                      project.status
                    }
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}