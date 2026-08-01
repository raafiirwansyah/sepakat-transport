export default function Features() {
  const features = [
    {
      title: "Armada Bersih & Terawat",
      description: "Semua kendaraan selalu dibersihkan dan dicek sebelum digunakan.",
      icon: "🚗",
    },
    {
      title: "Driver Profesional",
      description: "Driver ramah, berpengalaman, dan mengutamakan keselamatan.",
      icon: "👨‍✈️",
    },
    {
      title: "Tepat Waktu",
      description: "Kami menghargai waktu pelanggan dalam setiap perjalanan.",
      icon: "⏰",
    },
    {
      title: "Aman & Nyaman",
      description: "Perjalanan lebih tenang bersama Sepakat Transport.",
      icon: "🛡️",
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">
          Mengapa Memilih Sepakat Transport?
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-12">
          Komitmen kami adalah memberikan pengalaman perjalanan terbaik untuk setiap pelanggan.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}