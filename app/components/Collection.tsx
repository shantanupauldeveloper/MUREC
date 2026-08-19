import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function Collection() {
  return (
    <section id="collection" className="relative overflow-hidden bg-ink py-28 md:py-40">
      <div
        data-speed="0.85"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] w-[60vw] max-h-[560px] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
      />
      <div
        data-speed="1.15"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40vw] w-[40vw] max-h-[380px] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">The Murec Collection</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl">
            A Portfolio Shaped by Legacy
          </SplitHeading>
          <p className="mx-auto mt-8 max-w-lg text-base font-light leading-8 text-porcelain/65">
            Guided by vision, the MUREC Collection is where every project
            reflects our way of building.
          </p>
          <a
            href="#partners"
            className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest2 text-porcelain/80 transition-colors hover:text-gold"
          >
            Discover More
            <span className="h-px w-8 bg-current transition-all" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
