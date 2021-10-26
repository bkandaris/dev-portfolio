import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <Particles
        params={{
          polygon: {
            enable: true,
            type: 'inside',
            move: {
              radius: 10,
            },
            url: 'path/to/svg.svg',
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
