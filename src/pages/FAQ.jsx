import React from "react";
import Navbar from "../components/Navbar";
import "../styles/FAQStyle.css";

const FAQ = () => {
  return (
    <>
      <Navbar />

      <section className="faq">
        <section className="faq__header">
          <h1>Pertanyaan yang Sering Diajukan</h1>
          <h2>(Frequently Asked Question)</h2>
          <img src="/vector/stripe-blue.svg" alt="stripe-blue" />
        </section>

        <section className="faq__body">
          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apa itu bahasa isyarat?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>Bahasa isyarat adalah bahasa visual-gestural yang digunakan oleh komunitas tuli untuk berkomunikasi. Bahasa ini menggunakan gerakan tangan, ekspresi wajah, dan postur tubuh untuk menyampaikan informasi.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apakah bahasa isyarat yang berlaku di setiap daerah dan/atau negara sama?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>
                Bahasa Isyarat setiap daerah di Indonesia berbeda-beda. Begitu pula dengan bahasa isyarat di negara lain, karena bahasa isyarat dikembangkan oleh masyarakat Tuli sesuai dengan ciri khas daerah/negara tersebut. Contohnya
                Indonesia menggunakan Sistem Isyarat Bahasa Indonesia(SIBI), di Amerika Serikat menggunakan American Sign Language (ASL), sedangkan Inggris menggunakan British Sign Language (BSL).
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apakah ada standar internasional untuk bahasa isyarat?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>Tidak ada satu standar internasional untuk bahasa isyarat yang digunakan secara universal di seluruh dunia. Bahasa isyarat bervariasi dari satu negara ke negara lain, bahkan bisa ada variasi di dalam negara yang sama.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apakah ada bahasa isyarat yang berlaku secara universal?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>
                Tidak ada satu bahasa isyarat yang digunakan secara universal, namun ada sebuah sistem yang dikenal sebagai International Sign (IS) yaitu sistem isyarat yang digunakan untuk memfasilitasi komunikasi antarpenutur bahasa
                isyarat dari berbagai negara. IS tidak berkembang secara alami seperti bahasa isyarat nasional, tetapi dirancang untuk digunakan dalam konteks internasional. IS sering digunakan dalam pertemuan internasional, konferensi, dan
                acara yang melibatkan penutur dari berbagai negara.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apakah bahasa isyarat memiliki tata bahasa?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>Ya, bahasa isyarat memiliki tata bahasa yang kompleks dan berbeda dari bahasa lisan. Tata bahasa bahasa isyarat mencakup struktur kalimat, tenses, dan elemen linguistik lainnya.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apa saja bahasa isyarat yang ada di Indonesia?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>
                Di Indonesia terdapat banyak bahasa isyarat sesuai daerahnya masing-masing, contohnya di wilayah Jakarta ada Bahasa Isyarat Jakarta (BISJAK), di Yogyakarta ada Bahasa Isyarat Yogyakarta (BISYOG), di Bali ada Bahasa Isyarat
                Bali (BISBALI), dan lainnya. Akan tetapi, terdapat dua bahasa isyarat yang umum digunakan di Indonesia yaitu Sistem Isyarat Bahasa Indonesia (SIBI) dan Bahasa Isyarat Indonesia (BISINDO)
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apa perbedaan SIBI dan BISINDO?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>
                SIBI lebih terstruktur dan formal, dikembangkan untuk tujuan pendidikan, dengan tata bahasa yang mengikuti bahasa Indonesia. Di sisi lain, BISINDO berkembang secara alami dari komunitas tunarungu, lebih fleksibel dalam
                struktur, dan lebih mencerminkan cara komunikasi sehari-hari yang digunakan oleh komunitas tunarungu. Kedua sistem ini memiliki peran dan fungsi yang berbeda dalam mendukung komunikasi dan pendidikan bagi penyandang
                tunarungu di Indonesia.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Dimanakah kita bisa belajar bahasa isyarat?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>
                Belajar bahasa isyarat dapat dilakukan melalui berbagai cara dan di berbagai tempat. Umumnya bahasa isyarat dapat dipelajari melalui kelas formal, kursus online, dan berbagai platform pembelajaran online. Anda dapat mengecek
                laman kelas di Dialog Sunyi untuk mendapatkan informasi lebih lanjut mengenai kelas yang ada di daerah kamu!
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apakah ada kesalahan umum yang sering dilakukan dalam menggunakan bahasa isyarat?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>Ya, ada beberapa kesalahan umum yang sering dilakukan oleh pemula saat menggunakan bahasa isyarat, seperti:</p>
              <ul>
                <li>Penggunaan Tata Bahasa yang Salah</li>
                <li>Isyarat yang tidak tepat atau tidak jelas karena gerakan tangan yang terlalu cepat, terlalu lambat, atau terlalu kecil, kurangnya ekspresi wajah dan tubuh</li>
                <li>Menggunakan posisi tangan yang salah atau tidak konsisten</li>
                <li>Tidak memanfaatkan ruang isyarat dengan benar, seperti membuat isyarat terlalu dekat atau terlalu jauh dari tubuh</li>
                <li>Kurang berlatih!</li>
              </ul>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-item__question">
              <h3>Apa saja cara-cara efektif untuk belajar bahasa isyarat?</h3>
              <button className="dropdown-btn">
                <img src="/icon/dropdown-icon.svg" alt="dropdown icon" />
              </button>
            </div>
            <div className="faq-item__answer">
              <p>Terdapat berbagai cara yang efektif untuk belajar bahasa isyarat, tergantung pada preferensi dan gaya belajar individu. Berikut adalah beberapa cara yang bisa dipertimbangkan:</p>
              <ul>
                <li>Mengikuti Kursus atau Kelas Formal</li>
                <li>Bergabung dengan Komunitas Tunarungu atau Kelompok Belajar</li>
                <li>Menggunakan Aplikasi dan Sumber Pembelajaran Online</li>
                <li>Membaca Buku dan Materi Pembelajaran Mandiri</li>
                <li>Konsistensi dalam Praktik</li>
                <li>Terbuka terhadap Umpan Balik dan Koreksi</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FAQ;
