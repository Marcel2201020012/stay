import { useState } from 'react';
import '../styles/Kupon_List.css';
import copy from '../images/kupon-list-icons/copy-icon.svg';

const CouponCard = ({ title, minTrans, code, label = 'DISKON APRIL 10%' }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true); // Ubah tombol jadi "DISALIN"
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
                    <button
                        onClick={handleCopy}
                        disabled={isCopied}
                        className={isCopied ? 'disabled' : ''}
                    >
                        {isCopied ? 'DISALIN' : 'SALIN'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CouponCard;