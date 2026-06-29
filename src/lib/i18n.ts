export type Locale = "el" | "en";

export const t = (locale: string) => {
  const l: Locale = locale === "en" ? "en" : "el";

  const dict = {
    el: {
      nav: {
        home: "Home",
        about: "About",
        articles: "Άρθρα",
        notes: "Σημειώσεις",
        appointments: "Ραντεβού",
        contact: "Επικοινωνία",
      },
      about: {
        title: "About",
        subtitle: "Λίγα λόγια για τον χώρο και την πρόθεση.",
        audioOn: "Ήχος: ON",
        audioOff: "Ήχος: OFF",
        audioHint: "(μόνο εδώ, χαμηλά, σε loop)",
        bodyPlaceholder: "Εδώ γράφεις το κείμενό σου…",
      },
      lang: { switchTo: "EN" },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        articles: "Articles",
        notes: "Notes",
        appointments: "Appointments",
        contact: "Contact",
      },
      about: {
        title: "About",
        subtitle: "A few words about the space and the intent.",
        audioOn: "Sound: ON",
        audioOff: "Sound: OFF",
        audioHint: "(only here, low volume, loop)",
        bodyPlaceholder: "Write your text here…",
      },
      lang: { switchTo: "EL" },
    },
  } as const;

  return dict[l];
};
