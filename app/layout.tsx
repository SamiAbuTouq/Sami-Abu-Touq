import type { Metadata, Viewport } from "next";
import "./shell.css";

const siteUrl = "https://sami-abu-touq.pages.dev";
const title = "Sami Abu Touq | Software Developer & CS Graduate";
const description =
  "Sami Abu Touq is a software developer and Computer Science graduate from Princess Sumaya University for Technology (PSUT). Former Dynamics CRM Developer Intern at DI. Portfolio of Flutter, web, Python, C++, and .NET projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Sami Abu Touq", url: siteUrl }],
  keywords: [
    "Sami Abu Touq",
    "Sami Abu-Touq",
    "SamiAbuTouq",
    "software developer",
    "CS graduate",
    "PSUT",
    "Dynamics 365",
    "Flutter",
    "portfolio",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/`,
    siteName: "Sami Abu Touq",
    title,
    description,
    images: [{ url: "/legacy/img/avatars/avatar.JPG", alt: "Portrait of Sami Abu Touq" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/legacy/img/avatars/avatar.JPG"],
  },
  icons: { icon: "/legacy/img/s.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
