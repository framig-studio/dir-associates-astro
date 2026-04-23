import { waUrl } from "./global";
import type { CTA } from "@/types";

export const serviceData = {
  hero: {
    title: "Solusi Penyelesaian Masalah Hukum yang Efisien",
    description:
      "Kami menyediakan berbagai layanan hukum untuk membantu Anda menyelesaikan masalah hukum dengan efisien.",
    cta: {
      text: "Konsultasi Gratis Sekarang",
      href: waUrl,
    } as CTA,
  },
  services: [
    {
      title: "Kepailitan",
      desc: "Penilaian keuangan, restrukturisasi, negosiasi dengan kreditor, perlindungan hukum, pemantauan aset, pemilihan jenis kebangkrutan, dan pembimbingan selama proses kebangkrutan.",
    },
    {
      title: "PKPU",
      desc: "Bantuan hukum untuk PKPU (Penundaan Kewajiban Pembayaran Utang) bagi berbagai pihak yang terlibat utang piutang.",
    },
    {
      title: "Hukum Properti",
      desc: "Membantu dalam transaksi jual beli, penyusunan kontrak sewa menyewa, penyelesaian sengketa tanah, dan perizinan properti.",
    },
    {
      title: "Hukum Bisnis",
      desc: "Penilaian keuangan, restrukturisasi, negosiasi dengan kreditor, perlindungan hukum, pemantauan aset, pemilihan jenis kebangkrutan, dan pembimbingan selama proses kebangkrutan.",
    },
    {
      title: "Hukum Perusahaan",
      desc: "Penilaian keuangan, restrukturisasi, negosiasi dengan kreditor, perlindungan hukum, pemantauan aset, pemilihan jenis kebangkrutan, dan pembimbingan selama proses kebangkrutan.",
    },
    {
      title: "Perpajakan",
      desc: "Perencanaan pajak, penghindaran pajak, penyelesaian sengketa perpajakan, pengelolaan kewajiban pajak, dan pemantauan perubahan hukum perpajakan.",
    },
    {
      title: "Hukum Waris",
      desc: "Penyelesaian sengketa antar ahli waris terkait pembagian harta, gugatan pembagian harta warisan, gugatan pengembalian aset warisan, permohonan sita jaminan atas harta warisan.",
    },
    {
      title: "Perdata",
      desc: "Gugatan perceraian, pembagian gono-gini, adopsi, ganti nama, sengketa waris, pertanahan, gugatan wanprestasi & gugatan perdata lainnya.",
    },
    {
      title: "Pidana",
      desc: "Penipuan, penggelapan, perzinahan, pencemaran nama baik, pemalsuan surat, kekerasan dalam rumah tangga, kasus narkotika, serta kasus pidana lainnya",
    },
  ],
};

// Export for backward compatibility
export const service = serviceData.services;
