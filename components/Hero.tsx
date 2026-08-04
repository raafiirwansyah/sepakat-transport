import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      {/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-blue-950/70 to-black/50"></div>

<div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-20">

  <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* KIRI */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">

            <div className="mb-8">

  <h2 className="text-5xl md:text-6xl font-black tracking-wide text-white">
    SEPAKAT
  </h2>

  <p className="text-blue-400 text-2xl font-semibold tracking-[0.25em] uppercase mt-2">
    Transport & Tour
  </p>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Partner Perjalanan
              <br />
              Terpercaya di Banda Aceh
            </h1>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Melayani perjalanan wisata, bisnis, keluarga,
              corporate, city tour, dan kebutuhan transportasi
              dengan armada terbaik serta driver profesional.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://wa.me/6282317777495"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-xl"
              >
                Booking via WhatsApp
              </a>

              <a
                href="#armada"
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                Lihat Armada
              </a>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-12">

  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition">

    <div className="text-3xl mb-2">🚗</div>

    <h4 className="text-white font-bold">
      Armada Terawat
    </h4>

    <p className="text-gray-300 text-sm">
      Bersih & Nyaman
    </p>

  </div>

  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition">

    <div className="text-3xl mb-2">👨‍✈️</div>

    <h4 className="text-white font-bold">
      Driver Profesional
    </h4>

    <p className="text-gray-300 text-sm">
      Ramah & Berpengalaman
    </p>

  </div>

  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition">

    <div className="text-3xl mb-2">🛡️</div>

    <h4 className="text-white font-bold">
      Aman & Nyaman
    </h4>

    <p className="text-gray-300 text-sm">
      Prioritas Utama Kami
    </p>

  </div>

  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition">

    <div className="text-3xl mb-2">📍</div>

    <h4 className="text-white font-bold">
      Seluruh Aceh
    </h4>

    <p className="text-gray-300 text-sm">
      Siap Melayani
    </p>

  </div>

</div>

            </div>

          </div>

          {/* KANAN */}
          {/* Kanan */}
<div className="hidden lg:flex justify-center">

  <div className="relative overflow-hidden rounded-[32px] shadow-2xl border border-white/20">

    <Image
      src="/images/hero-armada.jpg"
      alt="Armada Sepakat Transport"
      width={700}
      height={900}
      priority
      className="w-[520px] h-[620px] object-cover object-right hover:scale-105 transition-all duration-700"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

    {/* Badge */}
    <div className="absolute bottom-6 left-6 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4">

      <p className="text-sm text-blue-300 font-semibold uppercase">
        SEPAKAT TRANSPORT & TOUR
      </p>

      <h3 className="text-2xl font-bold text-white mt-1">
        Partner Perjalanan
      </h3>

      <p className="text-gray-200 mt-2">
        Bersih • Nyaman • Driver Profesional
      </p>

    </div>

  </div>

</div>

        </div>   {/* grid */}

      </div>   {/* container */}

    </section>
  );
}