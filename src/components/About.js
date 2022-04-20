import React from "react";
import "../css/about.css";
import "../css/button.css";

const About = () => {
  return (
    <section class="about section" id="about">
      <div class="about__container container grid">
        <div class="about__group">
          <img src="assets/img/about.png" alt="" class="about__img" />

          <div class="about__card">
            <h3 class="about__card--title">2.500+</h3>
            <p class="about__card-description">
              Supercharges placed along popular routes
            </p>
          </div>
        </div>

        <div class="about__data">
          <h2 class="section__title about__title">
            Machines With <br />
            Future Technology
          </h2>
          <p class="about__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with new
            and innovative platforms that last a long time.
          </p>
          <a href="#section" class="button">
            Know more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
