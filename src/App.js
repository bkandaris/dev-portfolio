import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Particles from 'react-particles-js';
import Projects from './components/Projects';

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
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
