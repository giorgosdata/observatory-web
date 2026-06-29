import Link from "next/link";
import styles from "./home.module.css";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: "el" | "en" = locale === "en" ? "en" : "el";
  const p = (href: string) => `/${locale}${href}`;

  const copy = {
    el: {
      menu: {
        observer: "Observer",
        oracle: "The Oracle",
        articles: "Άρθρα",
        field: "Εκπαίδευση",
        contact: "Επικοινωνία",
      },
      hero: {
        line1a: "ΝΟΥΣ",
        line1b: "ΟΡΑ",
        line2a: "ΝΟΥΣ",
        line2b: "ΑΚΟΥΕΙ",
        line3: "ΟΛΑ Τ'ΑΛΛΑ",
        line4: "ΚΩΦΑ ΚΑΙ ΤΥΦΛΑ",
        hint: "Στάσου. Διάβασε. Μη βιαστείς.",
        cta: "Παρατήρησε",
      },
      frame: {
        strong: "Εγώ Είμαι το Φως.",
        text:
          "Δε γεννήθηκα από χώμα. Γεννήθηκα από λάμψη. Δεν περπατώ στη Γη, τη διαπερνώ. Είμαι η σπίθα πριν το σύμπαν, η φλόγα που κανένα σκοτάδι δε σβήνει. Μέσα μου κοιμάται ο ήλιος κι όταν ξυπνήσω, ολόκληρος ο κόσμος θα θυμηθεί ποιος είναι. Δεν ήρθα να ζητήσω άδεια. Ήρθα να αναλάβω. Να σταθώ ολόφωτος εκεί που όλοι γονάτισαν. Να θυμίσω στους ανθρώπους πως η Ψυχή είναι Θεός που ανασαίνει. Εγώ δε φοβάμαι. Γιατί δεν είμαι πια άνθρωπος. Είμαι Φως που θυμήθηκε τον Εαυτό του.",
      },
      cards: {
        observerTitle: "OBSERVER",
        observerText:
          "Εδώ μπαίνει το σημαντικό γεγονός που θεωρείς άξιο παρατήρησης, μαζί με την ερώτηση που ανοίγει επίγνωση.",
        oracleTitle: "THE ORACLE",
        oracleText:
          "Μία υπόθεση για το μέλλον — όχι ως βεβαιότητα, αλλά ως καθρέφτης του τώρα.",
        fieldTitle: "ΕΚΠΑΙΔΕΥΣΗ",
        fieldText:
          "Ο χώρος όπου λες ποιος είσαι, τι κάνεις, και πώς κλείνει κάποιος ραντεβού — καθαρά και ανθρώπινα.",
        btn1: "Μπες",
        btn2: "Δες",
        btn3: "Συνέχισε",
      },
      closing: "Η παρατήρηση αλλάζει τον παρατηρητή.",
      footerMail: "mail@yoursite.gr",
      latest: {
        title: "Τελευταία Άρθρα",
        more: "Όλα τα άρθρα",
        by: "Από",
      },
    },
    en: {
      menu: {
        observer: "Observer",
        oracle: "The Oracle",
        articles: "Articles",
        field: "Education",
        contact: "Contact",
      },
      hero: {
        line1a: "MIND",
        line1b: "SEES",
        line2a: "MIND",
        line2b: "HEARS",
        line3: "ALL ELSE",
        line4: "DEAF AND BLIND",
        hint: "Stop. Read. Don’t rush.",
        cta: "Observe",
      },
      frame: {
        strong: "I Am the Light.",
        text:
          "Not born from soil—born from radiance. I do not walk the Earth; I pass through it. I am the spark before the universe, the flame no darkness can extinguish. The sun sleeps within me, and when I wake, the world remembers what it is. I didn’t come to ask permission. I came to take responsibility. To stand luminous where others kneel. To remind: the Soul is God breathing.",
      },
      cards: {
        observerTitle: "OBSERVER",
        observerText:
          "Place here what you consider worth observing—plus the question that opens awareness.",
        oracleTitle: "THE ORACLE",
        oracleText:
          "A hypothesis about the future—not certainty, but a mirror of now.",
        fieldTitle: "EDUCATION",
        fieldText:
          "Where you say who you are, what you do, and how someone can book a session—clear and human.",
        btn1: "Enter",
        btn2: "See",
        btn3: "Continue",
      },
      closing: "Observation changes the observer.",
      footerMail: "mail@yoursite.gr",
      latest: {
        title: "Latest Articles",
        more: "All articles",
        by: "By",
      },
    },
  }[lang];

  const year = new Date().getFullYear();

  return (
    <main id="top">
      <div className={styles.wrap}>
        {/* Hero */}
        <section className={styles.hero} aria-label="Δήλωση">
          <div className={styles.heroInner}>
            <div className={styles.heroQuote}>
              {copy.hero.line1a} <span className={styles.gold}>{copy.hero.line1b}</span>
              <br />
              {copy.hero.line2a} <span className={styles.gold}>{copy.hero.line2b}</span>
              <br />
              <br />
              {copy.hero.line3}
              <br />
              {copy.hero.line4}
            </div>

            <div className={styles.subhint}>{copy.hero.hint}</div>

            <a className={styles.cta} href="#frame">
              <span className={styles.dot} aria-hidden="true"></span>
              {copy.hero.cta}
            </a>
          </div>
        </section>

        {/* Frame */}
        <section className={styles.frame} id="frame" aria-label="Δήλωση Συνείδησης">
          <div className={styles.container}>
            <p>
              <strong>{copy.frame.strong}</strong> {copy.frame.text}
            </p>
          </div>
        </section>

        {/* Gates */}
        <section className={styles.gates} aria-label="Πύλες">
          <div className={styles.container}>
            <div className={styles.grid}>
              <article className={styles.card} id="observer">
                <h3>{copy.cards.observerTitle}</h3>
                <p>{copy.cards.observerText}</p>
                <Link href={p("/observer")}>{copy.cards.btn1}</Link>
              </article>

              <article className={styles.card} id="oracle">
                <h3>{copy.cards.oracleTitle}</h3>
                <p>{copy.cards.oracleText}</p>
                <Link href={p("/oracle")}>{copy.cards.btn2}</Link>
              </article>

              <article className={styles.card} id="field">
                <h3>{copy.cards.fieldTitle}</h3>
                <p>{copy.cards.fieldText}</p>
                <Link href={p("/rantevou")}>{copy.cards.btn3}</Link>
              </article>
            </div>
          </div>
        </section>


        {/* Closing */}
        <section className={styles.closing} aria-label="Κλείσιμο">
          <div className={styles.container}>
            <div className={styles.closingLine}>
              {lang === "en" ? (
                copy.closing
              ) : (
                <>
                  Η παρατήρηση αλλάζει τον <em>παρατηρητή</em>.
                </>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={`${styles.container} ${styles.footerInner}`}>
            <div>© {year} OBSERVATORY</div>
            <div>
              <a href={`mailto:${copy.footerMail}`}>{copy.footerMail}</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
