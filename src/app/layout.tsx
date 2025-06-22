import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Footer, Navbar, ThemeProvider } from "@/components";
import Script from "next/script";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BrandingLogger } from "@/components/ui/BrandingLogger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aavkar Mukhwas | Premium Homemade & Hygienic Indian Mouth Fresheners",
  description:
    "Discover Aavkar Mukhwas, your source for premium homemade and hygienic mukhwas. Explore our wide range of traditional Indian mouth fresheners, sweet supari, and natural seed mixes, all crafted in Surat with authentic taste and quality.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWFHK3JPQK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SWFHK3JPQK');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow bg-background text-foreground">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        <WhatsAppButton />
        <BrandingLogger />
      </body>
    </html>
  );
}
