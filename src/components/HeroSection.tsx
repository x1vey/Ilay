import { motion } from "framer-motion";
import { ease } from "@/lib/animations";
import { HERO } from "@/content";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center px-6 pt-[108px] pb-16 overflow-hidden">
    {/* Background — video or image */}
    {HERO.bgVideo ? (
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={HERO.bg}
      >
        <source src={HERO.bgVideo} type="video/mp4" />
      </video>
    ) : (
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO.bg})` }} />
    )}
    <div className="absolute inset-0 bg-background/85" />
    <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[hsl(43_90%_52%/0.05)] blur-[120px] pointer-events-none" />

    <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT — text */}
      <div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }} className="flex items-center gap-3 mb-8">
          <div className="gold-line w-10" style={{ height: "1px" }} />
          <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-gradient">
            {HERO.eyebrow}
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease }}
          className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.12] tracking-tight mb-6 text-foreground">
          {HERO.headline}{" "}
          <span className="text-gold-gradient italic">{HERO.headlineGold}</span>{" "}
          {HERO.headlineSuffix}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease }}
          className="font-body text-base text-muted-foreground max-w-md mb-4 leading-relaxed">
          {HERO.subheadline}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.38, ease }}
          className="flex flex-wrap items-center gap-4 mb-10 font-body text-xs text-muted-foreground">
          {HERO.socialProof.map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="text-gold-gradient">✦</span> {item}
            </span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.46, ease }}
          className="flex flex-col sm:flex-row gap-4">
          <a href={HERO.primaryCta.url} target="_blank" rel="noopener noreferrer"
            className="inline-block btn-gold font-body text-sm font-semibold px-10 py-4 rounded-full text-center">
            {HERO.primaryCta.label}
          </a>
          <a href={HERO.secondaryCta.href}
            className="inline-block border border-[hsl(43_90%_52%/0.35)] text-foreground font-body text-sm font-medium px-8 py-4 rounded-full text-center hover:border-[hsl(43_90%_52%/0.7)] transition-all duration-200">
            {HERO.secondaryCta.label}
          </a>
        </motion.div>
      </div>

      {/* RIGHT — portrait */}
      <motion.div initial={{ opacity: 0, x: 40, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.2, ease }}
        className="relative hidden md:block">
        <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-[hsl(43_90%_52%)] via-[hsl(43_90%_52%/0.2)] to-transparent" />
        <div className="relative rounded-2xl overflow-hidden">
          <img src={HERO.image} alt={HERO.imageAlt} className="w-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-5 glass">
            <p className="font-display text-base text-foreground italic">"{HERO.quote}"</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{HERO.quoteAuthor}</p>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

export default HeroSection;
