import React, { useEffect } from "react";
import HeroBottleSvg from "./components/HeroBottleSvg";

export default function App() {
  // Standard Tally Embed Pattern from official docs
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    const loadEmbeds = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
    };

    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = loadEmbeds;
      document.body.appendChild(script);
    } else {
      loadEmbeds();
    }
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EC] text-[#1A1A1A] font-sans antialiased selection:bg-[#2E4A34] selection:text-[#F5F2EC]">
      {/* Top Header */}
      <header className="border-b border-[#E6E0D5] bg-[#F5F2EC]/95 backdrop-blur-xs sticky top-0 z-30 h-16 flex items-center">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex items-center justify-between">
          <span
            className="font-serif tracking-[0.18em] text-lg sm:text-xl font-medium text-[#2F3A2A] uppercase"
            style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
          >
            The Pure Herb
          </span>

          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="inline-flex items-center justify-center bg-[#2F3A2A] text-[#F1EADB] hover:bg-[#1E261B] text-xs uppercase tracking-[0.16em] font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-[6px] shadow-xs transition-colors shrink-0"
          >
            Join the Waitlist
          </a>
        </div>
      </header>

      {/* HERO SECTION — Optimized Space Ratio Vertically Centered */}
      <section className="min-h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] bg-[#F5F2EC] flex items-center justify-center pt-6 pb-10 md:py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Content (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-start justify-center pr-0 lg:pr-4">
              <h1
                className="text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.16] text-[#2F3A2A] font-normal tracking-tight mb-4"
                style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
              >
                Hair cleanser, the way it used to be made.
              </h1>
              <p className="text-[18px] sm:text-[19px] text-[#4A4A3C] leading-relaxed font-sans font-light max-w-[420px] mb-7">
                Reetha, amla, shikakai and 8 more herbs, slow-simmered.
              </p>
              <div className="flex flex-col items-start gap-2">
                <a
                  href="#waitlist"
                  onClick={scrollToWaitlist}
                  className="inline-block bg-[#2F3A2A] text-[#F1EADB] font-medium text-base rounded-[6px] px-8 py-[14px] hover:bg-[#1E261B] transition-colors text-center"
                >
                  Join the Waitlist
                </a>
                <span className="text-[14px] text-[#6B6B5A] font-normal">
                  Small batches. Limited spots.
                </span>
              </div>
            </div>

            {/* Right Column: Prominent Bottle (7 cols) with visible label and centered layout */}
            <div className="md:col-span-7 flex items-center justify-center w-full py-2 md:py-0">
              <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[500px] h-full max-h-[68vh] md:max-h-[calc(100vh-64px-64px)] flex items-center justify-center">
                <HeroBottleSvg className="w-full h-full max-h-[68vh] md:max-h-[calc(100vh-64px-64px)] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S IN THE BOTTLE SECTION (Replaces Product Description) */}
      <section id="ingredients" className="bg-[#F4EFE6] border-t border-[#E6E0D5] py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Top */}
          <div className="mb-10 text-center sm:text-left">
            <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#A8842C] mb-3 block">
              WHAT'S IN THE BOTTLE
            </span>
            <h2
              className="font-serif text-[30px] sm:text-[36px] md:text-[44px] leading-[1.16] text-[#2F3A2A] font-normal tracking-tight mb-3"
              style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
            >
              11 herbs. Water. Nothing else.
            </h2>
            <p className="text-[17px] text-[#4A4A3C] leading-relaxed font-sans font-light">
              Soaked overnight, then slow-simmered fresh in every batch.
            </p>
          </div>

          {/* Ingredient grid: 4 columns on desktop, 2 on mobile, 16px gap, 12 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 01 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  01
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Reetha
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Soapnut
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Foams up a soft, natural lather
              </p>
            </div>

            {/* 02 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  02
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Shikakai
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Shikakai pod
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Gentle cleanser, no harsh stripping
              </p>
            </div>

            {/* 03 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  03
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Amla
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Indian gooseberry
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Vitamin C powerhouse, a hair-care classic
              </p>
            </div>

            {/* 04 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  04
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Bhringraj
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Bhringraj leaf
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Ayurveda's "king of hair herbs"
              </p>
            </div>

            {/* 05 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  05
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Brahmi
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Bacopa leaf
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                A calming, age-old scalp-care herb
              </p>
            </div>

            {/* 06 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  06
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Gudhal
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Hibiscus flower
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Adds silky slip and softness
              </p>
            </div>

            {/* 07 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  07
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Methi
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Fenugreek
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Brings shine and a smooth finish
              </p>
            </div>

            {/* 08 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  08
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Kalonji
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Nigella seeds
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Tiny seeds, old hair-care wisdom
              </p>
            </div>

            {/* 09 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  09
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Kadi patta
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Curry leaves
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Kitchen staple, hair-care favourite
              </p>
            </div>

            {/* 10 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  10
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Alsi
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Flaxseed
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Turns into a light gel for easy glide
              </p>
            </div>

            {/* 11 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  11
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Mehendi
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Henna leaves
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Conditions. May tint hair.
              </p>
            </div>

            {/* 12 */}
            <div className="bg-[#ECE5DA] border border-[#D8CDB0] rounded-[12px] p-5 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold text-[#A8842C] tracking-wider mb-2 block">
                  12
                </span>
                <h3 className="font-bold text-[18px] text-[#2F3A2A] leading-snug">
                  Water
                </h3>
                <div className="italic text-[14px] text-[#A8842C] mb-3">
                  Pure water
                </div>
              </div>
              <p className="text-[14px] text-[#4A4A3C] leading-relaxed font-light">
                Nothing else. Nothing added.
              </p>
            </div>
          </div>

          {/* Under grid disclaimer */}
          <p className="text-center text-[13px] text-[#6B6B5A] mt-8 mb-14 font-normal">
            Traditional uses only. Not a medical claim.
          </p>

          {/* Effort strip */}
          <div className="border-t border-[#D8CDB0] pt-12 pb-6">
            <div className="text-center mb-8">
              <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#A8842C]">
                THE EFFORT BEHIND EVERY BATCH
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D8CDB0] text-center sm:text-left">
              <div className="py-5 md:py-0 md:px-8 first:pl-0">
                <h3
                  className="font-serif text-[24px] text-[#2F3A2A] font-normal mb-2"
                  style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
                >
                  Right formula
                </h3>
                <p className="text-[15px] text-[#4A4A3C] leading-relaxed font-light">
                  11 herbs chosen to work together, nothing extra.
                </p>
              </div>

              <div className="py-5 md:py-0 md:px-8">
                <h3
                  className="font-serif text-[24px] text-[#2F3A2A] font-normal mb-2"
                  style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
                >
                  Right quantity
                </h3>
                <p className="text-[15px] text-[#4A4A3C] leading-relaxed font-light">
                  Every herb measured, batch after batch.
                </p>
              </div>

              <div className="py-5 md:py-0 md:px-8 last:pr-0">
                <h3
                  className="font-serif text-[24px] text-[#2F3A2A] font-normal mb-2"
                  style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
                >
                  Right time
                </h3>
                <p className="text-[15px] text-[#4A4A3C] leading-relaxed font-light">
                  Soaked overnight. Simmered slow. Never rushed.
                </p>
              </div>
            </div>

            {/* Button (centered below) */}
            <div className="mt-12 text-center">
              <a
                href="#waitlist"
                onClick={scrollToWaitlist}
                className="inline-block bg-[#2F3A2A] text-[#F1EADB] font-medium text-base rounded-[6px] px-9 py-[14px] hover:bg-[#1E261B] transition-colors text-center"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY COMMITMENTS */}
      <section id="commitments" className="py-16 md:py-20 border-t border-[#E6E0D5] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-[#5C645A] font-semibold mb-6">
            Key Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-[12px] bg-[#ECE5DA] border border-[#D8CDB0] flex flex-col justify-start">
              <span className="font-serif text-2xl text-[#2E4A34] mb-3 block font-normal">
                01
              </span>
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2 tracking-tight">
                No preservatives
              </h3>
              <p className="text-[15px] text-[#4A4E46] leading-relaxed font-light">
                Zero chemical stabilizers or shelf-life extenders. Every batch is made fresh.
              </p>
            </div>

            <div className="p-7 rounded-[12px] bg-[#ECE5DA] border border-[#D8CDB0] flex flex-col justify-start">
              <span className="font-serif text-2xl text-[#2E4A34] mb-3 block font-normal">
                02
              </span>
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2 tracking-tight">
                No sulfates, parabens, or synthetic fragrance
              </h3>
              <p className="text-[15px] text-[#4A4E46] leading-relaxed font-light">
                No SLS/SLES, no parabens, no artificial dyes, no lab-made perfumes. Only herbs and water.
              </p>
            </div>

            <div className="p-7 rounded-[12px] bg-[#ECE5DA] border border-[#D8CDB0] flex flex-col justify-start">
              <span className="font-serif text-2xl text-[#2E4A34] mb-3 block font-normal">
                03
              </span>
              <h3 className="font-semibold text-lg text-[#1A1A1A] mb-2 tracking-tight">
                Made in small batches, the traditional way
              </h3>
              <p className="text-[15px] text-[#4A4E46] leading-relaxed font-light">
                Slow-simmered following time-tested Indian methods, with every batch made fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRESH, NOT PRESERVED (The Honest Trade-off) */}
      <section id="freshness" className="py-16 md:py-20 border-t border-[#E6E0D5] bg-[#F4EFE6] scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="rounded-[16px] bg-[#ECE5DA] text-[#2F3A2A] p-8 sm:p-12 lg:p-16 border border-[#D8CDB0]">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A8842C] font-semibold mb-3 block">
              FRESH, NOT PRESERVED
            </span>
            <h2
              className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal leading-snug mb-6 text-[#2F3A2A]"
              style={{ fontFamily: "Georgia, 'Playfair Display', serif" }}
            >
              An honest trade-off.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#4A4A3C] leading-relaxed font-light max-w-3xl">
              <p>
                Most shampoos are made to sit on a shelf for a long time. Ours isn't.
              </p>
              <p className="text-[#2F3A2A] font-medium">
                Because The Pure Herb has no preservatives, it stays fresh for 4-6 weeks and must be kept in the refrigerator.
              </p>
              <p>
                Use it fresh. Use it fast. Keep it cold. That's what fresh means.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D8CDB0] flex items-center space-x-3 text-sm sm:text-base text-[#6B6B5A] font-light">
              <span className="w-2 h-2 rounded-full bg-[#A8842C] shrink-0" />
              <p>Made in small batches. Stored refrigerated to stay fresh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-2xl mx-auto px-6 sm:px-8 pt-10 pb-24 md:pb-32">

        {/* 7. WAITLIST FORM */}
        <section id="waitlist" className="mb-16 scroll-mt-24">
          <div className="mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-normal mb-2">
              Join the Waitlist
            </h2>
            <p className="text-sm sm:text-base text-[#4A4E46] leading-relaxed font-light">
              We brew in strictly limited batches to guarantee freshness. Join the waitlist below to let us know your city and be notified first when our next batch is ready to brew.
            </p>
          </div>

          {/* Tally Embed Container with Dynamic Height and No Scrollbar */}
          <div className="bg-[#FAF8F5] rounded-lg border border-[#DDD5C7] p-3 sm:p-5 shadow-xs overflow-hidden">
            <iframe
              data-tally-src="https://tally.so/embed/rjzPpM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="200"
              frameBorder="0"
              title="Join the waitlist"
              className="w-full border-0 overflow-hidden"
            />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#E6E0D5] bg-[#EFE9DF] py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-2">
          <div className="font-serif text-xl text-[#1A1A1A] font-normal tracking-wider">
            The Pure Herb
          </div>
          <div className="text-xs text-[#5C645A] tracking-widest uppercase">
            thepureherb.in
          </div>
        </div>
      </footer>
    </div>
  );
}
