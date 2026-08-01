export default function Services() {
  const services = [
    {
      icon: "🚗",
      title: "Rental Mobil + Driver",
      description:
        "Layanan rental mobil dengan driver profesional untuk perjalanan yang aman dan nyaman di aceh.",
    },
    {
      icon: "🌄",
      title: "Wisata Aceh",
      description:
        "Nikmati perjalanan wisata ke berbagai destinasi terbaik di Aceh bersama Sepakat Transport and Tour.",
    },
    {
      icon: "💼",
      title: "Perjalanan Dinas",
      description:
        "Solusi transportasi untuk kebutuhan bisnis, pemerintahan, dan perjalanan kerja.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Perjalanan Keluarga",
      description:
        "Armada yang nyaman untuk liburan keluarga, acara, maupun perjalanan bersama rombongan.",
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-700">
            Layanan Kami
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Sepakat Transport siap melayani berbagai kebutuhan perjalanan Anda
            dengan armada yang nyaman dan driver profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}