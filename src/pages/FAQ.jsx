/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <>
      <Navbar />

      <section className="px-16 md:px-9 2sm:px-5 m-auto bg-DS-beige dark:bg-DS-charcoal">
        <div className=" text-center mt-24 py-10 sm:py-8">
          <h1 className="font-bold text-4xl sm:text-2xl text-DS-verdigris dark:text-DS-orangecarrot">Pertanyaan yang Sering Diajukan</h1>
          <h2 className="font-semibold text-2xl sm:text-lg p-2 dark:text-white">(Frequently Asked Question)</h2>
          <hr className="w-48 sm:w-32 h-1 sm:h-0.5 mx-auto mb-5 bg-DS-verdigris border-0 rounded dark:text-DS-orangecarrot"></hr>
        </div>

        <div className="space-y-4 text-lg md:text-base mb-16">
          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apa itu bahasa isyarat?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              Bahasa isyarat adalah bahasa visual-gestural yang digunakan oleh komunitas tuli untuk berkomunikasi. Bahasa ini menggunakan gerakan tangan, ekspresi wajah, dan postur tubuh untuk menyampaikan informasi.
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apakah bahasa isyarat yang berlaku di setiap daerah dan/atau negara sama?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              Bahasa Isyarat setiap daerah di Indonesia berbeda-beda. Begitu pula dengan bahasa isyarat di negara lain, karena bahasa isyarat dikembangkan oleh masyarakat Tuli sesuai dengan ciri khas daerah/negara tersebut. Contohnya
              Indonesia menggunakan Sistem Isyarat Bahasa Indonesia(SIBI), di Amerika Serikat menggunakan American Sign Language (ASL), sedangkan Inggris menggunakan British Sign Language (BSL).
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apakah ada standar internasional untuk bahasa isyarat?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              Tidak ada satu standar internasional untuk bahasa isyarat yang digunakan secara universal di seluruh dunia. Bahasa isyarat bervariasi dari satu negara ke negara lain, bahkan bisa ada variasi di dalam negara yang sama.
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apakah ada bahasa isyarat yang berlaku secara universal?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              Tidak ada satu bahasa isyarat yang digunakan secara universal, namun ada sebuah sistem yang dikenal sebagai International Sign (IS) yaitu sistem isyarat yang digunakan untuk memfasilitasi komunikasi antarpenutur bahasa isyarat dari berbagai negara. IS tidak berkembang secara alami seperti bahasa isyarat nasional, tetapi dirancang untuk digunakan dalam konteks internasional. IS sering digunakan dalam pertemuan internasional, konferensi, dan acara yang melibatkan penutur dari berbagai negara.
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apakah bahasa isyarat memiliki tata bahasa?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              Ya, bahasa isyarat memiliki tata bahasa yang kompleks dan berbeda dari bahasa lisan. Tata bahasa bahasa isyarat mencakup struktur kalimat, tenses, dan elemen linguistik lainnya.
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apa saja bahasa isyarat yang ada di Indonesia?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              Di Indonesia terdapat banyak bahasa isyarat sesuai daerahnya masing-masing, contohnya di wilayah Jakarta ada Bahasa Isyarat Jakarta (BISJAK), di Yogyakarta ada Bahasa Isyarat Yogyakarta (BISYOG), di Bali ada Bahasa Isyarat Bali (BISBALI), dan lainnya. Akan tetapi, terdapat dua bahasa isyarat yang umum digunakan di Indonesia yaitu Sistem Isyarat Bahasa Indonesia (SIBI) dan Bahasa Isyarat Indonesia (BISINDO).
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apa perbedaan SIBI dan BISINDO?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              SIBI lebih terstruktur dan formal, dikembangkan untuk tujuan pendidikan, dengan tata bahasa yang mengikuti bahasa Indonesia. Di sisi lain, BISINDO berkembang secara alami dari komunitas tunarungu, lebih fleksibel dalam struktur, dan lebih mencerminkan cara komunikasi sehari-hari yang digunakan oleh komunitas tunarungu. Kedua sistem ini memiliki peran dan fungsi yang berbeda dalam mendukung komunikasi dan pendidikan bagi penyandang tunarungu di Indonesia.
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Dimanakah kita bisa belajar bahasa isyarat?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              Belajar bahasa isyarat dapat dilakukan melalui berbagai cara dan di berbagai tempat. Umumnya bahasa isyarat dapat dipelajari melalui kelas formal, kursus online, dan berbagai platform pembelajaran online. Anda dapat mengecek laman <a href="/kelas" className="font-bold">kelas</a> di Dialog Sunyi untuk mendapatkan informasi lebih lanjut mengenai kelas yang ada di daerah kamu!
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apakah ada kesalahan umum yang sering dilakukan dalam menggunakan bahasa isyarat?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              <p>
              Ya, ada beberapa kesalahan umum yang sering dilakukan oleh pemula saat menggunakan bahasa isyarat, seperti:
              </p>
              
              <ul className="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-white">
                  <li>
                    Penggunaan Tata Bahasa yang Salah
                  </li>
                  <li>
                    Isyarat yang tidak tepat atau tidak jelas karena gerakan tangan yang terlalu cepat, terlalu lambat, atau terlalu kecil, kurangnya ekspresi wajah dan tubuh
                  </li>
                  <li>
                    Menggunakan posisi tangan yang salah atau tidak konsisten
                  </li>
                  <li>
                    Tidak memanfaatkan ruang isyarat dengan benar, seperti membuat isyarat terlalu dekat atau terlalu jauh dari tubuh
                  </li>
                  <li className="font-bold">
                    Kurang berlatih!
                  </li>
              </ul>
            </div>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-verdigris border-b-2 border-DS-verdigris group-open:border-b-0 dark:text-white dark:border-white">
              <h2 className="font-semibold">Apakah ada kesalahan umum yang sering dilakukan dalam menggunakan bahasa isyarat?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-verdigris group-open:border-t-0 dark:text-white dark:border-white">
              <p>
                Terdapat berbagai cara yang efektif untuk belajar bahasa isyarat, tergantung pada preferensi dan gaya belajar individu. Berikut adalah beberapa cara yang bisa dipertimbangkan:
              </p>
              
              <ul className="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-white">
                  <li>
                    Mengikuti Kursus atau Kelas Formal
                  </li>
                  <li>
                    Bergabung dengan Komunitas Tunarungu atau Kelompok Belajar
                  </li>
                  <li>
                    Menggunakan Aplikasi dan Sumber Pembelajaran Online
                  </li>
                  <li>
                    Membaca Buku dan Materi Pembelajaran Mandiri
                  </li>
                  <li>
                    Konsistensi dalam Praktik
                  </li>
                  <li>
                    Terbuka terhadap Umpan Balik dan Koreksi
                  </li>
              </ul>
            </div>
          </details>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
