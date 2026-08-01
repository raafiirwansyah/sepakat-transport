"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Apakah harga sudah termasuk driver?",
      answer:
        "Ya, seluruh armada Sepakat Transport disewakan beserta driver profesional.",
    },
    {
      question: "Bagaimana cara melakukan booking?",
      answer:
        "Anda cukup menekan tombol Booking WhatsApp di website dan admin kami akan membantu proses pemesanan.",
    },
    {
      question: "Apakah melayani perjalanan luar kota?",
      answer:
        "Ya, kami melayani perjalanan dalam Kota Banda Aceh maupun ke berbagai daerah di Aceh.",
    },
    {
      question: "Apakah tersedia paket wisata Aceh?",
      answer:
        "Ya. Kami melayani perjalanan wisata ke berbagai destinasi di Aceh. Hubungi admin untuk rekomendasi rute dan penawaran terbaik.",
    },
    {
      question: "Metode pembayaran apa yang tersedia?",
      answer:
        "Pembayaran dapat dilakukan melalui transfer bank maupun sesuai kesepakatan dengan admin.",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-slate-900">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

        <p className="text-center text-slate-500 mt-6 mb-12">
          Temukan jawaban atas pertanyaan yang paling sering diajukan pelanggan
          kami.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between px-8 py-6 text-left font-semibold text-lg text-slate-900"
              >
                <span>{faq.question}</span>
                <span className="text-2xl text-blue-600">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="px-8 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}