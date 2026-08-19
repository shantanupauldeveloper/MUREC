import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-2 pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Image src="/images/murec.png" alt="MUREC" width={100} height={53} className="h-10 w-auto" />
            <p className="mt-6 text-sm font-light leading-7 text-porcelain/50">
              Madhusudan Urban Real Estate Collection
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Corporate Address</p>
            <p className="mt-5 max-w-[220px] text-sm font-light leading-7 text-porcelain/55">
              Madhusudan, 2nd Floor, Riana Towers, 51-52, Noida Sector 136, Uttar Pradesh - 201301
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Email</p>
            <a href="mailto:info@murec.com" className="mt-5 block text-sm font-light text-porcelain/55 hover:text-porcelain">
              info@murec.com
            </a>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">Phone Number</p>
            <a href="tel:+919717773229" className="mt-5 block text-sm font-light text-porcelain/55 hover:text-porcelain">
              +91 97177 73229
            </a>
          </div>
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

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-xs text-porcelain/40 sm:flex-row">
          <p>Copyright &copy; 2026 | Privacy Policy</p>
          <p>Powered by Propacity</p>
        </div>
      </div>
    </footer>
  );
}
