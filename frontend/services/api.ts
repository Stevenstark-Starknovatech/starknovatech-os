const BASE_URL = "http://localhost:5000";

export const fetchLeadsApi = async () => {
  const response = await fetch(
    `${BASE_URL}/leads`
  );
  return response.json();
};

export const updateLeadApi = async (
  id: number,
  status: string
) => {
  await fetch(
    `${BASE_URL}/update-lead-status/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }
  );
};

export const deleteLeadApi = async (
  id: number
) => {
  await fetch(
    `${BASE_URL}/delete-lead/${id}`,
    {
      method: "DELETE",
    }
  );
};

export const convertClientApi = async (
  id: number
) => {
  await fetch(
    `${BASE_URL}/convert-client/${id}`,
    {
      method: "POST",
    }
  );
};

export const fetchClientsApi =
  async () => {
    const response = await fetch(
      `${BASE_URL}/clients`
    );
    return response.json();
  };