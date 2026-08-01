export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Hubungi Kami
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Siap membantu perjalanan Anda di Banda Aceh dan sekitarnya.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* Informasi */}
          <div className="space-y-6">

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
  <h3 className="font-bold text-xl text-slate-900">
    📱 WhatsApp
  </h3>

  <a
    href="https://wa.me/6282317777495"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-3 text-blue-600 hover:underline"
  >
    +62 823-1777-7495
  </a>

  <p className="text-slate-600 mt-2">
    +62 812-6006-0801
  </p>
</div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
  <h3 className="font-bold text-xl text-slate-900">
    📍 Area Layanan
  </h3>

  <p className="mt-3 text-slate-600">
    Banda Aceh, Aceh Besar, dan seluruh wilayah Aceh.
  </p>
</div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
  <h3 className="font-bold text-xl text-slate-900">
    🕒 Jam Operasional
  </h3>

  <p className="mt-3 text-slate-600">
    Reservasi 24 Jam.
  </p>
</div>

          </div>

          {/* Maps Placeholder */}
          <div className="bg-slate-100 rounded-2xl h-80 flex flex-col items-center justify-center border border-slate-200">
  <div className="text-6xl">📍</div>

  <p className="mt-4 text-slate-600">
    Google Maps sedang di refresh.
  </p>
</div>

        </div>

      </div>
    </section>
  );
}