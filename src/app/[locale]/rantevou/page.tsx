import ObsShell from "@/components/ObsShell";
import { sanity } from "@/lib/sanity.client";
import { APPOINTMENTS_SETTINGS } from "@/lib/sanity.queries";

export default async function AppointmentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  const settings = await sanity.fetch(APPOINTMENTS_SETTINGS);

  const enabled = Boolean(settings?.appointmentsEnabled);
  const embedUrl: string | undefined = settings?.appointmentsEmbedUrl;

  if (!enabled) {
    return (
      <ObsShell
        title={isEn ? "Appointments" : "Ραντεβού"}
        subtitle={isEn ? "Temporarily closed." : "Προσωρινά κλειστό."}
      >
        <div style={{ opacity: 0.85, lineHeight: 1.9 }}>
          {isEn ? "Please check back later." : "Δοκίμασε ξανά αργότερα."}
        </div>
      </ObsShell>
    );
  }

  return (
    <ObsShell
      title={isEn ? "Appointments" : "Ραντεβού"}
      subtitle={isEn ? "Pick an available slot from the calendar." : "Επίλεξε διαθέσιμη ώρα από το ημερολόγιο."}
    >
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Appointments"
          style={{ width: "100%", height: 820, border: "none", borderRadius: 16 }}
          loading="lazy"
        />
      ) : (
        <div style={{ padding: 6, opacity: 0.85, lineHeight: 1.9 }}>
          {isEn
            ? "Appointments are enabled, but no embed URL is set yet."
            : "Το σύστημα ραντεβού είναι ενεργό, αλλά δεν έχει οριστεί ακόμα link embed."}
        </div>
      )}
    </ObsShell>
  );
}
