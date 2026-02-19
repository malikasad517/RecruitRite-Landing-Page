import type { Metadata } from "next";
import { Schibsted_Grotesk, Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-schibsted-grotesk",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RecruitRite - AI Precision. Human Connection.",
  description:
    "Stop drowning in resumes. Let RecruitRite's proprietary model surface the 95% matches instantly.",
  icons: {
    icon: "/RR_Fav.png",
    apple: "/RR_Fav.png",
    other: {
      rel: "shortcut icon",
      url: "/RR_Fav.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${beVietnam.variable} ${inter.variable}`}
    >
      <body className="font-schibstedGrotesk">{children}</body>
    </html>
  );
}
