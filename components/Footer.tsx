export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

<div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Kiri */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Rental Mobil + Driver Profesional
          </span>

          <h1 className="text-5xl font-bold text-gray-900 mt-6 leading-tight">
            Partner Perjalanan
            <br />
            Terpercaya di
            <span className="text-blue-600"> Banda Aceh</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Sepakat Transport melayani perjalanan wisata,
            perjalanan dinas, keluarga, corporate,
            hingga antar kota dengan armada yang bersih,
            nyaman, dan driver profesional.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://wa.me/6282317777495"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition"
            >
              Booking via WhatsApp
            </a>

            <a
              href="#armada"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-7 py-4 rounded-xl font-semibold transition"
            >
              Lihat Armada
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10 text-gray-700">

            <div>✅ Driver Profesional</div>
            <div>✅ Armada Bersih</div>
            <div>✅ Tepat Waktu</div>
            <div>✅ Harga Transparan</div>

          </div>
        </div>

        {/* Kanan */}
        <div className="flex justify-center">
          <div className="w-full h-[420px] rounded-3xl bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center text-gray-600 text-xl font-semibold shadow-xl">
            Foto Armada
          </div>
        </div>

      </div>
    </section>
  );
}