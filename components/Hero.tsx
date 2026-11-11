import BrandCrest from "./BrandCrest";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#08090B] text-center text-[#F8F5EE] md:min-h-[calc(100svh-76px)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[44%] bg-cover bg-[center_58%] brightness-[0.58] sm:h-[49%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1782413263988-11f7178cf385?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=85&w=2400')",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-[#08090B] via-[#08090B]/60 to-[#08090B]/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-[#C38234]/15 via-transparent to-transparent mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-[#C89211]/[0.08] blur-3xl sm:top-16 sm:h-80 sm:w-80"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pb-64 pt-8 sm:px-8 sm:pb-72 sm:pt-10 md:pb-[22rem] md:pt-12">
        <BrandCrest className="h-[112px] w-[128px] drop-shadow-[0_0_18px_rgba(212,167,44,0.16)] sm:h-[145px] sm:w-[164px]" />

        <p className="mt-1 text-[3.45rem] font-medium leading-[0.98] tracking-[-0.065em] text-[#F8F5EE] sm:text-[5.3rem] lg:text-[6.5rem]">
          AK&amp;JK
        </p>

        <h1 className="mt-3 text-[1.08rem] font-semibold uppercase leading-tight tracking-[0.14em] text-[#F8F5EE] sm:mt-4 sm:text-[1.55rem] sm:tracking-[0.2em] lg:text-[1.8rem]">
          <span className="block">Hospitality Consultancy</span>
          <span className="mt-1 block text-[#E7DFD1]">&amp; Academy</span>
        </h1>

        <div className="mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#D4A72C] sm:mt-6 sm:gap-x-4 sm:text-[0.76rem] sm:tracking-[0.19em]">
          <span>Hospitality Consultancy</span>
          <span aria-hidden="true" className="text-[#F2C765]">•</span>
          <span>Professional Training</span>
          <span aria-hidden="true" className="text-[#F2C765]">•</span>
          <span>Business Solutions</span>
        </div>

        <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#D4A72C] to-transparent sm:mt-6" />

        <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#F8F5EE] sm:text-sm sm:tracking-[0.28em]">
          Knowledge <span className="px-1.5 text-[#D4A72C]">•</span> Service
          <span className="px-1.5 text-[#D4A72C]">•</span> Excellence
        </p>

        <p className="mt-4 max-w-2xl text-sm italic leading-relaxed text-[#E0B354] sm:mt-5 sm:text-lg lg:text-xl">
          Developing People <span className="px-1 text-[#D4A72C]">•</span>
          Elevating Hospitality <span className="px-1 text-[#D4A72C]">•</span>
          Delivering Excellence
        </p>
      </div>
    </section>
  );
}
