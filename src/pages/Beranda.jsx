/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgWhy from '/image/WHY.png'
import ArticleCarousel from "../scripts/ArticleCarousel";

const Beranda = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-DS-beige dark:bg-DS-charcoal-950">
      <section className="flex ilg:flex-row-reverse lg:flex-col justify-center items-center px-16 md:px-9 2sm:px-5 mt-[64px] lg:mt-12 2sm:mt-0 sm:mt-9 py-10 sm:py-8 gap-8">
        <img data-aos="fade-left" data-aos-delay="300" className="object-cover max-w-fit h-72 lg:max-h-80 md:h-56 2sm:h-48" src="/image/hero-home.svg" alt="hero home" loading="lazy" />
        <div className="flex flex-col justify-between p-4 2sm:py-0 leading-normal">
          <h1 data-aos="fade-down" data-aos-delay="300" className="mb-4 text-4xl sm:text-2xl font-extrabold sm:font-bold tracking-tight text-DS-charcoal dark:text-DS-orangecarrot">
            Dialog Tanpa Suara
            <br />
            Komunikasi Tanpa Batas
          </h1>
          <p data-aos="fade-right" data-aos-delay="300" className="max-w-[500px] my-3 sm:mt-0 font-normal text-lg sm:text-base 2sm:text-sm tracking-wide text-DS-charcoal dark:text-DS-beige text-justify">
            Jauhkan kesalahpahaman. Mulailah terhubung dengan Bahasa Isyarat bersama{" "}
            <span className="text-DS-verdigris font-bold">
              Dial<span className="text-DS-orangecarrot">o</span>g Sunyi
            </span>
            <br />
            <br />
            Ayo, belajar bahasa isyarat sekarang dan jadilah bagian dari komunikasi tanpa batas!
          </p>
          <div>
            <div data-aos="fade-up" data-aos-delay="300" className="mt-4 gap-x-6 rounded-md">
              <a
                href="/kelas"
                className="inline-block rounded-xl border border-DS-verdigris bg-DS-verdigris px-6 py-2 text-sm font-medium hover:font-semibold text-white hover:bg-DS-beige hover:text-DS-verdigris focus:outline-none focus:ring active:text-DS-verdigris"
              >
                Mulai Belajar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="why w-full mt-24 lg:mt-5 2sm:mt-0 justify-between px-16" style={{ backgroundImage: `url(${bgWhy})` }}>
        <div className="text-center mt-16 lg:mt-0 pt-10 sm:pt-8">
          <h1 className="font-semibold text-3xl sm:text-2xl pb-4 text-DS-beige" data-aos="fade-up">
            Mengapa perlu belajar bahasa isyarat?
          </h1>
        </div>
        <section className="why-reason flex flex-row 2lg:flex-col justify-center items-center px-16 md:px-9 2sm:px-5 pt-4 lg:py-5 gap-8 bg-ds">
          <div className="why-a flex flex-col justify-between items-center content-center p-2 leading-normal" data-aos="flip-left">
            <img className="w-[170px] pb-4 flex self-center items-center" src="/image/why-a.svg" alt="why-a" loading="lazy" />
            <p className="title font-bold text-base text-DS-beige text-center">Komunikasi Efektif Bagi Tuna Rungu</p>
            <p className="my-3 text-center sm:mt-0 font-normal text-sm sm:text-base 2sm:text-sm text-DS-beige">
              Bahasa isyarat memungkinkan orang tunarungu untuk berkomunikasi secara efektif, dan dapat membantu mereka dalam mengakses informasi, pendidikan, serta pekerjaan dengan lebih mudah.
            </p>
          </div>
          <div className="flex flex-col justify-between p-2 leading-normal" data-aos="flip-left">
            <img className="w-[115px] pb-4 flex self-center items-center" src="/image/why-b.svg" alt="why-b" loading="lazy" />
            <p className="title font-bold text-base text-DS-beige text-center">Pengembangan Bahasa dan Kognitif</p>
            <p className="my-3 text-center sm:mt-0 font-normal text-sm sm:text-base 2sm:text-sm text-DS-beige">
              Bahasa isyarat dapat meningkatkan keterampilan bahasa serta kemampuan berpikir abstrak dan logika karena melibatkan penggunaan gerakan tangan, ekspresi wajah, dan gerakan tubuh.
            </p>
          </div>
          <div className="flex flex-col justify-between p-2 leading-normal" data-aos="flip-right">
            <img className="w-[130px] pb-4 flex self-center items-center" src="/image/why-c.svg" alt="why-c" loading="lazy" />
            <p className="title font-bold text-base text-DS-beige text-center">Inklusi dan Empati Sosial</p>
            <p className="my-3 text-center sm:mt-0 font-normal text-sm sm:text-base 2sm:text-sm text-DS-beige">
              Penggunaan bahasa isyarat oleh orang yang mendengar membantu meningkatkan pemahaman dan empati serta mengurangi isolasi terhadap komunitas tunarungu dan mendorong inklusi sosial yang lebih besar.
            </p>
          </div>
          <div className="flex flex-col justify-between p-2 leading-normal" data-aos="flip-right">
            <img className="w-[125px] pb-4 flex self-center items-center" src="/image/why-d.svg" alt="why-d" loading="lazy" />
            <p className="title font-bold text-base text-DS-beige text-center">Penggunaan dalam Berbagai Profesi</p>
            <p className="my-3 text-center sm:mt-0 font-normal text-sm sm:text-base 2sm:text-sm text-DS-beige">
              Kemampuan bahasa isyarat menjadi semakin diminati di berbagai bidang, seperti pendidikan, kesehatan, dan layanan sosial. Menguasai bahasa isyarat dapat meningkatkan peluang Anda untuk mendapatkan pekerjaan di bidang-bidang
              tersebut.
            </p>
          </div>
        </section>
      </section>

      <section>
        <div className="px-16 pb-10 bg-setengah dark:bg-darksetengah">
          <div data-aos="fade-up" data-aos-delay="300" className=" text-center py-10 sm:py-8">
              <h2 className="font-black text-4xl sm:text-2xl text-DS-charcoal dark:text-DS-orangecarrot">Artikel</h2>
              <hr className="w-48 sm:w-32 h-1 sm:h-0.5 mx-auto my-5 bg-DS-verdigris border-0 rounded dark:text-DS-orangecarrot"></hr>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="">
            <ArticleCarousel />
          </div>
        </div>
      </section>

      <section className="px-16 md:px-9 2sm:px-5 m-auto bg-DS-beige dark:bg-DS-charcoal-950">
        <div className="content-top title text-center mt-16">
          <div className="title-body text-DS-charcoal dark:text-DS-orangecarrot font-bold text-4xl md:text-2xl sm:text-2xl" data-aos="fade-up" data-aos-delay="300">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="border-t-4 w-1/4 mx-auto my-6 md:w-36 md:h-1 border-DS-verdigris" data-aos="fade-up" data-aos-delay="300"></div>
        </div>

        <div data-aos="fade-up" className="space-y-4 text-lg md:text-base mb-16">
          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-charcoal border-b-2 border-DS-charcoal group-open:border-b-0 dark:text-DS-beige dark:border-white">
              <h2 className="font-semibold">Apa itu bahasa isyarat?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p data-aos="flip-up" className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-charcoal group-open:border-t-0 dark:text-gray-300 dark:border-white">
              Bahasa isyarat adalah bahasa visual-gestural yang digunakan oleh komunitas tuli untuk berkomunikasi. Bahasa ini menggunakan gerakan tangan, ekspresi wajah, dan postur tubuh untuk menyampaikan informasi.
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-charcoal border-b-2 border-DS-charcoal group-open:border-b-0 dark:text-DS-beige dark:border-white">
              <h2 className="font-semibold">Apakah bahasa isyarat yang berlaku di setiap daerah dan/atau negara sama?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p data-aos="flip-up" className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-charcoal group-open:border-t-0 dark:text-gray-300 dark:border-white">
              Bahasa Isyarat setiap daerah di Indonesia berbeda-beda. Begitu pula dengan bahasa isyarat di negara lain, karena bahasa isyarat dikembangkan oleh masyarakat Tuli sesuai dengan ciri khas daerah/negara tersebut. Contohnya
              Indonesia menggunakan Sistem Isyarat Bahasa Indonesia(SIBI), di Amerika Serikat menggunakan American Sign Language (ASL), sedangkan Inggris menggunakan British Sign Language (BSL).
            </p>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-transparent p-4 text-DS-charcoal border-b-2 border-DS-charcoal group-open:border-b-0 dark:text-DS-beige dark:border-white">
              <h2 className="font-semibold">Apakah ada bahasa isyarat yang berlaku secara universal?</h2>
              <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p data-aos="flip-up" className="px-4 pb-4 sm:text-sm leading-relaxed text-gray-700 border-b-2 border-DS-charcoal group-open:border-t-0 dark:text-gray-300 dark:border-white">
              Tidak ada satu bahasa isyarat yang digunakan secara universal, namun ada sebuah sistem yang dikenal sebagai International Sign (IS) yaitu sistem isyarat yang digunakan untuk memfasilitasi komunikasi antarpenutur bahasa isyarat
              dari berbagai negara. IS tidak berkembang secara alami seperti bahasa isyarat nasional, tetapi dirancang untuk digunakan dalam konteks internasional. IS sering digunakan dalam pertemuan internasional, konferensi, dan acara
              yang melibatkan penutur dari berbagai negara.
            </p>
          </details>

          <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center mb-12">
            <div className="mt-4 gap-x-6 rounded-md">
              <a
                href="/faq"
                className="inline-block rounded-xl border border-DS-verdigris bg-DS-verdigris px-6 py-2 text-sm font-medium hover:font-semibold text-white hover:bg-DS-beige hover:text-DS-verdigris focus:outline-none focus:ring active:text-DS-verdigris"
              >
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
