export default function Testimonial() {
  const testimonials = [
    {
      name: "Andy PT SAI",
      city: "Banda Aceh",
      review:
        "Pelayanannya sangat ramah, mobil bersih, dan driver tepat waktu. Sangat direkomendasikan buat kamu yang ingin ke aceh!",
    },
    {
      name: "Siti Maniezz",
      city: "Medan",
      review:
        "Liburan ke Aceh jadi lebih nyaman bersama Sepakat Transport. Terima kasih!",
    },
    {
      name: "Budi Triyono",
      city: "Jakarta Barat",
      review:
        "Proses booking mudah dan armadanya bersih, rapih & terawat plus drivernya sopan, ramah & komunikatif sehingga perjalanan terasa nyaman. Pasti akan menggunakan lagi.",
    },
    {
      name: "Ahmad Yoyon",
      city: "Cimahi, Jawa Barat",
      review:
        "Driver tepat waktu dan profesional. Proses booking juga cepat meskipun dilakukan sehari sebelum keberangkatan ke Banda Aceh.",
    },
    {
      name: "Aurelia USK",
      city: "Banda Aceh",
      review:
        "Drivernya asik bisa menyatu dengan kami para GEN Z, Unitnya juga oke semua. Maaf ya bang mobilnya kita ajak main lumpur di Goyo Lues hehehe",
    },
  ];

  return (
    <section id="testimoni" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-slate-900">
          Apa Kata Pelanggan Kami?
        </h2><div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

        <p className="text-center text-gray-500 mt-4 mb-12">
          Kepuasan pelanggan adalah prioritas utama kami.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl text-blue-200 leading-none mb-3">
  "
</div>

<div className="text-yellow-500 text-xl mb-3">
  ⭐⭐⭐⭐⭐
</div>

<p className="text-slate-600 italic leading-7">
  "{item.review}"
</p>

<div className="mt-6">
  <h3 className="font-bold text-slate-900">
    {item.name}
  </h3>

  <p className="text-sm text-slate-500">
    {item.city}
  </p>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}