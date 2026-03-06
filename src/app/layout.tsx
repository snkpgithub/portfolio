import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shashankpandey.dev";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shashank Pandey",
  jobTitle: "AI/ML Engineer",
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/snkp0018",
    "https://github.com/snkpgithub",
  ],
  description:
    "AI/ML Engineer building production LLM fine-tuning platforms, GenAI pipelines, and scalable MLOps infrastructure.",
};

export const metadata: Metadata = {
  title: "Shashank Pandey | AI/ML Engineer",
  description:
    "AI/ML Engineer building production LLM fine-tuning platforms, GenAI pipelines, and scalable MLOps infrastructure.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Shashank Pandey | AI/ML Engineer",
    description:
      "AI/ML Engineer building production LLM fine-tuning platforms, GenAI pipelines, and scalable MLOps infrastructure.",
    url: siteUrl,
    siteName: "Shashank Pandey",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Shashank Pandey - AI/ML Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashank Pandey | AI/ML Engineer",
    description:
      "AI/ML Engineer building production LLM fine-tuning platforms, GenAI pipelines, and scalable MLOps infrastructure.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans relative min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
