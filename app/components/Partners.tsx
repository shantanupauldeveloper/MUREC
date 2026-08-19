import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const PARTNERS = [
  {
    name: "Bobby Mukherrji",
    logo: "/images/bobyloog.png",
    quote:
      "We are engaged to conceptualize the interiors for Murec's clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.",
  },
  {
    name: "Goonmeet Ji",
    logo: null,
    quote:
      "We are engaged to sculpt the architectural vision for Murec as a contemporary residential landmark — an address conceived for refined urban living, where design elegance is thoughtfully interwoven with functional planning.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Our Associations</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl">
            From Our Partners
          </SplitHeading>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-line md:mt-20 md:grid-cols-2">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.15} className="bg-ink-2 p-10 md:p-14">
              <span className="text-display text-5xl leading-none text-gold/50">&ldquo;</span>
              <p className="mt-6 text-lg font-light leading-8 text-porcelain/75">{p.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                {p.logo ? (
                  <Image src={p.logo} alt={p.name} width={120} height={32} className="h-7 w-auto object-contain" />
                ) : (
                  <div className="h-7 w-24 rounded-sm border border-line" />
                )}
                <span className="text-sm uppercase tracking-widest2 text-porcelain/50">{p.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
