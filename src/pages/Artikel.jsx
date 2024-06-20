/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import ArticleList from "../scripts/ArticleList";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Artikel = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);

    return (

        <section className="section-article bg-DS-beige dark:bg-DS-charcoal-950">
            <div className="container px-16 md:px-5 w-full max-w-7xl m-auto">
                <div className="hero-content flex flex-row justify-between py-16">
                    <div className="hero-left w-full mdx:hidden flex flex-auto ilg:w-1/2 ilg:flex-shrink-0 ilg:flex-grow-0 ilg:flex-auto justify-center">
                        <img src="/image/hero-artikel.svg" alt="hero" className="ilg:w-[360px] imdx:w-[300px] ixl:w-[500px]" data-aos="fade-right" />
                    </div>
                    <div className="hero-right w-full content-center">
                        <div className="max-w-xl" data-aos="fade-left">
                            <h1 className="mb-4 max-w-lg text-DS-charcoal dark:text-DS-orangecarrot font-black ilg:text-4xl text-3xl">
                                ARTIKEL
                            </h1>
                            <p className="ilg:text-lg text-DS-charcoal dark:text-white text-base md:text-sm">
                                Tetap terhubung dengan dunia yang ber
                                <span className="text-DS-verdigris font-bold dark:text-DS-verdigris">dial</span>
                                <span className="text-DS-orangecarrot font-bold dark:text-DS-orangecarrot">o</span>
                                <span className="text-DS-verdigris font-bold dark:text-DS-verdigris">g </span>
                                dalam 
                                <span className="text-DS-verdigris font-bold dark:text-DS-verdigris"> sunyi </span>
                                dan ikuti perkembangan yang membuka pintu untuk komunikasi yang lebih inklusif
                                <br /><br />
                                Temukan 
                                <span className="text-DS-orangecarrot font-bold dark:text-DS-orangecarrot"> berita terkini</span>{" "}
                                dari komunitas Tuli dan informasi terkini seputar bahasa isyarat disini!
                            </p>
                            <div>
                                <div className="mt-4 gap-x-6 rounded-md">
                                    <a href="#articles" className="inline-block rounded-xl border border-DS-verdigris bg-DS-verdigris px-6 py-2 text-sm font-medium hover:font-semibold text-white hover:bg-DS-beige hover:text-DS-verdigris focus:outline-none focus:ring active:text-DS-verdigris">
                                        Baca Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content flex flex-col gap-8" id="articles">
                    <div className="content-top title text-center">
                        <div className="title-body text-DS-charcoal dark:text-DS-orangecarrot font-bold text-4xl md:text-2xl sm:text-2xl" data-aos="fade-up" data-aos-delay="300">
                            <h1>Berita <span className="text-DS-verdigris dark:text-DS-verdigris">Terkini</span> Komunitas Tuli</h1>
                        </div>
                        <div className="border-t-4 w-1/4 mx-auto my-6 md:w-36 md:h-1 border-DS-verdigris" data-aos="fade-up" data-aos-delay="300"></div>
                    </div>

                    <article id="article-list" className="content-bottom" data-aos="fade-up" data-aos-delay="600">
                        <ArticleList />
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Artikel;