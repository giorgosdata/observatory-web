"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main style={{ padding: "72px 18px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Κάτι πήγε στραβά</h1>
      <p style={{ opacity: 0.75, lineHeight: 1.8, marginBottom: 24 }}>
        Παρουσιάστηκε σφάλμα κατά τη φόρτωση της σελίδας. Δοκίμασε ξανά.
      </p>
      <button
        onClick={reset}
        style={{
          padding: "10px 18px",
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
          fontSize: 14,
        }}
      >
        Δοκίμασε ξανά
      </button>
    </main>
  );
}
