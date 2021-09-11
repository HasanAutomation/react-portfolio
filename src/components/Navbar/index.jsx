import './Navbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Hasan.
          </a>
          <div className='item-container'>
            <Person className='icon' />
            <span>+918240272335</span>
          </div>
          <div className='item-container'>
            <Mail className='icon' />
            <span>+918240272335</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
