import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyJournalBook - Personal Journaling That Gets You",
  description: "A culturally personalized journaling experience that understands your culture, vibe, and story. Digital diary and journal app coming soon.",
  keywords: ["journal app", "digital journal", "personal diary", "journaling app", "cultural journaling", "online journal", "daily journal"],
  authors: [{ name: "MyJournalBook" }],
  creator: "MyJournalBook",
  publisher: "MyJournalBook",
  metadataBase: new URL('https://myjournalbook.watch'),
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myjournalbook.watch',
    title: 'MyJournalBook - Personal Journaling That Gets You',
    description: 'A culturally personalized journaling experience that understands your culture, vibe, and story.',
    siteName: 'MyJournalBook',
    images: [
      {
        url: '/og-image.png', // Create this 1200x630px image
        width: 1200,
        height: 630,
        alt: 'MyJournalBook - Personal Journaling App',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'MyJournalBook - Personal Journaling That Gets You',
    description: 'A culturally personalized journaling experience that understands your culture, vibe, and story.',
    images: ['/og-image.png'], // Same image as OG
    creator: '@myjournalbook', // Add your Twitter handle
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags (add when you have accounts)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#9333ea" />
        
        {/* Additional Schema.org for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "MyJournalBook",
              "url": "https://myjournalbook.watch",
              "description": "A culturally personalized journaling experience that understands your culture, vibe, and story.",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}