export default function SearchFilter({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}: any) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <input
        placeholder="Search Company..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
        style={{
          padding: "12px",
          borderRadius: "8px",
        }}
      >
        <option value="All">All Status</option>
        <option value="New Lead">New Lead</option>
        <option value="Contacted">Contacted</option>
        <option value="Negotiation">Negotiation</option>
        <option value="Closed">Closed</option>
        <option value="Lost">Lost</option>
      </select>
    </div>
  );
}