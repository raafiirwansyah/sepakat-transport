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
        "Proses booking mudah dan armadanya bersih, rapih & terawat plus drivernya sopan, ramah & asik buat curhat hehe. Pasti akan menggunakan lagi.",
    },
    {
      name: "Ahmad Yoyon",
      city: "Cimahi, Jawa Barat",
      review:
        "Driver nya sangat sangat on time cocok untuk perjalanan Dinas, padahal booking nya sehari sebelum saya berangkat ke Banda Aceh.",
    },
    {
      name: "Aurelia USK",
      city: "Banda Aceh",
      review:
        "Drivernya asik bisa menyatu dengan kami para GEN Z, Unitnya juga oke semua. Maaf ya bang mobilnya kita ajak main lumpur di Goyo Lues hehehe",
    },
  ];

  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">
          Apa Kata Pelanggan Kami?
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-12">
          Kepuasan pelanggan adalah prioritas utama kami.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-gray-50 rounded-xl shadow p-6"
            >
              <div className="text-yellow-500 text-xl mb-3">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}