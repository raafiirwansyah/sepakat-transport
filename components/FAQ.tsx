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
      question: "Metode pembayaran apa yang tersedia?",
      answer:
        "Pembayaran dapat dilakukan melalui transfer bank maupun pembayaran sesuai kesepakatan dengan admin.",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full text-left px-6 py-5 font-semibold flex justify-between"
              >
                {faq.question}
                <span>{active === index ? "-" : "+"}</span>
              </button>

              {active === index && (
                <div className="px-6 pb-5 text-gray-600">
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