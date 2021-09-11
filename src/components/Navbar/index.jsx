import './Navbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Navbar() {
  return (
    <div className='navbar'>
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
          <div className='hamburger'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
