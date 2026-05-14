import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Anandha Veg Restaurant Viluppuram | Pure Vegetarian Delights',
  description: 'Visit Anandha Veg Restaurant in Viluppuram near Gandhi Statue for authentic south indian vegetarian food. Fresh, healthy, and traditional flavors.',
  keywords: ["veg restaurant Viluppuram, Anandha Veg, south indian vegetarian, best restaurant near Gandhi Statue"],
  openGraph: {
    "title": "Anandha Veg Restaurant Viluppuram",
    "description": "Authentic vegetarian dining near Gandhi Statue.",
    "siteName": "Anandha Veg"
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
