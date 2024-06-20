/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import KelasList from "../scripts/KelasList";

const Kelas = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    AOS.init(); // Re-initialize AOS when component mounts
  }, []);

  const handleSelectClass = (kelas) => {
    setSelectedClass(kelas);
  };

  const handleClosePopup = () => {
    setSelectedClass(null);
  };

  return (
    <div className="bg-DS-beige dark:bg-DS-charcoal">
      <section className="flex ilg:flex-row-reverse lg:flex-col justify-center items-center md:px-5 2sm:px-0 2sm:pt-0 m-24 lg:m-9 sm:m-5 gap-8">
        <img data-aos="fade-left" data-aos-delay="300" className="object-cover max-w-fit h-72 sm:h-56 lg:h-62 " src="/image/hero-kelas.svg" alt="logo dialog sunyi" />
        <div className="flex flex-col justify-between p-4 sm:p-0 leading-normal">
          <h1 data-aos="fade-down" data-aos-delay="300" className="mb-4 text-4xl sm:text-2xl font-extrabold sm:font-bold tracking-tight text-DS-charcoal dark:text-DS-orangecarrot">KELAS</h1>
          <p data-aos="fade-right" data-aos-delay="300" className="my-3 max-w-[700px] sm:mt-0 font-normal text-lg sm:text-base 2sm:text-sm tracking-wide text-DS-charcoal dark:text-DS-beige text-justify">
            Sedang bingung mau <span className="text-DS-orangecarrot font-semibold">belajar bahasa isyarat</span> di mana?
            <br />
            <br />
            Jangan khawatir! Cek daftar kelas bahasa isyarat yang tersedia di sekitar Anda sekarang juga. Dengan instruktur <span className="text-DS-orangecarrot font-semibold">berpengalaman</span> dan metode yang{" "}
            <span className="text-DS-orangecarrot font-semibold">interaktif</span>, belajar bahasa isyarat menjadi lebih mudah dan menyenangkan.
            <br />
            <br />
            Temukan kelas yang sesuai dengan jadwal Anda dan <span className="text-DS-orangecarrot font-semibold">daftarkan diri segera!</span>
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="mt-4 gap-x-6 rounded-md">
              <a
                href="#classes"
                className="inline-block rounded-xl border border-DS-verdigris bg-DS-verdigris px-6 py-2 text-sm font-medium hover:font-semibold text-white hover:bg-DS-beige hover:text-DS-verdigris focus:outline-none focus:ring active:text-DS-verdigris"
              >
                Mulai Belajar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="content flex flex-col gap-8 bg-DS-verdigris-700 min-h-[800px]" id="classes">
        <div className="content-top title ">
          <div className="title-body text-center text-DS-beige dark:text-DS-orangecarrot font-bold mt-8 text-4xl md:text-2xl sm:text-2xl" data-aos="fade-up" data-aos-delay="300">
            <h1>Daftar Kelas</h1>
          </div>
          <div className="border-t-4 w-32 mx-auto my-6 md:w-36 md:h-1 border-DS-verdigris" data-aos="fade-up" data-aos-delay="300"></div>

          <div  className="class-lists">
            <div className="jawa-barat">
              <h2 data-aos="fade-up" data-aos-delay="100" className="inline-block text-DS-beige text-2xl md:text-xl sm:text-lg border-b-2 border-current pb-1 mx-16 sm:mx-9">Jawa Barat</h2>
              <KelasList region="Jawa Barat" onSelectClass={handleSelectClass} data-aos="fade-up" data-aos-delay="300" />
            </div>

            <div className="jawa-tengah">
              <h2 data-aos="fade-up" data-aos-delay="100" className="inline-block text-DS-beige text-2xl md:text-xl sm:text-lg border-b-2 border-current pb-1 mx-16 sm:mx-9">Jawa Tengah</h2>
              <KelasList region="Jawa Tengah" onSelectClass={handleSelectClass} data-aos="fade-up" data-aos-delay="300" />
            </div>

            <div className="jawa-timur">
              <h2 data-aos="fade-up" data-aos-delay="100" className="inline-block text-DS-beige text-2xl md:text-xl sm:text-lg border-b-2 border-current pb-1 mx-16 sm:mx-9">Jawa Timur</h2>
              <KelasList region="Jawa Timur" onSelectClass={handleSelectClass} data-aos="fade-up" data-aos-delay="300" />
            </div>

            <div className="jabodetabek">
              <h2 data-aos="fade-up" data-aos-delay="100" className="inline-block text-DS-beige text-2xl md:text-xl sm:text-lg border-b-2 border-current pb-1 mx-16 sm:mx-9">Jabodetabek</h2>
              <KelasList region="Jabodetabek" onSelectClass={handleSelectClass} />
            </div>

            <div className="sumatera">
              <h2 data-aos="fade-up" data-aos-delay="100" className="inline-block text-DS-beige text-2xl md:text-xl sm:text-lg border-b-2 border-current pb-1 mx-16 sm:mx-9">Sumatera</h2>
              <KelasList region="Sumatera" onSelectClass={handleSelectClass} />
            </div>

            <div className="sulawesi">
              <h2 data-aos="fade-up" data-aos-delay="100" className="inline-block text-DS-beige text-2xl md:text-xl sm:text-lg border-b-2 border-current pb-1 mx-16 sm:mx-9">Sulawesi</h2>
              <KelasList region="Sulawesi" onSelectClass={handleSelectClass} />
            </div>

            <div className="kalimantan">
              <h2 data-aos="fade-up" data-aos-delay="100" className="inline-block text-DS-beige text-2xl md:text-xl sm:text-lg border-b-2 border-current pb-1 mx-16 sm:mx-9">Kalimantan</h2>
              <KelasList region="Kalimantan" onSelectClass={handleSelectClass} />
            </div>
          </div>
        </div>
      </div>

      {selectedClass && (
        <div data-aos="zoom-in" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" bg-DS-beige px-8 py-10 rounded-lg shadow-lg max-w-[250px] imd:max-w-2xl w-full relative">
            <button
              onClick={handleClosePopup}
              type="button"
              className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-red-500 hover:text-DS-beige rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="class__body grid gap-8 md:gap-3 grid-cols-1 imd:grid-cols-2 md:pt-2 items-center">
              <img src={selectedClass.poster_img} alt={selectedClass.title} className="class__image object-cover m-auto md:w-56 " />
              <div className="class__info">
                <h2 className="text-2xl md:text-xl font-extrabold md:font-bold mb-2 text-center text-DS-charcoal">{selectedClass.title}</h2>
                <h3 className="text-lg md:text-base font-medium mb-4 text-center text-DS-verdigris underline">{selectedClass.organizer}</h3>

                <div className="mb-2">
                  <h4 className="font-bold md:text-base text-DS-charcoal">Periode Pendaftaran:</h4>
                  <p className=" text-gray-600 text-base md:text-sm">{new Date(selectedClass.registration_date).toLocaleDateString()}</p>
                </div>

                <div className="mb-2">
                  <h4 className="font-bold md:text-base text-DS-charcoal">Periode Kelas:</h4>
                  <p className=" text-gray-600 text-base md:text-sm">{new Date(selectedClass.realization_date).toLocaleDateString()}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold md:text-base text-DS-charcoal">Biaya:</h4>
                  <p className=" text-gray-600 text-base md:text-sm">Rp {selectedClass.fee.toLocaleString()}</p>
                </div>

                <a
                  href={selectedClass.link}
                  className="inline-block rounded-xl border w-full text-center border-DS-verdigris bg-DS-verdigris px-6 py-2 text-sm font-medium text-white hover:bg-DS-beige hover:text-DS-verdigris focus:outline-none focus:ring active:text-DS-verdigris"
                >
                  Daftar
                </a>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kelas;
