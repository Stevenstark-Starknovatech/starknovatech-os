"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    phone: "",
    email: "",
    service_required: "",
    budget: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/add-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields = [
    { name: "company_name",    label: "Company Name",    placeholder: "Acme Corp",            type: "text"  },
    { name: "contact_person",  label: "Contact Person",  placeholder: "Arjun Kumar",          type: "text"  },
    { name: "phone",           label: "Phone",           placeholder: "+91 98765 43210",      type: "tel"   },
    { name: "email",           label: "Email",           placeholder: "arjun@acme.com",       type: "email" },
    { name: "service_required",label: "Service Required",placeholder: "Web Development",      type: "text"  },
    { name: "budget",          label: "Budget (₹)",      placeholder: "50000",                type: "number"},
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .snc-bg {
          min-height: 100vh;
          background: #0a0f1e;
          background-image:
            radial-gradient(ellipse 70% 50% at 50% -10%, rgba(59,130,246,0.1) 0%, transparent 60%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          padding: 40px 20px;
        }

        .snc-card {
          width: 100%;
          max-width: 480px;
        }

        /* Header */
        .snc-header {
          text-align: center;
          margin-bottom: 36px;
        }
        .snc-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border-radius: 12px;
          font-size: 20px;
          margin-bottom: 16px;
          box-shadow: 0 4px 20px rgba(59,130,246,0.3);
        }
        .snc-title {
          font-size: 20px;
          font-weight: 600;
          color: #f1f5f9;
          letter-spacing: -0.4px;
        }
        .snc-desc {
          font-size: 13px;
          color: #475569;
          margin-top: 5px;
        }

        /* Form */
        .snc-form {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
        }

        .snc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .snc-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .snc-field.full { grid-column: 1 / -1; }

        .snc-label {
          font-size: 11px;
          font-weight: 600;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.7px;
        }
        .snc-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #e2e8f0;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          padding: 11px 14px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          width: 100%;
        }
        .snc-input::placeholder { color: #334155; }
        .snc-input:focus {
          border-color: rgba(59,130,246,0.5);
          background: rgba(59,130,246,0.06);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }

        /* Submit */
        .snc-btn {
          margin-top: 24px;
          width: 100%;
          padding: 13px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(59,130,246,0.25);
        }
        .snc-btn:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 6px 28px rgba(59,130,246,0.35);
        }
        .snc-btn:active:not(:disabled) { transform: translateY(0); }
        .snc-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Success toast */
        .snc-toast {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          border-radius: 10px;
          padding: 12px 16px;
          margin-top: 16px;
          color: #34d399;
          font-size: 13px;
          font-weight: 500;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .snc-grid { grid-template-columns: 1fr; }
          .snc-field.full { grid-column: auto; }
          .snc-form { padding: 24px 20px; }
        }
      `}</style>

      <div className="snc-bg">
        <div className="snc-card">
          <div className="snc-header">
            <div className="snc-logo">⚡</div>
            <div className="snc-title">Add New Lead</div>
            <div className="snc-desc">Starknovatech CRM — capture your next opportunity</div>
          </div>

          <div className="snc-form">
            <div className="snc-grid">
              {fields.map((f) => (
                <div
                  key={f.name}
                  className={`snc-field ${f.name === "service_required" ? "full" : ""}`}
                >
                  <label className="snc-label">{f.label}</label>
                  <input
                    className="snc-input"
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={formData[f.name as keyof typeof formData]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            <button
              className="snc-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Adding Lead…" : "Submit Lead →"}
            </button>

            {submitted && (
              <div className="snc-toast">
                ✓ Lead added successfully
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}