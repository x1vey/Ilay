import { motion } from "framer-motion";
import { fadeUp, fadeIn, viewport } from "@/lib/animations";
import { VIDEO } from "@/content";

/**
 * Detects the video source type from the URL and renders the appropriate player.
 *
 * Supported in content.ts VIDEO.embedUrl:
 *   Wistia  → "https://fast.wistia.net/embed/iframe/VIDEOID?seo=true&videoFoam=true"
 *   YouTube → "https://www.youtube.com/embed/VIDEOID"
 *   Vimeo   → "https://player.vimeo.com/video/VIDEOID"
 *   Direct  → "https://res.cloudinary.com/your-cloud/video/upload/your-video.mp4"
 */
const VideoPlayer = ({ url, title }: { url: string; title: string }) => {
  const isDirectVideo = /\.(mp4|webm|ogg)(\?|$)/i.test(url);

  if (isDirectVideo) {
    return (
      <video
        src={url}
        title={title}
        controls
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  return (
    <iframe
      src={url}
      title={title}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
      style={{ border: "none" }}
    />
  );
};

const VideoSection = () => (
  <section className="py-24 px-6 bg-secondary">
    <div className="max-w-4xl mx-auto">
      <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-display text-3xl md:text-4xl font-normal text-center mb-4 text-foreground">
        {VIDEO.heading}
      </motion.h2>
      <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={viewport}
        className="font-body text-muted-foreground text-center mb-10 max-w-xl mx-auto">
        {VIDEO.subheading}
      </motion.p>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card">
        <VideoPlayer url={VIDEO.embedUrl} title={VIDEO.embedTitle} />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
        className="text-center mt-10">
        <a href={VIDEO.cta.url} target="_blank" rel="noopener noreferrer"
          className="inline-block btn-gold font-body text-sm font-semibold px-12 py-4 rounded-full">
          {VIDEO.cta.label}
        </a>
        <p className="font-body text-xs text-muted-foreground mt-3">{VIDEO.ctaCaption}</p>
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
