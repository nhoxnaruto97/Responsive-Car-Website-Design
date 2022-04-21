import React from "react";
import Swiper from "swiper";
import "../css/popular.css";
import pic1 from "../img/popular1.png";
import pic2 from "../img/popular2.png";
import pic3 from "../img/popular3.png";
import pic4 from "../img/popular4.png";
import pic5 from "../img/popular5.png";

const Popular = () => {
  const swiper = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        spaceBetween: 48,
      },
    },
  });
  return (
    <section className="popular section" id="popular">
      <h2 className="section__title">
        Choose Your Electric Car <br />
        Of The Porsche Brand
      </h2>

      <div className="popular__container container swiper">
        <div className="swiper-wrapper">
          <article className="popular__card swiper-slide">
            <div className="shape shape__smaller"></div>
            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Turbo S</h3>

            <img src={pic1} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data--group">
                <i className="ri-dashboard-3-line"></i> 3.7 Sec
              </div>
              <div className="popular__data--group">
                <i className="ri-funds-box-line"></i> 356 Km/h
              </div>
              <div className="popular__data--group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$175,900</h3>

            <button className="button popular__buton">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <article className="popular__card swiper-slide">
            <div className="shape shape__smaller"></div>
            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Taycan</h3>

            <img src={pic2} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data--group">
                <i className="ri-dashboard-3-line"></i> 3.7 Sec
              </div>
              <div className="popular__data--group">
                <i className="ri-funds-box-line"></i> 356 Km/h
              </div>
              <div className="popular__data--group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$114,900</h3>
            <button className="button popular__buton">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <article className="popular__card swiper-slide">
            <div className="shape shape__smaller"></div>
            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Turbo S Cross</h3>

            <img src={pic3} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data--group">
                <i className="ri-dashboard-3-line"></i> 3.7 Sec
              </div>
              <div className="popular__data--group">
                <i className="ri-funds-box-line"></i> 356 Km/h
              </div>
              <div className="popular__data--group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$150,900</h3>
            <button className="button popular__buton">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <article className="popular__card swiper-slide">
            <div className="shape shape__smaller"></div>
            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Boxster 718</h3>

            <img src={pic4} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data--group">
                <i className="ri-dashboard-3-line"></i> 3.7 Sec
              </div>
              <div className="popular__data--group">
                <i className="ri-funds-box-line"></i> 356 Km/h
              </div>
              <div className="popular__data--group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$125,900</h3>
            <button className="button popular__buton">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <article className="popular__card swiper-slide">
            <div className="shape shape__smaller"></div>
            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Cayman</h3>

            <img src={pic5} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data--group">
                <i className="ri-dashboard-3-line"></i> 3.7 Sec
              </div>
              <div className="popular__data--group">
                <i className="ri-funds-box-line"></i> 356 Km/h
              </div>
              <div className="popular__data--group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$128,900</h3>
            <button className="button popular__buton">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Popular;
