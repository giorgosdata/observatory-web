import Link from "next/link";
import ObsShell from "@/components/ObsShell";

export default async function ObserverPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const p = (href: string) => `/${locale}${href}`;
  const isEn = locale === "en";

  return (
    <ObsShell
      title={isEn ? "Observer" : "Observer"}
      subtitle={
        isEn
          ? "A space for observation — without judgment."
          : "Χώρος παρατήρησης — χωρίς κρίση."
      }
    >
      <div style={{ opacity: 0.9, lineHeight: 1.95 }}>
        {isEn ? (
          <>
            <p>
              Write here what you consider worth observing. Keep it simple,
              clear, and grounded.
            </p>
            <p>
              Ask one question that opens awareness (not debate).
            </p>
          </>
        ) : (
          <>
            <p>
              Γράψε εδώ αυτό που θεωρείς άξιο παρατήρησης. Απλά, καθαρά, χωρίς
              “στόλισμα”.
            </p>
            <p>
              Πρόσθεσε μία ερώτηση που ανοίγει επίγνωση (όχι debate).
            </p>
          </>
        )}
      </div>

      <div className="obsLinkRow">
        <Link className="obsBtn" href={p("/arthra")}>
          {isEn ? "Articles →" : "Άρθρα →"}
        </Link>
        <Link className="obsBtn" href={p("/epikoinonia")}>
          {isEn ? "Contact →" : "Επικοινωνία →"}
        </Link>
      </div>
    </ObsShell>
  );
}
