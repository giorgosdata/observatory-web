import Link from "next/link";
import ObsShell from "@/components/ObsShell";

export default async function OraclePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const p = (href: string) => `/${locale}${href}`;
  const isEn = locale === "en";

  return (
    <ObsShell
      title={isEn ? "The Oracle" : "The Oracle"}
      subtitle={
        isEn
          ? "Not certainty — a mirror of now."
          : "Όχι βεβαιότητα — καθρέφτης του τώρα."
      }
    >
      <div style={{ opacity: 0.9, lineHeight: 1.95 }}>
        {isEn ? (
          <p>
            Here you can publish hypotheses about the future — as observation, not prophecy.
          </p>
        ) : (
          <p>
            Εδώ γράφεις υποθέσεις για το μέλλον — σαν παρατήρηση, όχι “προφητεία”.
          </p>
        )}
      </div>

      <div className="obsLinkRow">
        <Link className="obsBtn" href={p("/simeioseis")}>
          {isEn ? "Notes →" : "Σημειώσεις →"}
        </Link>
        <Link className="obsBtn" href={p("/rantevou")}>
          {isEn ? "Appointments →" : "Ραντεβού →"}
        </Link>
      </div>
    </ObsShell>
  );
}
