import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ImmersiveLabProvider } from "@/components/experiment/ImmersiveLabProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IMMERSIVE_LAB_ENABLED } from "@/lib/immersiveLab";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sarthak Bankar — Level Designer",
    template: "%s — Sarthak Bankar",
  },
  description:
    "Level Designer portfolio: gameplay spaces, featured case study, and contact.",
};

const themeScript = `
(function(){
  try {
    var k = 'portfolio-theme';
    var t = localStorage.getItem(k);
    var d = document.documentElement;
    if (t === 'light' || t === 'dark') {
      d.classList.toggle('dark', t === 'dark');
    } else {
      d.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${hanken.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden bg-canvas font-sans text-base">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <ThemeProvider>
          <ImmersiveLabProvider enabled={IMMERSIVE_LAB_ENABLED}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ImmersiveLabProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
