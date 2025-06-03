import ck from '../images/hotel-images/ck.png';
import alltrue from '../images/hotel-images/alltrue.png';

import location from '../images/facility-icons/location.png';
import room from '../images/facility-icons/room.png';
import city from '../images/facility-icons/city.png';
import balcony from '../images/facility-icons/balcony.png';

const hotels = [
    {
        id: 1,
        name: "Ck Tanjungpinang Hotel & Convention Center",
        description: "Ck Tanjungpinang Hotel & Convention Center Breakfast 2 pax",
        images: ck,
        details: [
                  { icon: location, text: "Jalan H. Agus Salim No.10, Tanjung Pinang Timur, Tanjung Pinang" },
                  { icon: room, text: "Room size: 27 m²/291 ft²" },
                  { icon: city, text: "City View" },
                  { icon: balcony, text: "Balcony" }
                ],
        price: 600000
    },
    {
        id: 2,
        name: "Alltrue Hotel Bintan – Tanjungpinang",
        description: "Alltrue Hotel Bintan – Tanjungpinang Breakfast 2 pax",
        images: alltrue,
        details: [
                  { icon: location, text: "Jl. Gudang Minyak No.2, Kemboja, Kec. Tanjungpinang Barat" },
                  { icon: room, text: "Room size: 27 m²/291 ft²" },
                  { icon: city, text: "City View" },
                  { icon: balcony, text: "Balcony" }
                ],
        price: 650000
    }
]

export default hotels;