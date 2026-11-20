import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Oswald, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SINDHUPATH_CONFIG } from "@/lib/site-config";

/* ============================================================================
   TYPOGRAPHY — Bebas Neue (display), Oswald (subheads), Montserrat (body)
   ========================================================================== */
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = SINDHUPATH_CONFIG.canonicalDomain;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Sindhupath Merchant Navy Academy | IMU-CET & DNS Sponsorship Coaching",
  description:
    "India's premier merit-based Merchant Navy coaching academy. Structured IMU-CET coaching, DNS sponsorship interview mentoring by active sailing Captains and Chief Engineers.",
  keywords: [
    "Merchant Navy Academy",
    "IMU-CET Coaching",
    "DNS Sponsorship",
    "SindhuPath",
    "Merchant Navy Preparation",
    "Maritime Entrance Coaching India",
    "Bengaluru Maritime Academy",
    "CBT Mock Test IMU-CET",
    "Sponsorship Interview Viva Merchant Navy",
  ],
  authors: [{ name: "SindhuPath Merchant Navy Academy" }],
  creator: "SindhuPath Merchant Navy Academy",
  publisher: "SindhuPath Merchant Navy Academy",
  applicationName: "SindhuPath Marketing",
  alternates: {
    canonical: SITE_URL + "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/sindhupath-logo.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [{ url: "/sindhupath-logo.png", sizes: "256x256", type: "image/png" }],
    shortcut: ["/favicon-32.png"],
  },
  openGraph: {
    title:
      "SindhuPath Merchant Navy Academy | IMU-CET & DNS Sponsorship Coaching",
    description:
      "Merit-based Merchant Navy coaching. IMU-CET, DNS sponsorship, and viva mentoring by active Master Mariners and Chief Engineers. Bengaluru, India.",
    url: SITE_URL + "/",
    siteName: "SindhuPath Merchant Navy Academy",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/sindhupath-logo.png",
        width: 256,
        height: 256,
        alt: "SindhuPath Merchant Navy Academy logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SindhuPath Merchant Navy Academy | IMU-CET & DNS Sponsorship Coaching",
    description:
      "Merit-based Merchant Navy coaching. Mentored by active Master Mariners and Chief Engineers.",
    images: ["/sindhupath-logo.png"],
  },
  category: "education",
  other: {
    "theme-color": "#071322",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#071322" },
  ],
  colorScheme: "light",
};

/* JSON-LD: EducationalOrganization structured data (brief §7) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "SindhuPath Merchant Navy Academy",
  alternateName: "SINDHUPATH",
  slogan: SINDHUPATH_CONFIG.motto,
  description:
    "Merit-based Merchant Navy coaching academy preparing aspirants for IMU-CET, DNS sponsorship interviews, and company selection — mentored by active Master Mariners and Chief Engineers.",
  url: SITE_URL,
  logo: `${SITE_URL}/sindhupath-logo.png`,
  image: `${SITE_URL}/sindhupath-logo.png`,
  email: SINDHUPATH_CONFIG.admissionsEmail,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "admissions",
      telephone: SINDHUPATH_CONFIG.admissionsPhone,
      email: SINDHUPATH_CONFIG.admissionsEmail,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    SINDHUPATH_CONFIG.linkedIn,
    SINDHUPATH_CONFIG.instagram,
    SINDHUPATH_CONFIG.platformUrl,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bebas.variable} ${oswald.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
