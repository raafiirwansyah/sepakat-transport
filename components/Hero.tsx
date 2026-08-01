export default function Hero() {
  return (
    <section id="home" className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-blue-700">
          Partner Perjalanan Terpercaya
          <br />
          di Banda Aceh
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl">
          Rental Mobil + Driver Profesional untuk wisata,
          perjalanan dinas, keluarga, dan berbagai kebutuhan
          transportasi Anda di Aceh.
        </p>

        <div className="mt-8 flex gap-4">

          <a
            href="https://wa.me/6282317777495"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Booking Sekarang
          </a>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
            Lihat Armada
          </button>

        </div>

      </div>
    </section>
  );
}