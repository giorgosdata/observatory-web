export default function NotFound() {
  return (
    <main style={{ paddingTop: 60 }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Δεν βρέθηκε</h1>

      <p style={{ opacity: 0.85, lineHeight: 1.9, maxWidth: 620 }}>
        Η σελίδα που αναζητάς δεν υπάρχει ή έχει μετακινηθεί.
      </p>

      <p style={{ marginTop: 18, opacity: 0.8 }}>
        <a
          href="/"
          style={{
            textDecoration: "underline",
            textUnderlineOffset: 4,
          }}
        >
          Επιστροφή στην αρχική
        </a>
      </p>
    </main>
  );
}
