import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const LOGOS = [
  { src: "/images/tq.webp", alt: "TQ", invert: false },
  { src: "/images/o2.png", alt: "ICICI Bank", invert: false },
  { src: "/images/o5.png", alt: "Bobby Mukherrji Architects", invert: false },
  { src: "/images/o6.png", alt: "Design Forum International", invert: false },
  { src: "/images/bjaja.webp", alt: "Bajaj", invert: false },
];

const TRACK = [...LOGOS, ...LOGOS];

export default function Associations() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[80%] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Our Associations</p>
          <SplitHeading
            as="h2"
            className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl"
          >
            Trusted by Industry Leaders
          </SplitHeading>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative mt-16 md:mt-20">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 sm:gap-10">
            {TRACK.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex h-24 w-44 shrink-0 items-center justify-center rounded-sm border border-line bg-ink-2 sm:h-28 sm:w-56"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  className="h-10 w-auto max-w-[70%] object-contain sm:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
