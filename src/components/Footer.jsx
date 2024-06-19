/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-DS-charcoal pt-24 pb-10">
      <div className="containerr max-w-360 w-full px-16 md:px-9 m-auto">
        <div className="content flex flex-col gap-10">
          <div className="content-top flex justify-between flex-col ilg:flex-row">
            <div className="content-top-left w-full flex-grow-0 flex-shrink-0 flex-auto ilg:w-1/3 ilg:flex-shrink-0 ilg:flex-grow-0 ilg:flex-auto mb-4 ilg:mb-0">
              <div className="flex flex-col gap-4 ilg:gap-3">
                <a href="#" className="inline-flex md:max-w-48 max-w-64">
                  <img className="logo" src="/image/foot-logo.svg" alt="Dialog Sunyi Logo" />
                </a>
              </div>
            </div>
            <div className="content-top-right w-full flex-wrap flex-grow-0 flex-shrink-0 flex-auto ilg:w-7/12 ilg:flex-grow-0 ilg:flex-shrink-0 ilg:flex-auto lg:gap-8 gap-4 flex lg:flex-row ilg:flex-row justify-between">
              <div className="flex flex-col gap-5 lg:w-2/5 ilg:w-3/12">
                <p className="font-semibold text-xl text-white">Tentang</p>
                <ul className="flex flex-col gap-4 text-lg md:text-base">
                  <li>
                    <a href="/" className="text-white transition hover:text-DS-orangecarrot">
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-white transition hover:text-DS-orangecarrot">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/tentang-kami" className="text-white transition hover:text-DS-orangecarrot">
                      Tim Kami
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5 lg:w-2/5 ilg:w-3/12">
                <p className="font-semibold text-xl text-white">Fitur</p>
                <ul className="flex flex-col gap-4 text-lg md:text-base">
                  <li>
                    <a href="/kelas" className="text-white transition hover:text-DS-orangecarrot">
                      Kelas
                    </a>
                  </li>
                  <li>
                    <a href="/visyara" className="text-white transition hover:text-DS-orangecarrot">
                      VISYARA
                    </a>
                  </li>
                  <li>
                    <a href="/artikel" className="text-white transition hover:text-DS-orangecarrot">
                      Artikel
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5 text-center items-start ilg:items-center lg:w-full ilg:w-3/12">
                <p className="font-semibold text-xl text-white">Kontak Kami</p>
                <div className="flex flex-col gap-5 items-center sm:items-start">
                  <ul className="flex flex-row gap-5">
                    <li>
                      <a href="#" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                        <span className="sr-only">GitHub</span>

                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                        <span className="sr-only">Mail</span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" rel="noreferrer" target="_blank" className="text-white transition hover:text-DS-orangecarrot">
                        <span className="sr-only">Instagram</span>

                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="text-base ilg:text-center text-white sm:text-left text-left">
                  Project Capstone SIB Dicoding Cycle 6<br className="my-4" />
                  <span className="font-bold text-white">ID : C624-PS129</span>
                </p>
              </div>
            </div>
          </div>
          <div className="content-bottom text-center lg:text-center">
            <p className="text-sm md:text-xs text-white"> Copyright &#169; 2024, Dialog Sunyi. All rights reserved </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;