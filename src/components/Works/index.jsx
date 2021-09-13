import { useState } from 'react';
import { sliderData } from '../../dummyData';
import './Works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = way => {
    way === 'left'
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : sliderData.length - 1
        )
      : setCurrentSlide(
          currentSlide < sliderData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {sliderData.map((item, index) => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <div className='left-container'>
                  <div className='img-container'>
                    <img src={item.icon} alt='' />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>{item.title}</span>
                </div>
              </div>
              <div className='right'>
                <img src={item.img} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src='/assets/arrow.png'
        className='arrow left'
        alt=''
        onClick={() => handleClick('left')}
      />
      <img
        src='/assets/arrow.png'
        className='arrow right'
        alt=''
        onClick={() => handleClick()}
      />
    </div>
  );
}
