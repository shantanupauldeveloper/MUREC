import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function Philosophy() {
  return (
    <section className="relative bg-ink-2 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">IGBC Certified</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl">
            Design Philosophy
          </SplitHeading>
          <div className="mt-8 h-px w-16 bg-gold/60" />
          <p className="mt-8 max-w-md text-base font-light leading-8 text-porcelain/65">
            The first MUREC collection is envisioned to align with the IGBC
            certification standards, reflecting a commitment to responsible
            development. From efficient resource planning to healthier living
            environments, the project integrates sustainability as a core
            design principle — thoughtfully, quietly, and with long-term
            impact in mind.
          </p>
          <a
            href="#collection"
            className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest2 text-porcelain/80 transition-colors hover:text-gold"
          >
            Discover More
            <span className="h-px w-8 bg-current" />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full border border-gold/30 bg-ink-2">
            <svg
              viewBox="0 0 100 100"
              className="absolute h-[85%] w-[85%] animate-spin-slow text-gold/30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeDasharray="1 5"
            >
              <circle cx="50" cy="50" r="46" />
            </svg>
            <svg
              viewBox="0 0 100 100"
              className="relative h-2/5 w-2/5 text-gold"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="50" cy="50" r="42" strokeOpacity="0.4" />
              <circle cx="50" cy="50" r="32" strokeOpacity="0.7" />
              <path
                d="M50 30c8 6 14 6 20 4-1 16-7 26-20 32-13-6-19-16-20-32 6 2 12 2 20-4Z"
                strokeLinejoin="round"
              />
              <path d="M42 50l6 6 12-12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
