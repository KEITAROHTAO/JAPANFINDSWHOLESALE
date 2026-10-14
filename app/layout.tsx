import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { OrderStore } from "@/components/OrderStore";

const SITE_URL = "https://japanfinds.site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JAPAN FINDS WHOLESALE | Japan Surplus in Laguna, Philippines",
    template: "%s | JAPAN FINDS WHOLESALE",
  },
  description:
    "Japan surplus wholesale warehouse in Biñan, Laguna, Philippines. Shop Japanese furniture, baby items, household goods and wholesale items for resellers and personal use.",
  keywords: [
    "Japan surplus Philippines",
    "Japan surplus Laguna",
    "Japan surplus Biñan",
    "Japan surplus wholesale",
    "Japanese surplus furniture",
    "surplus furniture Philippines",
    "Japan surplus reseller",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "JAPAN FINDS WHOLESALE",
    title: "JAPAN FINDS WHOLESALE | Japan Surplus in Laguna, Philippines",
    description:
      "Direct supply of Japan surplus furniture, baby items and household goods in Biñan, Laguna, Philippines.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "JAPAN FINDS WHOLESALE - Japan Surplus in Laguna, Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JAPAN FINDS WHOLESALE | Japan Surplus in Laguna, Philippines",
    description:
      "Direct supply of Japan surplus furniture, baby items and wholesale goods in Biñan, Laguna, Philippines.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "JAPAN FINDS WHOLESALE",
    url: SITE_URL,
    image: `${SITE_URL}/images/warehouse.jpg`,
    description:
      "Japan surplus wholesale warehouse supplying furniture, baby items and household goods from Japan in Biñan, Laguna, Philippines.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Manila South Road, Limaco Compound, Platero",
      addressLocality: "Biñan",
      addressRegion: "Laguna",
      postalCode: "4024",
      addressCountry: "PH",
    },
    sameAs: ["https://www.facebook.com/profile.php?id=61576532876437"],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <OrderStore>
          <Header />
          {children}
        </OrderStore>
      </body>
    </html>
  );
}
