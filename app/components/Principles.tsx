import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";
import TiltCard from "./TiltCard";

const VALUES = [
  { n: "01", title: "Trust", desc: "The foundation of every relationship we build, honored without exception." },
  { n: "02", title: "Quality", desc: "Uncompromising standards in every material, plan, and finish we deliver." },
  { n: "03", title: "Transparency", desc: "Open communication and honest dealings at every step of the journey." },
  { n: "04", title: "Innovation", desc: "Embracing new ideas as the foundation of everything we create." },
];

export default function Principles() {
  return (
    <section id="principles" className="relative bg-ink-2 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Living By Principles</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl">
            The values that guide every decision
          </SplitHeading>
          <p className="mt-8 text-base font-light leading-8 text-porcelain/65">
            MUREC is guided by values that shape every decision — building trust,
            delivering quality, practicing transparency, and embracing innovation
            as the foundation of everything we create.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.1}>
              <TiltCard className="rounded-sm border border-line bg-ink/40 p-8 transition-colors duration-300 hover:border-gold/40">
                <span className="text-display text-sm text-gold/70">{v.n}</span>
                <h3 className="text-display mt-4 text-2xl font-light text-porcelain">{v.title}</h3>
                <div className="mt-4 h-px w-10 bg-line" />
                <p className="mt-5 text-sm font-light leading-7 text-porcelain/55">{v.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
