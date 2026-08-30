import type { Metadata } from "next";
import LegacyPage from "./ui/legacy-page";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return <LegacyPage src="/legacy/index.html" title="Sami Abu Touq portfolio" />;
}
