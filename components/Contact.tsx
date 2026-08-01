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

            <div>
              <h3 className="font-bold text-xl">📱 WhatsApp</h3>
              <a
                href="https://wa.me/6282317777495"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                +62 823-1777-7495 | +62 812-6006-0801
              </a>
            </div>

            <div>
              <h3 className="font-bold text-xl">📍 Area Layanan</h3>
              <p>Banda Aceh & Seluruh Wilayah Aceh</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">🕒 Jam Operasional</h3>
              <p>24 Jam (Reservasi)</p>
            </div>

          </div>

          {/* Maps Placeholder */}
          <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
            Google Maps Akan Ditampilkan Di Sini
          </div>

        </div>

      </div>
    </section>
  );
}