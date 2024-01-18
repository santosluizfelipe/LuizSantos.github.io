import './App.css';
import Nav from './components/Nav/Nav';
import Body from './components/body/Body';
import Technologies from './components/technologies/Technologies';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Body />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
