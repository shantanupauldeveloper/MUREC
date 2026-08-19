import Image from "next/image";
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
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full border border-gold/30 bg-porcelain shadow-[0_0_60px_-15px_rgba(201,160,94,0.35)]">
            <Image
              src="/images/desingform.png"
              alt="Design Forum International — IGBC certification partner"
              width={220}
              height={72}
              className="object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
