import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
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
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      d.classList.add('dark');
    } else {
      d.classList.remove('dark');
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
      className={`${inter.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col bg-canvas font-sans text-base">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
