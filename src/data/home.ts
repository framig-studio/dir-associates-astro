import { waUrl } from "./global";
import type { CTA, Header, TrustStat } from "@/types";

const sliders = [
  {
    header: "Solusi Hukum Terpercaya untuk Perusahaan & Individu",
    sub_header:
      "Kami membantu Anda menyelesaikan permasalahan hukum dengan pendekatan strategis, terukur, dan berintegritas tinggi.",
    cta: "Konsultasi Gratis Sekarang",
    href: "https://wa.me/62822918789",
  },

  {
    header: "Spesialis Pengacara Kepailitan & PKPU Serta Bidang Hukum Lainnya",
    sub_header:
      "Berpengalaman menangani restrukturisasi utang, PKPU, hingga perkara pailit perusahaan dengan pendekatan strategis.",
    cta: "Jelajahi  Layanan",
    href: "/service",
  },

  {
    header: "Lindungi Bisnis & Aset Anda Hari Ini",
    sub_header:
      "Dapatkan solusi hukum yang terukur dan profesional untuk menjaga stabilitas bisnis Anda. Konsultasikan permasalahan Anda bersama tim kami hari ini.",
    cta: "Hubungi Kami",
    href: "https://wa.me/62822918789",
  },
];

export const homeData = {
  hero: {
    sliders: sliders,
    services: [
      "Advokat Konsultan Hukum",
      "Kurator dan Pengurus",
      "Kuasa Hukum Pajak",
      "Mediator",
    ],
    checklist: [
      "Professional dan terpercaya",
      "Jangkauan seluruh Indonesia",
      "Pendampingan penuh",
    ],
    teamSignature: "Dwi Oktorianto R., S.H., M.Kn., CRA. CTL. CM. & Tim",
  },
  trust: {
    stats: [
      { num: "99%", label: "Kepuasan Client" },
      { num: "100+", label: "Kasus Ditangani" },
      { num: "9th+", label: "Pengalaman Professional" },
      { num: "6", label: "Profesional Tim" },
    ] as TrustStat[],
  },
  aboutUs: {
    header: {
      text: "Siapakah",
      boldText: "Kami?",
    } as Header,
    companyName: "DIR & Associates",
    founderName: "Dwi Oktorianto R., S.H., M.Kn., CRA. CTL. CM.",
    description: [
      "Kami adalah firma hukum terpercaya di Surabaya yang menyediakan layanan sebagai Advokat, Konsultan Hukum, Kurator dan Pengurus, Kuasa Hukum Pajak, serta Mediator.",
      "Dengan pengalaman luas dan dedikasi tinggi, kami berkomitmen memberikan pelayanan hukum berkualitas, menjunjung nilai dan etika hukum, serta patuh terhadap peraturan yang berlaku. Kami hadir sebagai jembatan keadilan bagi setiap klien, memahami kebutuhan yang beragam, dan siap menjadi mitra hukum yang profesional serta dapat diandalkan.",
    ],
    cta: {
      text: "Konsultasikan Sekarang",
      href: waUrl,
    } as CTA,
  },
  service: {
    header: {
      text: "Solusi Penyelesaian",
      boldText: "Masalah Hukum yang Efisien",
    } as Header,
    description:
      "Kami menyediakan berbagai layanan hukum untuk membantu Anda menyelesaikan masalah hukum dengan efisien.",
  },
  testimonials: {
    header: {
      text: "Apa kata mereka",
      boldText: "setelah memakai jasa kami?",
    } as Header,
  },
  team: {
    header: {
      text: "Mari Bertemu",
      boldText: "Tim Professional Dari Kami",
    } as Header,
    description:
      "Layanan kami 24/7 hanya untuk membantu memberikan solusi untuk anda",
    cta: {
      text: "Hubungi Kami",
      href: waUrl,
    } as CTA,
  },
};
