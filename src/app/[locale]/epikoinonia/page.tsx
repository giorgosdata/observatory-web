import ContactForm from "./ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <main>
      <h1>{isEn ? "Contact" : "Επικοινωνία"}</h1>
      <ContactForm locale={locale} />
    </main>
  );
}
