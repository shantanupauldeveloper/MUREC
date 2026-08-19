import Image from "next/image";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2 pt-20">
      <span
        aria-hidden
        data-speed="0.9"
        className="text-display pointer-events-none absolute -bottom-[6vw] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[16vw] font-light leading-none tracking-tight text-porcelain/[0.025] sm:text-[10vw]"
      >
        MUREC
      </span>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">The Murec Team</p>
          <SplitHeading className="text-display mt-4 max-w-xl text-3xl font-light leading-tight text-porcelain sm:text-4xl">
            Building addresses that last generations
          </SplitHeading>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 md:grid-cols-4">
          <Reveal>
            <Image src="/images/murec.png" alt="MUREC" width={100} height={53} className="h-10 w-auto" />
            <p className="mt-6 text-sm font-light leading-7 text-porcelain/50">
              Madhusudan Urban Real Estate Collection
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Corporate Address</p>
            <p className="mt-5 max-w-[220px] text-sm font-light leading-7 text-porcelain/55">
              Madhusudan, 2nd Floor, Riana Towers, 51-52, Noida Sector 136, Uttar Pradesh - 201301
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Email</p>
            <a
              href="mailto:info@murec.com"
              className="group relative mt-5 inline-block text-sm font-light text-porcelain/55 hover:text-porcelain"
            >
              info@murec.com
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Phone Number</p>
            <a
              href="tel:+919717773229"
              className="group relative mt-5 inline-block text-sm font-light text-porcelain/55 hover:text-porcelain"
            >
              +91 97177 73229
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          </Reveal>
        </div>

        <div className="border-t border-line py-8">
          <p className="max-w-4xl text-xs font-light leading-6 text-porcelain/35">
            This website is purely conceptual and not a legal document. All layouts,
            specifications, amenities, and visuals are subject to change as may be decided
            by MUREC or the competent authority. No information herein shall be construed
            as an offer, solicitation, or invitation to purchase. Interested parties are
            requested to verify all details, including approvals, specifications, and
            prices, directly with MUREC before making any commitments.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-line py-8 text-xs text-porcelain/40 sm:flex-row">
          <p>Copyright &copy; 2026 | Privacy Policy</p>
          <p>Powered by Propacity</p>
          <MagneticButton
            href="#home"
            strength={0.4}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-porcelain/60 transition-colors hover:border-gold hover:text-gold"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
