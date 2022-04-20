import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <section class="home section" id="home">
      <div class="shape shape__big"></div>
      <div class="shape shape__small"></div>

      <div class="home__container container grid">
        <div class="home__data">
          <h1 class="home__title">Choose The Best Car</h1>
          <h2 class="home__subtitle">Porsche Mission E</h2>
          <h3 class="home__elec">
            <i class="ri-flashlight-fill"></i> Electric car
          </h3>
        </div>

        <img src="assets/img/home.png" alt="" class="home__img" />
        <div class="home__car">
          <div class="home__car--data">
            <div class="home__car--icon">
              <i class="ri-temp-cold-line"></i>
            </div>
            <h2 class="home__car--nummber">24°</h2>
            <h3 class="home__car--name">TEMPERATURE</h3>
          </div>

          <div class="home__car--data">
            <div class="home__car--icon">
              <i class="ri-dashboard-3-line"></i>
            </div>
            <h2 class="home__car--nummber">873</h2>
            <h3 class="home__car--name">MILEAGE</h3>
          </div>

          <div class="home__car--data">
            <div class="home__car--icon">
              <i class="ri-flashlight-fill"></i>
            </div>
            <h2 class="home__car--nummber">94%</h2>
            <h3 class="home__car--name">BATTERY</h3>
          </div>
        </div>
        <a href="#section" class="home__button">
          START
        </a>
      </div>
    </section>
  );
};

export default Home;
