import type { Metadata } from "next";
import LegacyPage from "../ui/legacy-page";

export const metadata: Metadata = {
  title: "Sami Abu Touq CV | Software Developer",
  description:
    "Curriculum vitae of Sami Abu Touq, software developer and Computer Science graduate from PSUT.",
  alternates: { canonical: "/cv" },
  openGraph: { url: "/cv" },
};

export default function CvPage() {
  return <LegacyPage src="/legacy/cv-page.html" title="Sami Abu Touq CV" />;
}
