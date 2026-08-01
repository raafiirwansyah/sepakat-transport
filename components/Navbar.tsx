import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div>
          <Image
            src="/logo/logo-sepakat.png"
            alt="Sepakat Transport & Tour"
            width={200}
            height={65}
            priority
          />
        </div>


        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li>
            <a href="#home" className="hover:text-blue-300 transition">
              Home
            </a>
          </li>


          <li>
            <a href="#layanan" className="hover:text-blue-300 transition">
              Layanan
            </a>
          </li>


          <li>
            <a href="#armada" className="hover:text-blue-300 transition">
              Armada
            </a>
          </li>


          <li>
            <a href="#keunggulan" className="hover:text-blue-300 transition">
              Keunggulan
            </a>
          </li>


          <li>
            <a href="#faq" className="hover:text-blue-300 transition">
              FAQ
            </a>
          </li>


          <li>
            <a href="#kontak" className="hover:text-blue-300 transition">
              Kontak
            </a>
          </li>

        </ul>


        {/* Booking Button */}
        <a
          href="https://wa.me/6282317777495"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Booking Sekarang
        </a>


      </div>

    </nav>
  );
}