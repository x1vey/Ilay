import { ANNOUNCEMENT } from "@/content";

const AnnouncementBar = () => (
  <div
    className="py-2.5 px-4 text-center font-body text-sm font-medium"
    style={{ background: "linear-gradient(90deg, hsl(0 0% 5%), hsl(43 80% 18%), hsl(0 0% 5%))", color: "hsl(43 90% 62%)" }}
  >
    <a href={ANNOUNCEMENT.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
      <strong>{ANNOUNCEMENT.text}</strong>{" "}{ANNOUNCEMENT.cta}
    </a>
  </div>
);

export default AnnouncementBar;
