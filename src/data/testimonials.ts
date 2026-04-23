import type { Header } from "@/types";

export interface Testimonial {
  name: string;
  date: Date;
  content: string;
}

export const testimonialsData = {
  header: {
    text: "Apa kata mereka",
    boldText: "setelah memakai jasa kami",
  } as Header,
  testimonials: [
    {
      name: "Muhammad Irfan Ardiansyah",
      date: new Date("2026-04-22"),
      content:
        "Terima kasih atas dedikasinya dalam menangani kasus. Terbaik! Sukses selalu Pak Okto & Tim.",
    },
    {
      name: "Onny Pandika",
      date: new Date("2026-04-21"),
      content:
        "Sangat membantu dalam urusan hukum. Team yang ada sangat berpengalaman. Jangan ragu menghubungi beliau jika membutuhkan bantuan hukum.",
    },
    {
      name: "Mukhsin Saleh",
      date: new Date("2026-04-21"),
      content:
        "Pak dwi ockto saya kenal sangat baik dan tg jawab dlm hal semua kasus clainnya beliau komitmen dan kinerjanya sangat memuaskan bagi pencari keadilan kelebihan pak octo tdk orientasi ke cuan tat kala membela orang yg lemah bangga indonesia memiliki pengacara yg hebat demi membela yg hak orang2 yg terdzolimi",
    },
    {
      name: "Livia Salim",
      date: new Date("2025-12-12"),
      content:
        "Pak Otto, seorang pengacara yang baik dan bertggjawab, proses lancar dan sukses, terima kasih bnyk Pak Otto dan Team, sukses terus Pak Otto SBY",
    },
    {
      name: "Junias Andrian",
      date: new Date("2025-10-05"),
      content:
        "Pengacara sangat berpengalaman, proses dari awal hingga akhir dibantu dengan mulus dan hasilnya cepat, sangat memuaskan",
    },
    {
      name: "Hubert Jong",
      date: new Date("2025-12-17"),
      content:
        'Pengacara andal, tidak neko" dan sangat membantu selesaikan proses perkara sampai tuntas. Mantull pak dwi',
    },
  ],
};

// Export for backward compatibility
export const testimonials = testimonialsData.testimonials;
