import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-6 py-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-500">ObiresOffice</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col mt-4 gap-4 md:hidden bg-white text-black p-4 rounded-xl shadow">
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <div className="font-sans">

      <Navbar />

      {/* HERO */}
      <section className="bg-[#0f172a] text-white text-center py-20 px-4 md:px-6">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
          We Build Websites That Convert 🚀
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm md:text-lg">
          Modern, fast, and responsive websites designed to grow your business and increase sales.
        </p>

        <button className="bg-blue-500 px-5 py-3 rounded-xl hover:bg-blue-600">
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Services
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Web Design</h3>
            <p className="text-gray-600">Clean, modern UI design.</p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Development</h3>
            <p className="text-gray-600">Fast and scalable websites.</p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">SEO</h3>
            <p className="text-gray-600">Improve your Google ranking.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          What Clients Say
        </h2>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-600 mb-4">
              "Amazing work! My website looks incredible."
            </p>
            <h4 className="font-semibold">— John D.</h4>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-600 mb-4">
              "Very fast and professional!"
            </p>
            <h4 className="font-semibold">— Sarah M.</h4>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Pricing</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Basic</h3>
            <p className="text-2xl font-bold mb-4">$100</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Choose
            </button>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Standard</h3>
            <p className="text-2xl font-bold mb-4">$250</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Choose
            </button>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">Premium</h3>
            <p className="text-2xl font-bold mb-4">$500</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Choose
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0f172a] text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Let’s Build Your Website
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="mailto:youremail@gmail.com"
            className="bg-blue-500 px-6 py-3 rounded-xl"
          >
            Email Me
          </a>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="border border-gray-500 px-6 py-3 rounded-xl"
          >
            WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}