import okto from "@/assets/about-us/okto.png";
import citra from "@/assets/about-us/citra.png";
import samuel from "@/assets/about-us/samuel.png";
import { waUrl } from "./global";
import type { CTA, TrustStat } from "@/types";

export const aboutData = {
  hero: {
    title: "Mengenal Lebih Jauh Tentang Kami",
    description: "Kami adalah firma hukum terpercaya di Surabaya yang menyediakan layanan sebagai Advokat, Konsultan Hukum, Kurator dan Pengurus, Kuasa Hukum Pajak, serta Mediator.",
    cta: {
      text: "Hubungi Kami",
      href: waUrl,
    } as CTA,
  },
  quote: "Dengan pengalaman luas dan dedikasi tinggi, kami berkomitmen memberikan pelayanan hukum berkualitas, menjunjung nilai dan etika hukum, serta patuh terhadap peraturan yang berlaku. Kami hadir sebagai jembatan keadilan bagi setiap klien, memahami kebutuhan yang beragam, dan siap menjadi mitra hukum yang profesional serta dapat diandalkan.",
  stats: [
    { num: "99%", label: "Kepuasan Client" },
    { num: "100+", label: "Kasus Ditangani" },
    { num: "9th+", label: "Pengalaman Professional" },
    { num: "6", label: "Profesional Tim" },
  ] as TrustStat[],
  visionMission: {
    vision: {
      title: "Visi Kami",
      description: "Menjadi mitra yang terpercaya dan terkemuka dalam memberikan layanan hukum yang berkualitas dan inovatif, serta berkontribusi positif dalam mewujudkan keadilan dan kesejahteraan masyarakat."
    },
    mission: {
      title: "Misi Kami",
      items: [
        "Memberikan pelayanan hukum yang profesional dan berkualitas tinggi kepada klien kami, dengan memperhatikan nilai-nilai etika dan integritas yang tinggi.",
        "Mengedepankan pendekatan yang holistik dan solusi yang inovatif dalam menangani setiap permasalahan hukum klien kami.",
        "Membangun hubungan yang kuat dan saling percaya dengan klien, serta berkomitmen untuk menjaga kerahasiaan informasi yang diberikan.",
        "Terus mengembangkan diri melalui peningkatan kompetensi dan pengetahuan hukum, sehingga dapat memberikan layanan yang lebih baik kepada klien."
      ]
    }
  },
  team: {
    header: "Tim Kami",
    description: "Tim hukum profesional yang berdedikasi untuk melayani kebutuhan hukum Anda dengan integritas dan keahlian yang teruji serta komitmen tinggi terhadap keberhasilan setiap kasus.",
    members: [
      {
        name: "Dwi Oktorianto R., S.H., M.Kn., CRA. CTL. CM.",
        level: "Managing Partner",
        image: okto,
      },
      {
        name: "Citra Solvia Hadi Meilia, S.H., M.H",
        level: "Partner",
        image: citra,
      },
      {
        name: "Samuel Hadi Prabowo, S.H.",
        level: "Partner",
        image: samuel,
      },
    ]
  }
};
