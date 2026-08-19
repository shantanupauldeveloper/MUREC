import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function Legacy() {
  return (
    <section id="legacy" className="relative overflow-hidden bg-ink py-28 md:py-40">
      <span
        aria-hidden
        data-speed="0.8"
        className="text-display pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none text-[38vw] font-light leading-none text-porcelain/[0.03] sm:text-[26vw]"
      >
        78
      </span>

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">The Legacy</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-6xl">
            Beyond Compare
          </SplitHeading>
          <div className="mx-auto mt-8 h-px w-16 bg-gold/60" />
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-8 text-porcelain/65 sm:text-lg">
            For over seven decades, we stood for perseverance, integrity, and
            nation-building through enterprise. Every step was guided by one
            oath: quality before profit, trust before everything.
          </p>
          <a
            href="#partners"
            className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest2 text-porcelain/80 transition-colors hover:text-gold"
          >
            Our History
            <span className="h-px w-8 bg-current transition-all" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
