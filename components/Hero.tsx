export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/hero-transport.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        
        <div className="max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">

          <p className="text-blue-300 font-semibold text-lg mb-4">
            SEPAKAT TRANSPORT & TOUR
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Partner Perjalanan
            <br />
            Terpercaya di Banda Aceh
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            Rental Mobil + Driver Profesional untuk wisata,
            perjalanan bisnis, keluarga, dan kebutuhan transportasi
            Anda dengan layanan aman, nyaman, dan tepat waktu.
          </p>


          <div className="mt-8 flex flex-wrap gap-4">

            <a
  href="https://wa.me/6282317777495"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition-all duration-300"
>
  Booking WhatsApp
</a>


            <a
              href="#armada"
              className="border border-white text-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Lihat Armada
            </a>

          </div>


          <div className="mt-10 flex flex-wrap gap-8 text-white">

            <div>
              <h3 className="text-2xl font-bold">
                Premium
              </h3>
              <p className="text-gray-300">
                Armada Nyaman
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Profesional
              </h3>
              <p className="text-gray-300">
                Driver Berpengalaman
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Aceh
              </h3>
              <p className="text-gray-300">
                Area Layanan
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}