import Image from "next/image";
import { useParams } from "next/navigation";

export default function AboutPage() {
  const { locale } = useParams<{ locale: string }>();
  const isEn = locale === "en";

  return (
    <main>
      <section style={{ paddingTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={56}
            height={56}
            style={{ borderRadius: 12, display: "block" }}
          />

          <div>
            <h1 style={{ margin: 0 }}>{isEn ? "About" : "Σχετικά"}</h1>
            <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.9 }}>
              {isEn
                ? "A few words about this space and its intention."
                : "Λίγα λόγια για τον χώρο και την πρόθεση."}
            </p>
          </div>
        </div>

        <section className="article" style={{ marginTop: 18 }}>
          <p>
            {isEn ? "Write your content here…" : "Εδώ γράφεις το κείμενό σου…"}
          </p>
        </section>
      </section>
<div
  style={{
    marginTop: 70,
    paddingTop: 28,
    borderTop: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    justifyContent: "center",
  }}
>
  <Image
    src="/logo.jpg"
    alt="Logo"
    width={140}
    height={140}
    style={{ borderRadius: 22, display: "block", opacity: 0.92 }}
  />
</div>

    </main>
  );
}
