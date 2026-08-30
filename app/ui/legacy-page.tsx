type LegacyPageProps = {
  src: string;
  title: string;
};

/**
 * The original document is served unchanged from public/legacy so its DOM,
 * stylesheet cascade, asset URLs, and vendor-script timing remain identical.
 */
export default function LegacyPage({ src, title }: LegacyPageProps) {
  return <iframe className="legacy-page" src={src} title={title} />;
}
