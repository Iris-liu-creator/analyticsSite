import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Iris Analytics Intelligence",
    template: "%s | Iris Analytics Intelligence"
  },
  description: "Portfolio for data analytics, BI reporting, RevOps insights, and AI-enabled business intelligence.",
  openGraph: {
    title: "Iris Analytics Intelligence",
    description: "Power BI, SQL, Python, RevOps analytics, and AI-enabled BI case studies.",
    images: ["/images/og.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
