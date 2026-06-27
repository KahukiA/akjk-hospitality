export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-yellow-600">
        <h1 className="text-3xl font-bold text-yellow-500">
          AKJK Hospitality
        </h1>

        <div className="flex gap-8 text-lg">
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <a href="#training" className="hover:text-yellow-500">Training</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-32">
        <h2 className="text-6xl font-bold text-yellow-500 mb-6">
          Welcome to AKJK Hospitality
        </h2>

        <p className="max-w-3xl text-2xl text-gray-300 mb-10">
          Hospitality Consulting • Restaurant & Bar Management • Staff Training •
          SOP Development • WSET Education
        </p>

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 transition">
          Book a Consultation
        </button>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-20 bg-zinc-900">
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">About Us</h2>

        <p className="text-xl leading-9 text-gray-300 max-w-5xl">
          AKJK Hospitality provides world-class hospitality consulting,
          restaurant operations management, food and beverage training,
          hospitality recruitment, SOP development, and WSET educational
          resources across East Africa.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="px-10 py-20">
        <h2 className="text-4xl font-bold text-yellow-500 mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Restaurant Consulting
            </h3>
            <p>Operational excellence, menu engineering, cost control, and guest experience improvement.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Hospitality Training
            </h3>
            <p>Professional food & beverage, customer service, and leadership training programs.</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              WSET Study Support
            </h3>
            <p>Wine, spirits, beer, and beverage education resources for hospitality professionals.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-yellow-500 text-black text-center py-20"
      >
        <h2 className="text-4xl font-bold mb-6">
          Let's Grow Your Hospitality Business
        </h2>

        <p className="text-xl">
          Email: info@akjkhospitality.com
        </p>

        <p className="text-xl">
          Dar es Salaam • Nairobi • East Africa
        </p>
      </section>
    </main>
  );
}