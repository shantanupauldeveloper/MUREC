import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

export default function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-32 md:py-44">
      <div data-speed="0.7" className="absolute inset-0 scale-125">
        <Image
          src="/images/getbg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/40" />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Get In Touch</p>
          <SplitHeading className="text-display mt-6 text-4xl font-light leading-tight text-porcelain sm:text-6xl">
            Looking to collaborate, invest, or simply know more?
          </SplitHeading>
          <p className="mt-6 text-base font-light text-porcelain/60">
            Reach out and let&rsquo;s connect.
          </p>
          <a
            href="mailto:info@murec.com"
            className="mt-12 inline-flex h-16 items-center justify-center rounded-full border border-gold/60 px-10 text-[11px] font-medium uppercase tracking-widest2 text-gold transition-all duration-500 hover:bg-gold hover:text-ink"
          >
            Contact Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
