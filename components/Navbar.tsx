import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/logo-sepakat.png"
            alt="Sepakat Transport"
            width={200}
            height={70}
            priority
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
  <a
    href="#home"
    className="hover:text-blue-600 transition duration-300"
  >
    Home
  </a>
</li>
<li>
  <a
    href="#armada"
    className="hover:text-blue-600 transition duration-300"
  >
    Armada
  </a>
</li>

<li>
  <a
    href="#layanan"
    className="hover:text-blue-600 transition duration-300"
  >
    Layanan
  </a>
</li>

<li>
  <a
    href="#tentang"
    className="hover:text-blue-600 transition duration-300"
  >
    Tentang
  </a>
</li>

<li>
  <a
    href="#kontak"
    className="hover:text-blue-600 transition duration-300"
  >
    Kontak
  </a>
</li>
        </ul>

        {/* Tombol Booking */}
        <a
          href="https://wa.me/6282317777495"
  target="_blank"
  rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:scale-105"
        >
          Booking WhatsApp
        </a>

      </div>
    </nav>
  );
}