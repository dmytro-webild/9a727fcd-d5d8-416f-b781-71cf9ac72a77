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
import { Public_Sans } from "next/font/google";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'B115 CitiPoint Zayed Heights | الشيخ زايد',
  description: 'امتلك شقتك الفاخرة في B115 CitiPoint Zayed Heights. موقع متميز، أمان، وأفضل الأسعار في الشيخ زايد. تواصل معنا للحجز والاستفسار.',
  openGraph: {
    "title": "CitiPoint Zayed Heights",
    "description": "أرقى المشاريع السكنية في الشيخ زايد.",
    "siteName": "CitiPoint"
  },
};







const figtree = Figtree({
  variable: "--font-figtree",
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
        <body className={`${figtree.variable} antialiased`}>
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
