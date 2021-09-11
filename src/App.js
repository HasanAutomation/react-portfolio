import { useState } from 'react';
import './App.scss';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Works from './components/Works';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='App'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
