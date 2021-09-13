import { useState } from 'react';
import PortfolioList from '../PortfolioList';
import './Portfolio.scss';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');

  function highlight(id) {
    setSelected(id);
  }

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(({ title, id }) => (
          <PortfolioList
            title={title}
            key={`item-${id}`}
            active={selected === id}
            setSelected={highlight}
            id={id}
          />
        ))}
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
