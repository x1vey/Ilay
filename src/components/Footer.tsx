import { SITE } from "@/content";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border bg-background">
    <div className="max-w-6xl mx-auto text-center">
      <p className="font-body text-xs text-muted-foreground">{SITE.copyright}</p>
    </div>
  </footer>
);

export default Footer;
