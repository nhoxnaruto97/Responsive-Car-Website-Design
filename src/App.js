import "./css/base.css";
import "./css/media.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Popular from "./components/Popular";

function App() {
  return (
    <div>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Popular></Popular>
      </main>
    </div>
  );
}

export default App;
