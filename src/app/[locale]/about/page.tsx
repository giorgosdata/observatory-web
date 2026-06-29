"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

export default function AboutPage() {
  const { locale } = useParams<{ locale: string }>();
  const isEn = locale === "en";
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isOn, setIsOn] = useState(false);

  // όταν κλείνει το tab/αλλάζει σελίδα, σταμάτα
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  async function toggleAudio() {
    const el = audioRef.current;
    if (!el) return;

    try {
      if (isOn) {
        el.pause();
        el.currentTime = 0;
        setIsOn(false);
      } else {
        el.volume = 0.15; // χαμηλά, background
        await el.play();  // απαιτεί user click
        setIsOn(true);
      }
    } catch {
      // αν ο browser το μπλοκάρει, δεν κάνουμε τίποτα
      setIsOn(false);
    }
  }

  return (
    <main>
      <section style={{ paddingTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={56}
            height={56}
            style={{ borderRadius: 12, display: "block" }}
          />

          <div>
            <h1 style={{ margin: 0 }}>{isEn ? "About" : "Σχετικά"}</h1>
            <p style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.9 }}>
              {isEn
                ? "A few words about this space and its intention."
                : "Λίγα λόγια για τον χώρο και την πρόθεση."}
            </p>
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <button
            onClick={toggleAudio}
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            {isOn
              ? (isEn ? "Sound: ON" : "Ήχος: ON")
              : (isEn ? "Sound: OFF" : "Ήχος: OFF")}
          </button>

          <span style={{ marginLeft: 10, opacity: 0.65, fontSize: 13 }}>
            {isEn ? "(only here, low, looping)" : "(μόνο εδώ, χαμηλά, σε loop)"}
          </span>
        </div>

        <section className="article" style={{ marginTop: 18 }}>
          <p>
            {isEn ? "Write your content here…" : "Εδώ γράφεις το κείμενό σου…"}
          </p>
        </section>
      </section>
<div
  style={{
    marginTop: 70,
    paddingTop: 28,
    borderTop: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    justifyContent: "center",
  }}
>
  <Image
    src="/logo.jpg"
    alt="Logo"
    width={140}
    height={140}
    style={{ borderRadius: 22, display: "block", opacity: 0.92 }}
  />
</div>

      {/* audio element */}
      <audio ref={audioRef} src="/about.mp3" loop preload="none" />
    </main>
  );
}
