"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company: "" }),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("ok");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Αποτυχία αποστολής. Δοκίμασε ξανά.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Αποτυχία σύνδεσης. Δοκίμασε ξανά.");
    }
  }

  return (
    <>
      <p style={{ opacity: 0.85, lineHeight: 1.9, maxWidth: 720 }}>
        {isEn
          ? "Fill in the details and send your message."
          : "Συμπλήρωσε τα στοιχεία και στείλε το μήνυμά σου."}
      </p>

      {status === "ok" ? (
        <p style={{ marginTop: 18, color: "#6ee7b7" }}>
          {isEn ? "✓ Your message was sent. Thank you!" : "✓ Το μήνυμά σου στάλθηκε. Σε ευχαριστώ!"}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <section className="article" style={{ marginTop: 18 }}>
            <label style={labelStyle}>
              {isEn ? "Name" : "Όνομα"}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                placeholder={isEn ? "e.g. George" : "π.χ. Γιώργος"}
                required
                minLength={2}
                disabled={status === "sending"}
              />
            </label>

            <label style={labelStyle}>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="e.g. example@mail.com"
                required
                disabled={status === "sending"}
              />
            </label>

            <label style={labelStyle}>
              {isEn ? "Message" : "Μήνυμα"}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ ...inputStyle, resize: "vertical" as const }}
                rows={7}
                placeholder={isEn ? "Write your message..." : "Γράψε το μήνυμά σου..."}
                required
                minLength={10}
                disabled={status === "sending"}
              />
            </label>

            {status === "error" && (
              <p style={{ color: "#fca5a5", fontSize: 13, marginBottom: 10 }}>
                {errorMsg || (isEn ? "Send failed. Try again." : "Αποτυχία αποστολής. Δοκίμασε ξανά.")}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "transparent",
                color: "inherit",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                opacity: status === "sending" ? 0.6 : 1,
              }}
            >
              {status === "sending"
                ? (isEn ? "Sending..." : "Αποστολή...")
                : (isEn ? "Send" : "Αποστολή")}
            </button>
          </section>
        </form>
      )}
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 10,
  opacity: 0.85,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 6,
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.10)",
  background: "#121212",
  color: "inherit",
  outline: "none",
};
