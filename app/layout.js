import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Michael Emory, LMFT | Sage Oak Therapy",
  description:
    "Michael Emory is a Licensed Marriage and Family Therapist (#123456) offering compassionate therapy for individuals, couples, and families in California. Specializing in anxiety, relationships, trauma, and personal growth.",
  keywords: [
    "Michael Emory",
    "Marriage and Family Therapist",
    "Therapist in California",
    "Sage Oak Therapy",
    "Couples counseling",
    "Therapy for anxiety",
    "Trauma therapy",
    "Online therapy California",
    "LMFT",
  ],
  openGraph: {
    title: "Michael Emory, LMFT | Sage Oak Therapy",
    description:
      "Licensed Marriage and Family Therapist offering personalized care for individuals, couples, and families in California.",
    url: "",
    siteName: "Sage Oak Therapy",
    images: [
      {
        url: "", 
        width: 1200,
        height: 630,
        alt: "Sage Oak Therapy - Michael Emory, LMFT",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Emory, LMFT | Sage Oak Therapy",
    description:
      "Compassionate therapy for individuals, couples, and families in California by Licensed Marriage and Family Therapist Michael Emory.",
    images: [""],
  },
 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
