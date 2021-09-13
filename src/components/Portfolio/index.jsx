import './Portfolio.scss';

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Mobile</li>
        <li>Web</li>
        <li>Desktop</li>
        <li>Game</li>
      </ul>
      <div className='container'>
        <div className='item'>
          <img src='https://source.unsplash.com/random' alt='' />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img src='https://source.unsplash.com/random' alt='' />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img src='https://source.unsplash.com/random' alt='' />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img src='https://source.unsplash.com/random' alt='' />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img src='https://source.unsplash.com/random' alt='' />
          <h3>Banking App</h3>
        </div>
        <div className='item'>
          <img src='https://source.unsplash.com/random' alt='' />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
