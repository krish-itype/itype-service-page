import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://itypedesigns.com"),
  title: "Service Based Website Development Company - Itype Design",
  description:
    "Professional, SEO-ready business websites built to turn visitors into enquiries.",
  alternates: {
    canonical: "/service-based-website-development-company/",
  },
  openGraph: {
    type: "website",
    url: "/service-based-website-development-company/",
    siteName: "Itype Design",
    title: "Service Based Website Development Company - Itype Design",
    description:
      "Professional, SEO-ready business websites built to turn visitors into enquiries.",
  },
  icons: {
    icon: "/service-based-website-development-company/assets/site-icon.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
