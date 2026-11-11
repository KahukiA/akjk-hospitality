import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EastAfricaMap from "@/components/EastAfricaMap";
import CrestWatermarkSlot from "@/components/CrestWatermarkSlot";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#1E1E1E]">
      <Navbar />
      <section
        className="relative flex min-h-[620px] items-start overflow-hidden px-6 pb-16 pt-16 md:min-h-[700px] md:pb-20 md:pt-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.80), rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A72C]">Contact AK&JK Hospitality</p>
          <h1 className="mt-4 whitespace-normal text-[clamp(2rem,4vw,4rem)] font-extrabold leading-tight text-white lg:whitespace-nowrap">Let’s Start a Conversation</h1>
          <p className="mx-auto mt-5 max-w-4xl whitespace-normal text-lg leading-8 text-white/90 lg:whitespace-nowrap">Tell us about your hospitality business and the support you need.</p>
        </div>
      </section>
      <section className="bg-[#F7F3EA] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#1E1E1E]">How We Can Help</h2>
            <p className="mt-5 leading-8 text-[#1E1E1E]">Our team supports consulting, management, training, cost control and operational improvement projects across East Africa.</p>
            <p className="mt-6 font-semibold text-[#B8860B]">Kenya • Tanzania • Uganda • Rwanda</p>

            <div className="mt-8 space-y-4 rounded-xl border border-[#D6D3D1] bg-white p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#B8860B]">Phone</p>
                <a href="tel:+254786182833" className="mt-2 inline-block text-lg text-[#1E1E1E] hover:text-[#C89211]">+254 786 182 833</a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#B8860B]">Phone</p>
                <a href="tel:+255659359005" className="mt-2 inline-block text-lg text-[#1E1E1E] hover:text-[#C89211]">+255 659 359 005</a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#B8860B]">Email</p>
                <a className="text-[#1E1E1E] hover:text-[#C89211]" href="mailto:austinkahuki@outlook.com">
                  austinkahuki@outlook.com
                </a>
              </div>
            </div>
          </div>
          <div>
          <form className="space-y-5 rounded-xl border border-[#D6D3D1] bg-white p-7">
            <div><label className="block text-sm font-semibold" htmlFor="name">Name</label><input id="name" name="name" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3" /></div>
            <div><label className="block text-sm font-semibold" htmlFor="email">Email</label><input id="email" name="email" type="email" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3" /></div>
            <div><label className="block text-sm font-semibold" htmlFor="message">How can we help?</label><textarea id="message" name="message" rows={5} className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3" /></div>
            <p className="text-sm text-[#9CA3AF]">Submit handling can be connected to your preferred email or form service.</p>
            <button type="button" className="rounded-md bg-[#B8860B] px-6 py-3 font-semibold text-white">Send Inquiry</button>
          </form>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl items-center gap-6 px-6 md:grid-cols-2">
          <CrestWatermarkSlot className="min-h-[220px]" crestClassName="h-48 w-56" />
          <EastAfricaMap className="ml-auto w-full max-w-[360px]" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
