import '../styles/Navbar_search.css'

import hotelSearchIcon from '../images/search-icons/hotel.svg'
import calendarSearchIcon from '../images/search-icons/calendar.svg'
import guestSearchIcon from '../images/search-icons/guest.svg'
import glassSearchIcon from '../images/search-icons/glass.svg'
import barrierSearchIcon from '../images/search-icons/barrier.svg'

const NavbarSearchBar = () => {
    return (
        <div className='Navbarsearch-section'>
            <div className="search-bar-wrapper">

                <div className="Navbarsearch-box">
                    <span className="icon">
                        <img src={hotelSearchIcon} alt="hotel icon" />
                    </span>

                    <div className="Navbarsearch-field">
                        <input type="text" placeholder="Mau nginap di mana?" />
                    </div>

                    <img src={barrierSearchIcon} alt="barrier icon" />

                    <span className="icon">
                        <img src={calendarSearchIcon} alt="calendar icon" />
                    </span>

                    <div className="Navbarsearch-field">
                        <input type="date" />
                    </div>

                    <p>-</p>

                    <div className="Navbarsearch-field">
                        <input type="date" />
                    </div>

                    <img src={barrierSearchIcon} alt="barrier icon" />

                    <span className="icon">
                        <img src={guestSearchIcon} alt="guest icon" />
                    </span>

                    <div className="Navbarsearch-field">
                        <select>
                            <option>1 Dewasa</option>
                            <option>2 Dewasa</option>
                            <option>3 Dewasa</option>
                        </select>
                    </div>

                    <div className="Navbarsearch-field">
                        <select>
                            <option>0 Anak</option>
                            <option>1 Anak</option>
                            <option>2 Anak</option>
                            <option>3 Anak</option>
                        </select>
                    </div>

                    <div className="Navbarsearch-field">
                        <select>
                            <option>1 Ruang</option>
                            <option>2 Ruang</option>
                            <option>3 Ruang</option>
                        </select>
                    </div>

                    <button className="Navbarsearch-button">
                        <img src={glassSearchIcon} alt="glass icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavbarSearchBar;
