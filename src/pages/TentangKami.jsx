/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";

const TentangKami = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <section className="tentang-kita">
          <img src="/image/logo-light-bg.svg" alt="logo dialog sunyi" />
          <div className="tentang-kita__content">
            <h1 className="tentang-kita__title">Tentang Kami</h1>
            <p className="tentang-kita__description">
              Selamat datang di Dialog Sunyi, sebuah platform yang berdedikasi untuk memperluas akses dan kesadaran terhadap bahasa isyarat di Indonesia.
              <br />
              Kami percaya bahwa setiap individu berhak untuk belajar dan menghargai kekayaan budaya serta komunikasi yang ditawarkan oleh bahasa isyarat.
            </p>
          </div>
        </section>

        <section className="latar-belakang">
          <h1>Latar Belakang</h1>
          <div className="latar-belakang_content">
            <img src="/image/latar-belakang.svg" alt="latar belakang img" />
            <p className="latar-belakang__description">
              Dialog Sunyi lahir dari pemahaman mendalam akan tantangan yang dihadapi oleh komunitas tuli di Indonesia. Kurangnya akses informasi dan kesadaran akan pentingnya bahasa isyarat telah menjadi hambatan utama bagi mereka yang
              ingin belajar dan berpartisipasi secara penuh dalam masyarakat.
              <br />
              Dialog Sunyi hadir untuk mengatasi hambatan ini dengan menyediakan platform yang mudah diakses untuk menemukan informasi tentang kelas bahasa isyarat dan mengedukasi masyarakat tentang pentingnya bahasa isyarat dalam membangun
              kesetaraan sosial.
            </p>
          </div>
        </section>

        <section className="tim">
          <h1>Tim Kami</h1>
          <div className="tim-kami">
            <div className="card">
              <img src="" alt="" />
              <p className="card__name">Sarah Nurhasna Khairunnisa</p>
              <p className="card__role">Frontend Developer</p>
              <p className="card__id"></p>
              <div className="card__social-media">
                <a href="">
                  <img src="" alt="linkedIn-icon" />
                </a>
                <a href="">
                  <img src="" alt="github-icon" />
                </a>
                <a href="">
                  <img src="" alt="instagram-icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TentangKami;
