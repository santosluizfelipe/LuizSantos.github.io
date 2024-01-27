import "./App.css";
import Nav from "./components/Nav/Nav";
import Body from "./components/body/Body";
import Projects from "./components/projects/Projects";
import Carousel from "./components/technologies/Carousel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Body />
      <Carousel />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
