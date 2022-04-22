import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Popular from "./components/Popular";
import Features from "./components/Features";
import Featured from "./components/Featured";
import Offer from "./components/Offer";
import Logos from "./components/logos";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import ScrollReveal from "scrollreveal";
import "./css/base.css";
import "./css/media.css";

function App() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    //reset: true
  });

  sr.reveal(
    `.home__title, .popular__container, .features__img, .featured__filters`
  );
  sr.reveal(`.home__subtitle`, { delay: 500 });
  sr.reveal(`.home__elec`, { delay: 600 });
  sr.reveal(`.home__img`, { delay: 800 });
  sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: "bottom" });
  sr.reveal(`.home__button`, { delay: 1000, origin: "bottom" });
  sr.reveal(`.about__group, .offer__data`, { origin: "left" });
  sr.reveal(`.about__data, .offer__img`, { origin: "right" });
  sr.reveal(`.features__map`, { delay: 600, origin: "bottom" });
  sr.reveal(`.features__card`, { interval: 300 });
  sr.reveal(`.featured__card, .logos__content, .footer__content`, {
    interval: 100,
  });
  return (
    <div>
      <Header></Header>
      <main className="main">
        <Home />
        <About />
        <Popular />
        <Features />
        <Featured />
        <Offer />
        <Logos />
      </main>
      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </div>
  );
}

export default App;
