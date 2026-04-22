// app/layout.tsx
import "./globals.css";
import { fontSans, fontSerif, fontCaption, fontArabic} from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site.config";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Masjid Muhammad Al Qosim",
  description: "Website Resmi Masjid Muhammad Al Qosim | Boja Mengaji",
  metadataBase: new URL(siteConfig.site_domain),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", fontSans.className,
        fontSerif.variable, fontCaption.variable, fontArabic.variable,
      )}>
        {/* client dipisah */}
        {children}
      </body>
    </html>
  );
}