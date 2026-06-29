import type { Metadata } from "next";
import HeaderShell from "@/components/HeaderShell";
import { LangSync } from "@/components/LangSync";
import { sanity } from "@/lib/sanity.client";
import { SETTINGS } from "@/lib/sanity.queries";

type Locale = "el" | "en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    description: isEn
      ? "A space for observation, thought and awareness."
      : "Χώρος παρατήρησης, σκέψης και επίγνωσης.",
    alternates: {
      languages: {
        el: "/el",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "el";

  const settings = await sanity.fetch(SETTINGS);
  const appointmentsEnabled = settings?.appointmentsEnabled ?? false;

  return (
    <>
      <LangSync locale={locale} />
      <HeaderShell locale={locale} appointmentsEnabled={appointmentsEnabled} />
      {children}
    </>
  );
}
