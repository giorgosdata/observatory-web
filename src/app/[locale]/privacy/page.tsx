export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  if (isEn) {
    return (
      <main style={{ maxWidth: 780, margin: "0 auto", padding: "40px 16px" }}>
        <h1 style={{ marginBottom: 32 }}>Privacy Policy</h1>

        <section className="article">
          <p style={{ opacity: 0.6, fontSize: 13, marginBottom: 32 }}>
            Last updated: June 2026
          </p>

          <h2>1. Who we are</h2>
          <p>
            OBSERVATORY is a personal website operated by Giorgos Oikonomou. For any
            privacy-related matter, you can contact us at:{" "}
            <a href="mailto:giorgosigo@gmail.com">giorgosigo@gmail.com</a>
          </p>

          <h2>2. What data we collect</h2>
          <p>
            We only collect personal data that you voluntarily provide through the
            contact form on this website:
          </p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Message content</li>
          </ul>
          <p>
            We do not use cookies, tracking scripts, analytics tools, or any
            third-party tracking services.
          </p>

          <h2>3. How we use your data</h2>
          <p>
            The data you submit via the contact form is used solely to respond to
            your inquiry. It is sent directly to our email inbox and is not stored
            in any database.
          </p>

          <h2>4. Legal basis (GDPR)</h2>
          <p>
            The processing of your personal data is based on your consent (Article 6
            paragraph 1(a) GDPR), expressed through the voluntary submission of the
            contact form.
          </p>

          <h2>5. Data retention</h2>
          <p>
            Your data is retained only for as long as necessary to respond to your
            inquiry and is not shared with any third parties.
          </p>

          <h2>6. Your rights</h2>
          <p>Under the GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw your consent at any time</li>
            <li>
              Lodge a complaint with a supervisory authority (in Greece: the{" "}
              <a
                href="https://www.dpa.gr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hellenic Data Protection Authority
              </a>
              )
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at:{" "}
            <a href="mailto:giorgosigo@gmail.com">giorgosigo@gmail.com</a>
          </p>

          <h2>7. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be reflected on this page with an updated date.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 780, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ marginBottom: 32 }}>Πολιτική Απορρήτου</h1>

      <section className="article">
        <p style={{ opacity: 0.6, fontSize: 13, marginBottom: 32 }}>
          Τελευταία ενημέρωση: Ιούνιος 2026
        </p>

        <h2>1. Ποιοι είμαστε</h2>
        <p>
          Το OBSERVATORY είναι προσωπική ιστοσελίδα που διαχειρίζεται ο Γιώργος
          Οικονόμου. Για οποιοδήποτε θέμα σχετικό με την προστασία δεδομένων,
          μπορείτε να επικοινωνήσετε μαζί μας στο:{" "}
          <a href="mailto:giorgosigo@gmail.com">giorgosigo@gmail.com</a>
        </p>

        <h2>2. Τι δεδομένα συλλέγουμε</h2>
        <p>
          Συλλέγουμε μόνο τα προσωπικά δεδομένα που παρέχετε οικειοθελώς μέσω
          της φόρμας επικοινωνίας του ιστότοπου:
        </p>
        <ul>
          <li>Ονοματεπώνυμο</li>
          <li>Διεύθυνση email</li>
          <li>Περιεχόμενο μηνύματος</li>
        </ul>
        <p>
          Δεν χρησιμοποιούμε cookies, scripts παρακολούθησης, εργαλεία
          analytics ή υπηρεσίες τρίτων για τη συλλογή δεδομένων.
        </p>

        <h2>3. Πώς χρησιμοποιούμε τα δεδομένα σας</h2>
        <p>
          Τα δεδομένα που υποβάλλετε μέσω της φόρμας επικοινωνίας
          χρησιμοποιούνται αποκλειστικά για την απάντηση στο αίτημά σας.
          Αποστέλλονται απευθείας στο email μας και δεν αποθηκεύονται σε
          κάποια βάση δεδομένων.
        </p>

        <h2>4. Νομική βάση (GDPR)</h2>
        <p>
          Η επεξεργασία των προσωπικών σας δεδομένων βασίζεται στη συγκατάθεσή
          σας (Άρθρο 6 παρ. 1(α) GDPR), η οποία εκφράζεται με την οικειοθελή
          υποβολή της φόρμας επικοινωνίας.
        </p>

        <h2>5. Χρόνος διατήρησης</h2>
        <p>
          Τα δεδομένα σας διατηρούνται μόνο για όσο χρόνο είναι απαραίτητο
          για να απαντήσουμε στο αίτημά σας και δεν κοινοποιούνται σε τρίτους.
        </p>

        <h2>6. Τα δικαιώματά σας</h2>
        <p>Βάσει του GDPR, έχετε δικαίωμα:</p>
        <ul>
          <li>Πρόσβασης στα προσωπικά δεδομένα που τηρούμε για εσάς</li>
          <li>Διόρθωσης ανακριβών δεδομένων</li>
          <li>Διαγραφής των δεδομένων σας</li>
          <li>Ανάκλησης της συγκατάθεσής σας ανά πάσα στιγμή</li>
          <li>
            Υποβολής καταγγελίας στην εποπτική αρχή (στην Ελλάδα:{" "}
            <a
              href="https://www.dpa.gr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα
            </a>
            )
          </li>
        </ul>
        <p>
          Για την άσκηση οποιουδήποτε δικαιώματος, επικοινωνήστε μαζί μας στο:{" "}
          <a href="mailto:giorgosigo@gmail.com">giorgosigo@gmail.com</a>
        </p>

        <h2>7. Αλλαγές στην πολιτική</h2>
        <p>
          Ενδέχεται να επικαιροποιούμε την παρούσα Πολιτική Απορρήτου
          περιοδικά. Κάθε αλλαγή θα αναφέρεται στη σελίδα αυτή με
          ενημερωμένη ημερομηνία.
        </p>
      </section>
    </main>
  );
}
