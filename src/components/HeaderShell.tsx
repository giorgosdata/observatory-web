"use client";

import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

type Locale = "el" | "en";

export default function HeaderShell({
  locale,
  appointmentsEnabled,
}: {
  locale: Locale;
  appointmentsEnabled?: boolean;
}) {
  const p = (href: string) => `/${locale}${href}`;

  const t = {
    el: {
      observer: "Observer",
      oracle: "The Oracle",
      articles: "Άρθρα",
      // notes: "Σημειώσεις",
      appointments: "Ραντεβού",
      contact: "Επικοινωνία",
    },
    en: {
      observer: "Observer",
      oracle: "The Oracle",
      articles: "Articles",
      // notes: "Notes",
      appointments: "Appointments",
      contact: "Contact",
    },
  }[locale];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="nav-inner" style={{ height: 64, margin: "0 auto" }}>
        {/* LEFT */}
        <div className="nav-left">
          <Link href={p("/")}>
            <img
              src="/logo.jpg"
              width={34}
              height={34}
              alt="Logo"
              style={{ borderRadius: 10, border: "1px solid rgba(255,255,255,0.10)" }}
            />
          </Link>
        </div>

        {/* CENTER */}
        <nav className="menu" style={{ display: "flex", gap: 18, justifyContent: "center" }}>
          <Link href={p("/observer")}>{t.observer}</Link>
          <Link href={p("/oracle")}>{t.oracle}</Link>
          <Link href={p("/arthra")}>{t.articles}</Link>
          {/* <Link href={p("/simeioseis")}>{t.notes}</Link> */}
          {appointmentsEnabled ? <Link href={p("/rantevou")}>{t.appointments}</Link> : null}
          <Link href={p("/epikoinonia")}>{t.contact}</Link>
        </nav>

        {/* RIGHT */}
        <div className="nav-right" style={{ display: "flex", justifyContent: "end" }}>
          <LanguageToggle locale={locale} />
        </div>
      </div>
    </header>
  );
}
