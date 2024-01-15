import './App.css';
import Nav from './components/Nav/Nav';
import Body from './components/body/Body';
import Technologies from './components/technologies/Technologies';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Body />
      <Technologies />
    </div>
  );
}

export default App;
