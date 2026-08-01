export default function Armada() {
  const cars = [
  {
    name: "All New Avanza",
    capacity: "6–7 Penumpang",
  },
  {
    name: "New Xpander",
    capacity: "6–7 Penumpang",
  },
  {
    name: "Innova Reborn",
    capacity: "6–7 Penumpang",
  },
  {
    name: "Innova Zenix",
    capacity: "6–7 Penumpang",
  },
  {
    name: "Fortuner",
    capacity: "6–7 Penumpang",
  },
  {
    name: "Pajero Sport",
    capacity: "6–7 Penumpang",
  },
  {
    name: "Hiace Premio",
    capacity: "10–12 Penumpang",
  },
  {
    name: "Hiace Commuter",
    capacity: "12–15 Penumpang",
  },
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
              key={car.name}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-300 flex flex-col items-center justify-center">
  <div className="text-6xl">🚘</div>
  <p className="mt-3 text-slate-600 font-medium">
    Foto Armada
  </p>
</div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {car.name}
                </h3>

                <div className="mt-3 space-y-2 text-sm text-slate-600">
  <p>👥 {car.capacity}</p>
  <p>👨‍✈️ Driver Profesional</p>
  <p>❄️ Full AC</p>
</div>

                <a
  href="https://wa.me/6282317777495"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition"
>
  Booking Sekarang
</a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}