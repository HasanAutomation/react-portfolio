import './PortfolioList.scss';

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={`portfolio-list ${active ? 'active' : ''}`}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
