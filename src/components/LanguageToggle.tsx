"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "el" | "en";

export default function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;

  // βγάζουμε το πρώτο segment (el/en) και κρατάμε το υπόλοιπο path
  const rest = pathname.replace(/^\/(el|en)(?=\/|$)/, "") || "";
  const nextLocale: Locale = locale === "en" ? "el" : "en";

  const href = `/${nextLocale}${rest}`;

  return (
    <Link
      href={href}
      style={{
        fontSize: 13,
        opacity: 0.9,
        border: "1px solid rgba(255,255,255,0.14)",
        padding: "6px 10px",
        borderRadius: 10,
        textDecoration: "none",
        color: "inherit",
      }}
      aria-label="Switch language"
    >
      {locale === "en" ? "Ελληνικά" : "English"}
    </Link>
  );
}
