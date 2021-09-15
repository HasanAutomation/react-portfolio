import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './Intro.scss';

export default function Intro() {
  const typeRef = useRef();

  useEffect(() => {
    init(typeRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ['Web', 'Mobile', 'Desktop'],
    });
  }, []);
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='/assets/hasan_updated.png' alt='Man' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There,I'm</h2>
          <h1>Hasan Ali</h1>
          <h3>
            I work as a <span ref={typeRef}></span> developer
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='/assets/down.png' alt='Down' />
        </a>
      </div>
    </div>
  );
}
