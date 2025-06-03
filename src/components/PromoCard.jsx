import '../styles/PromoCard.css';
import { Link } from 'react-router-dom';

function PromoCard({ promo }) {
  return (
    <div className="promo-card">
      <img src={promo.image} alt={promo.title} className="promo-image" />
      <Link to='/promotion'>
        <button className="promo-button">Lihat Promo ➝</button>
      </Link>
    </div>
  );
}

export default PromoCard;
