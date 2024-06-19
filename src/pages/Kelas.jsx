/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import KelasList from "../scripts/KelasList";

const Kelas = () => {
  useEffect(() => {
    AOS.init(); // Re-initialize AOS when component mounts
  }, []);

  return (
    <div className=" bg-DS-beige dark:bg-DS-charcoal">
      <section className="flex ilg:flex-row-reverse lg:flex-col justify-center items-center px-16 md:px-9 2sm:px-5 m-[90px] lg:mt-12 sm:mt-9 py-10 sm:py-8 gap-8">
        <img className="object-cover max-w-fit h-[285px] 2lg:h-[370px] lg:max-h-96 md:h-56 2sm:h-48" src="/image/hero-kelas.svg" alt="logo dialog sunyi" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-4 text-4xl sm:text-2xl font-extrabold sm:font-bold tracking-tight text-DS-charcoal dark:text-DS-orangecarrot">KELAS</h1>
          <p className="my-3 max-w-[700px] sm:mt-0 font-normal text-lg sm:text-base tracking-wide text-DS-charcoal dark:text-DS-beige text-justify">
            Sedang bingung mau <span className=" text-DS-orangecarrot font-semibold">belajar bahasa isyarat</span> di mana?
            <br />
            <br />
            Jangan khawatir! Cek daftar kelas bahasa isyarat yang tersedia di sekitar Anda sekarang juga. Dengan instruktur <span className=" text-DS-orangecarrot font-semibold">berpengalaman</span> dan metode yang{" "}
            <span className=" text-DS-orangecarrot font-semibold">interaktif</span>, belajar bahasa isyarat menjadi lebih mudah dan menyenangkan.
            <br />
            <br />
            Temukan kelas yang sesuai dengan jadwal Anda dan <span className=" text-DS-orangecarrot font-semibold">daftarkan diri segera!</span>
          </p>
          <div>
            <div className="mt-4 gap-x-6 rounded-md">
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

      <div className="content flex flex-col gap-8 bg-DS-verdigris-700 min-h-[800px]" id="classes">
        <div className="content-top title text-center">
          <div className="title-body text-DS-beige dark:text-DS-orangecarrot font-bold mt-8 text-4xl md:text-2xl sm:text-2xl" data-aos="fade-up" data-aos-delay="300">
            <h1>Daftar Kelas</h1>
          </div>
          <div className="border-t-4 w-32 mx-auto my-6 md:w-36 md:h-1 border-DS-verdigris" data-aos="fade-up" data-aos-delay="300"></div>
        </div>

        <article id="kelas-list" className="content-bottom " data-aos="fade-up" data-aos-delay="600">
          <KelasList />
        </article>
      </div>
    </div>
  );
};

export default Kelas;
