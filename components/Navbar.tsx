import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex gap-6">
            <span></span>
            <span></span>
          </div>

          <div>
            <a
              href="https://wa.me/6282317777495"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="#home">
            <Image
              src="/logo/logo-sepakat.png"
              alt="Sepakat Transport"
              width={180}
              height={60}
              priority
            />
          </a>

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">

            <li>
              <a href="#home" className="hover:text-blue-700 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#layanan" className="hover:text-blue-700 transition">
                Layanan
              </a>
            </li>

            <li>
              <a href="#armada" className="hover:text-blue-700 transition">
                Armada
              </a>
            </li>

            <li>
              <a href="#keunggulan" className="hover:text-blue-700 transition">
                Keunggulan
              </a>
            </li>

            <li>
              <a href="#faq" className="hover:text-blue-700 transition">
                FAQ
              </a>
            </li>

            <li>
              <a href="#kontak" className="hover:text-blue-700 transition">
                Kontak
              </a>
            </li>

          </ul>

          {/* Button */}
          <a
            href="https://wa.me/6282317777495"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition duration-300"
          >
            Booking Sekarang
          </a>

        </div>
      </nav>
    </>
  );
}