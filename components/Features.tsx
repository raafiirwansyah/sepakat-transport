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
    <section id="keunggulan" className="py-20 bg-slate-50">
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
  className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
>
  <div className="text-5xl mb-4">
    {item.icon}
  </div>

  <h3 className="font-bold text-xl text-slate-900 mb-3">
    {item.title}
  </h3>

  <p className="text-slate-600 text-sm leading-6">
    {item.description}
  </p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}