import '../styles/PromoCard.css';

function PromoCard({ promo }) {
  return (
    <div className="promo-card">
      <img src={promo.image} alt={promo.title} className="promo-image" />
      <button className="promo-button">Lihat Promo ➝</button>
    </div>
  );
}

export default PromoCard;
