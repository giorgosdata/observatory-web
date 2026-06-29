import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OBSERVATORY",
    template: "%s | OBSERVATORY",
  },
  description: "Χώρος παρατήρησης, σκέψης και επίγνωσης.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://yoursite.gr"),
  openGraph: {
    siteName: "OBSERVATORY",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
