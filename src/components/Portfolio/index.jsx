import { useEffect, useState } from 'react';
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from '../../dummyData';
import PortfolioList from '../PortfolioList';
import './Portfolio.scss';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

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

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'content':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

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
        {data.map((item, index) => (
          <div className='item' key={`item-${index}`}>
            <img src={item.img} alt='' />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
