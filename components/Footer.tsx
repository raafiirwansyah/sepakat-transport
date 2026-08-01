export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold">
            SEPAKAT TRANSPORT
          </h2>

          <p className="mt-4 text-gray-300">
            Partner Perjalanan Terpercaya di Banda Aceh.
            Menyediakan layanan rental mobil + driver
            untuk wisata, perjalanan dinas, dan keluarga.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-bold mb-4">
            Menu
          </h3>

          <ul className="space-y-2">
            <li><a href="#home">Home</a></li>
            <li><a href="#layanan">Layanan</a></li>
            <li><a href="#armada">Armada</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-bold mb-4">
            Hubungi Kami
          </h3>

          <p>📱 +62 823-1777-7495 | +62 812-6006-0801</p>
          <p>📍 Jl. Dr. Mr. Mohd. Hasan, Batoh, Banda Aceh</p>
          <p>🕒 24 Jam</p>
        </div>

      </div>

      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-gray-300">
        © 2026 Sepakat Transport. All Rights Reserved.
      </div>
    </footer>
  );
}