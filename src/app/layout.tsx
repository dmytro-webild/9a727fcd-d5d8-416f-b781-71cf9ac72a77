import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Mulish } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'B115 CitiPoint Zayed Heights | الشيخ زايد',
  description: 'امتلك شقتك الفاخرة في B115 CitiPoint Zayed Heights. موقع متميز، أمان، وأفضل الأسعار في الشيخ زايد. تواصل معنا للحجز والاستفسار.',
  openGraph: {
    "title": "CitiPoint Zayed Heights",
    "description": "أرقى المشاريع السكنية في الشيخ زايد.",
    "siteName": "CitiPoint"
  },
};





const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
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
