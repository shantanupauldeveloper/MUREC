import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

const TEAM = [
  { img: "/images/team_2.webp", name: "Leadership", role: "Vision & Strategy" },
  { img: "/images/team_3.webp", name: "Leadership", role: "Design & Delivery" },
];

export default function Team() {
  return (
    <section className="relative bg-ink-2 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">The Murec Team</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl">
            The People Behind the Legacy
          </SplitHeading>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-20 md:gap-10">
          {TEAM.map((m, i) => (
            <Reveal key={m.name + i} delay={i * 0.15} className="group relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={m.img}
                alt={m.name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-display text-xl font-light text-porcelain">{m.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest2 text-gold-soft">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
