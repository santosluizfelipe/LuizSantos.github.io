import './App.css';
import Nav from './components/Nav/Nav';
import Body from './components/body/Body';
import Technologies from './components/technologies/Technologies';
import Projects from './components/projects/Projects';
import Carousel from './components/technologies/Carousel';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Body />
      <Carousel />
      <Projects />
    </div>
  );
}

export default App;
