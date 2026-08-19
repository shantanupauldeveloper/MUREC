import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const PARTNERS = [
  {
    name: "Bobby Mukherrji",
    photo: "/images/team_2.webp",
    logo: "/images/bobyloog.png",
    quote:
      "We are engaged to conceptualize the interiors for Murec's clubhouse and tower lobbies, with a focus on refined luxury and strong spatial identity.",
  },
  {
    name: "Goonmeet Ji",
    photo: "/images/team_3.webp",
    logo: "/images/desingform.png",
    logoLight: true,
    quote:
      "We are engaged to sculpt the architectural vision for Murec as a contemporary residential landmark — an address conceived for refined urban living, where design elegance is thoughtfully interwoven with functional planning.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative bg-ink-2 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Testimonials</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl">
            From Our Partners
          </SplitHeading>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.15} className="flex gap-6 rounded-sm border border-line bg-ink p-8 md:p-10">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-sm sm:h-32 sm:w-24">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="128px"
                  className="object-cover grayscale"
                />
              </div>
              <div>
                <span className="text-display text-4xl leading-none text-gold/50">&ldquo;</span>
                <p className="mt-3 text-sm font-light leading-7 text-porcelain/75 sm:text-base sm:leading-8">
                  {p.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={p.logo}
                    alt={`${p.name} — firm logo`}
                    width={110}
                    height={30}
                    className={`h-6 w-auto object-contain ${p.logoLight ? "invert" : ""}`}
                  />
                  <span className="text-xs uppercase tracking-widest2 text-porcelain/50">{p.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
