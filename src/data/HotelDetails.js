import ck1 from '../images/hotel-images/ck1.png'
import ck2 from '../images/hotel-images/ck2.png'
import ck3 from '../images/hotel-images/ck3.png'
import ck4 from '../images/hotel-images/ck4.png'
import ck5 from '../images/hotel-images/ck5.png'
import ck6 from '../images/hotel-images/ck6.png'

import ac from '../images/facility-icons/ac.png';
import kolam from '../images/facility-icons/kolam.png';
import wifi from '../images/facility-icons/wifi.png';
import resto from '../images/facility-icons/resto.png';
import taxi from '../images/facility-icons/taxi.png';

const hotelDetails = [
  {
    id: 1,
    name: "Ck Tanjungpinang Hotel & Convention Center",
    address: "Jalan H. Agus Salim No.10, Tanjung Pinang Timur, Tanjung Pinang",
    description:
      "Menginap di Ck Tanjungpinang dengan pemandangan kota yang menakjubkan, pelayanan yang ramah, dan berbagai pilihan tempat makan. Jelajahi tempat-tempat menarik di sekitarnya untuk pengalaman menginap yang tak terlupakan.",
    gallery: [
      "/images/ck.png",
      ck1,
      ck2,
      ck3,
      ck4,
      ck5,
      ck6,
    
    ],
    facilities: ["AC", "Kolam", "WiFi", "Restoran", "Taksi Lokal"],
    facilityIcons: [
      { icon: ac, label: "AC" },
      { icon: kolam, label: "Kolam" },
      { icon: wifi, label: "WiFi" },
      { icon: resto, label: "Restoran" },
      { icon: taxi, label: "Taksi Lokal" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3247196661605!2d104.48337877431575!3d0.9012668990900121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d96d6fb9462e7d%3A0xfb62f8e59a9bb95d!2sCK%20Tanjungpinang%20Hotel%20%26%20Convention%20Centre!5e0!3m2!1sid!2sid!4v1747859178770!5m2!1sid!2sid",
    nearby: [
      { name: "Nasi Campur Kananga", distance: "30 m" },
      { name: "Kafe Kartika RSPAD Gatot S", distance: "80 m" },
      { name: "XXI", distance: "150 m" },
    ],
    rooms: [
      {
        name: "Deluxe Twin City View",
        bed: "2 Twin Bed",
        size: "27 m²",
        view: "City View",
        balcony: true,
        price: 600000,
        available: 5,
        image: "/images/hotel-images/room1.jpg"
      }
    ]
  },
  // Tambah hotel lainnya...
];

export default hotelDetails;
