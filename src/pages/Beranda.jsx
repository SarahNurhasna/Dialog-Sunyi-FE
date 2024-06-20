/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgWhy from "../../public/image/WHY.png";

const Beranda = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-DS-beige dark:bg-DS-charcoal-950">
      <section className="flex ilg:flex-row-reverse lg:flex-col justify-center items-center px-16 md:px-9 2sm:px-5 mt-[64px] lg:mt-12 2sm:mt-0 sm:mt-9 py-10 sm:py-8 gap-8">
        <img data-aos="fade-left" data-aos-delay="300" className="object-cover max-w-fit h-72 lg:max-h-80 md:h-56 2sm:h-48" src="/image/hero-home.svg" alt="hero home" />
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
            <img className="w-[170px] pb-4 flex self-center items-center" src="/image/why-a.svg" alt="why-a" />
            <p className="title font-bold text-base text-DS-beige text-center">Komunikasi Efektif Bagi Tuna Rungu</p>
            <p className="my-3 text-center sm:mt-0 font-normal text-sm sm:text-base 2sm:text-sm text-DS-beige">
              Bahasa isyarat memungkinkan orang tunarungu untuk berkomunikasi secara efektif, dan dapat membantu mereka dalam mengakses informasi, pendidikan, serta pekerjaan dengan lebih mudah.
            </p>
          </div>
          <div className="flex flex-col justify-between p-2 leading-normal" data-aos="flip-left">
            <img className="w-[115px] pb-4 flex self-center items-center" src="/image/why-b.svg" alt="why-b" />
            <p className="title font-bold text-base text-DS-beige text-center">Pengembangan Bahasa dan Kognitif</p>
            <p className="my-3 text-center sm:mt-0 font-normal text-sm sm:text-base 2sm:text-sm text-DS-beige">
              Bahasa isyarat dapat meningkatkan keterampilan bahasa serta kemampuan berpikir abstrak dan logika karena melibatkan penggunaan gerakan tangan, ekspresi wajah, dan gerakan tubuh.
            </p>
          </div>
          <div className="flex flex-col justify-between p-2 leading-normal" data-aos="flip-right">
            <img className="w-[130px] pb-4 flex self-center items-center" src="/image/why-c.svg" alt="why-c" />
            <p className="title font-bold text-base text-DS-beige text-center">Inklusi dan Empati Sosial</p>
            <p className="my-3 text-center sm:mt-0 font-normal text-sm sm:text-base 2sm:text-sm text-DS-beige">
              Penggunaan bahasa isyarat oleh orang yang mendengar membantu meningkatkan pemahaman dan empati serta mengurangi isolasi terhadap komunitas tunarungu dan mendorong inklusi sosial yang lebih besar.
            </p>
          </div>
          <div className="flex flex-col justify-between p-2 leading-normal" data-aos="flip-right">
            <img className="w-[125px] pb-4 flex self-center items-center" src="/image/why-d.svg" alt="why-d" />
            <p className="title font-bold text-base text-DS-beige text-center">Penggunaan dalam Berbagai Profesi</p>
            <p className="my-3 text-center sm:mt-0 font-normal text-sm sm:text-base 2sm:text-sm text-DS-beige">
              Kemampuan bahasa isyarat menjadi semakin diminati di berbagai bidang, seperti pendidikan, kesehatan, dan layanan sosial. Menguasai bahasa isyarat dapat meningkatkan peluang Anda untuk mendapatkan pekerjaan di bidang-bidang
              tersebut.
            </p>
          </div>
        </section>
      </section>

      <section>
        <div className=" text-center pt-10 sm:pt-8">
          <h1 className="font-extrabold text-4xl sm:text-2xl pb-5 text-DS-charcoal">Tim Kami</h1>
          <hr className="w-32 sm:w-32 h-1 sm:h-0.5 mx-auto bg-DS-verdigris border-0 rounded"></hr>
        </div>

        <div className="flex flex-row lg:flex-col justify-center items-center px-16 md:px-9 2sm:px-5 py-10 sm:py-8 gap-8">
          <div className="w-full max-w-xs bg-DS-charcoal border border-gray-200 rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center pb-10">
              <img className="w-60 h-60 mx-5 mt-10 mb-6 rounded-2xl shadow-lg bg-white" src="/image/jijaargh.svg" alt="Jijah image" />
              <h5 className="mb-1 text-xl font-medium text-DS-beige dark:text-white">Nur Azizah</h5>
              <span className="text-sm text-gray-400">Frontend Developer</span>
              <div className="flex mt-4 md:mt-6">
                <ul className="flex flex-row gap-5">
                  <li>
                    <a href="https://www.linkedin.com/in/nur-azizahh/" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-8 h-8 rounded-sm bg-DS-beige text-DS-charcoal hover:bg-DS-orangecarrot" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                          clipRule="evenodd"
                        />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nur_raz_/" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only">Instagram</span>

                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Dancingaroundthelies" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only"></span>

                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xs bg-DS-charcoal border border-gray-200 rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center pb-10">
              <img className="w-60 h-60 mx-5 mt-10 mb-6 rounded-2xl shadow-lg bg-white" src="/image/sarah.svg" alt="sarah image" />
              <h5 className="mb-1 text-xl font-medium text-DS-beige dark:text-white">Sarah Nurhasna K.</h5>
              <span className="text-sm text-gray-400">Frontend Developer</span>
              <div className="flex mt-4 md:mt-6">
                <ul className="flex flex-row gap-5">
                  <li>
                    <a href="https://www.linkedin.com/in/sarah-nurhasna-khairunnisa-8b5b62252/" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-8 h-8 rounded-sm bg-DS-beige text-DS-charcoal hover:bg-DS-orangecarrot" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                          clipRule="evenodd"
                        />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sarah_nrhsna/" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only">Instagram</span>

                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SarahNurhasna" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only"></span>

                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xs bg-DS-charcoal border border-gray-200 rounded-2xl shadow-2xl">
            <div className="flex flex-col items-center pb-10">
              <img className="w-60 h-60 mx-5 mt-10 mb-6 rounded-2xl shadow-lg bg-white" src="/image/chris.svg" alt="chris image" />
              <h5 className="mb-1 text-xl font-medium text-DS-beige dark:text-white">Christofer Nathan Nael K.</h5>
              <span className="text-sm text-gray-400">Backend Developer</span>
              <div className="flex mt-4 md:mt-6">
                <ul className="flex flex-row gap-5">
                  <li>
                    <a href="https://www.linkedin.com/in/christofer-nathanael-0b1192254/" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-8 h-8 rounded-sm bg-DS-beige text-DS-charcoal hover:bg-DS-orangecarrot" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                          clipRule="evenodd"
                        />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/christofer.nathanael/" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only">Instagram</span>

                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/christoferNK22" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                      <span className="sr-only"></span>

                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-16 md:px-9 2sm:px-5 m-auto bg-DS-beige dark:bg-DS-charcoal-950">
        <div className="content-top title text-center">
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
