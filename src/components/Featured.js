import React, { useState } from "react";
import { ReactMixitup } from "react-mixitup";

import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import pic1 from "../img/featured1.png";
import pic2 from "../img/featured2.png";
import pic3 from "../img/featured3.png";
import pic4 from "../img/featured4.png";
import pic5 from "../img/featured5.png";
import "../css/featured.css";

const defaultCar = [
  {
    id: "car1",
    title: "Tesla",
    subTitle: "Model X",
    img: pic1,
    price: "$98,900",
  },
  {
    id: "car2",
    title: "Tesla",
    subTitle: "Model 3",
    img: pic2,
    price: "$45,900",
  },
  {
    id: "car3",
    title: "Audi",
    subTitle: "E-tron",
    img: pic3,
    price: "$175,900",
  },
  {
    id: "car4",
    title: "Porsche",
    subTitle: "Boxster 987",
    img: pic4,
    price: "$126,900",
  },
  {
    id: "car5",
    title: "Porsche",
    subTitle: "Panamera",
    img: pic5,
    price: "$126,900",
  },
];

const Featured = () => {
  const [cars, setCars] = useState([...defaultCar]);
  const keys = cars.map(({ id }) => id);
  return (
    <section className="featured section">
      <h2 className="section__title">Featured Luxury Cars</h2>

      <div className="featured__container container">
        <ul className="featured__filters">
          <li>
            <button
              className="featured__item active-featured"
              onClick={() => setCars([...defaultCar])}
            >
              <span>All</span>
            </button>
          </li>
          <li>
            <button
              className="featured__item"
              onClick={() =>
                setCars(
                  defaultCar.filter(
                    (car) => car.title.toLowerCase() === "tesla"
                  )
                )
              }
            >
              <img src={logo3} alt="" />
            </button>
          </li>
          <li>
            <button
              className="featured__item"
              onClick={() =>
                setCars(
                  defaultCar.filter((car) => car.title.toLowerCase() === "audi")
                )
              }
            >
              <img src={logo2} alt="" />
            </button>
          </li>
          <li>
            <button
              className="featured__item"
              onClick={() =>
                setCars(
                  defaultCar.filter(
                    (car) => car.title.toLowerCase() === "porsche"
                  )
                )
              }
            >
              <img src={logo1} alt="" />
            </button>
          </li>
        </ul>

        <ReactMixitup
          keys={keys}
          renderCell={(key, style, ref) => {
            const car = cars.find((car) => car.id === key) || {};
            return (
              <article ref={ref} key={key} className="featured__card">
                <div className="shape shape__smaller"></div>

                <h1 className="featured__title">{car.title}</h1>

                <h3 className="featured__subtitle">{car.subTitle}</h3>

                <img src={car.img} alt="" className="featured__img" />

                <h3 className="featured__price">{car.price}</h3>

                <button className="button featured__button">
                  <i className="ri-shopping-bag-2-line"></i>
                </button>
              </article>
            );
          }}
          renderWrapper={(style, ref, cells) => {
            return (
              <div className="featured__content grid" ref={ref}>
                {cells}
              </div>
            );
          }}
          dynamicDirection="horizontal"
          transitionDuration={300}
        />
      </div>
    </section>
  );
};

export default Featured;
