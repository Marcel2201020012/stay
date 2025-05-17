import '../styles/Kupon_List.css';
import copy from '../images/kupon-list-icons/copy-icon.svg'

const CouponCard = ({ title, minTrans, code, label = 'DISKON APRIL 10%' }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        alert('Kode disalin!');
    };

    return (
        <div className="coupon-card">
            <div className="ribbon">{label}</div>
            <div className="coupon-content">
                <div className="left-section">
                    <h4>{title}</h4>
                    <p>Min. transaksi {minTrans}</p>
                </div>
                <div className="divider" />
                <div className="right-section">
                    <div className="coupon-code">
                        <img src={copy} alt="Salin" />
                        <span>{code}</span>
                    </div>
                    <button onClick={handleCopy}>SALIN</button>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;
