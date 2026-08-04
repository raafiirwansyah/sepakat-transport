export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-3xl font-black text-slate-900">
              SEPAKAT
            </h2>

            <p className="text-blue-600 tracking-[0.25em] uppercase font-semibold mt-1">
              Transport & Tour
            </p>

            <p className="text-gray-500 mt-4 max-w-md">
              Partner perjalanan terpercaya di Banda Aceh dengan
              armada berkualitas dan driver profesional.
            </p>
          </div>

          <div className="text-center md:text-right">

            <p className="font-semibold text-slate-800">
              Resevasi : +62 823-1777-7495 | +62 812-6006-0801
            </p>

            <p className="text-gray-500 mt-2">
              📍 Jl. Dr. Mohd. Hasan, Batoh No 89, Banda Aceh, Indonesia
            </p>

            <a
              href="https://wa.me/6282317777495"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Booking via WhatsApp
            </a>

          </div>

        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 text-center text-gray-500 text-sm">
  © 2024 SEPAKAT Transport & Tour. All Rights Reserved.
</div>

      </div>
    </footer>
  );
}