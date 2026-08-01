export default function Armada() {
  const cars = [
    "All New Avanza",
    "New Xpander",
    "Innova Reborn",
    "Innova Zenix",
    "Fortuner",
    "Pajero",
    "Hiace Premio",
    "Hiace Commuter",
  ];

  return (
    <section id="armada" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Armada Kami
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Pilihan armada terbaik untuk berbagai kebutuhan perjalanan Anda.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cars.map((car) => (
            <div
              key={car}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-52 bg-gray-300 flex items-center justify-center text-gray-600">
                Foto Armada
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {car}
                </h3>

                <p className="text-gray-500 mt-2">
                  Nyaman, bersih, dan siap menemani perjalanan Anda.
                </p>

                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}