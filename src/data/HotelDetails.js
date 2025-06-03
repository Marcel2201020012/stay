import ck1 from '../images/hotel-images/ck1.png'
import ck2 from '../images/hotel-images/ck2.png'
import ck3 from '../images/hotel-images/ck3.png'
import ck4 from '../images/hotel-images/ck4.png'
import ck5 from '../images/hotel-images/ck5.png'
import ck6 from '../images/hotel-images/ck6.png'

import alltrue from '../images/hotel-images/alltrue.png'

import ac from '../images/facility-icons/ac.png';
import kolam from '../images/facility-icons/kolam.png';
import wifi from '../images/facility-icons/wifi.png';
import resto from '../images/facility-icons/resto.png';
import taxi from '../images/facility-icons/taxi.png';

import kamar1 from '../images/hotel-images/kamar1.png'
import kamar2 from '../images/hotel-images/kamar2.png'
import kamar3 from '../images/hotel-images/kamar3.png'

import bedd from '../images/facility-icons/bedd.png';
import room from '../images/facility-icons/room.png';
import city from '../images/facility-icons/city.png';
import balcony from '../images/facility-icons/balcony.png';

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
        id: 1,
        name: "Deluxe Twin City View",
        description: "Deluxe Twin-Regular Breakfast 2 pax",
        image: kamar1,
        details: [
          { icon: bedd, text: "2 Twin Bed" },
          { icon: room, text: "Room size: 27 m²/291 ft²" },
          { icon: city, text: "City View" },
          { icon: balcony, text: "Balcony" }
        ],
        cancellation: "Free Cancellation 20 April 12.59",
        availability: "5 Kamar Tersisa!",
        price: 600000
      },
      {
        id: 2,
        name: "Deluxe Queen Bed",
        description: "Deluxe Queen Bed-Regular Breakfast 2 pax",
        image: kamar2,
        details: [
          { icon: bedd, text: "2 Twin Bed" },
          { icon: room, text: "Room size: 27 m²/291 ft²" },
          { icon: city, text: "City View" },
          { icon: balcony, text: "Balcony" }
        ],
        cancellation: "Free Cancellation 20 April 12.59",
        availability: "5 Kamar Tersisa!",
        price: 600000
      },
      {
        id: 3,
        name: "Executive King",
        description: "Executive-Regular Breakfast 2 pax",
        image: kamar3,
        details: [
          { icon: bedd, text: "2 Twin Bed" },
          { icon: room, text: "Room size: 27 m²/291 ft²" },
          { icon: city, text: "City View" },
          { icon: balcony, text: "Balcony" }
        ],
        cancellation: "Free Cancellation 20 April 12.59",
        availability: "5 Kamar Tersisa!",
        price: 600000
      },
    ],
    // Dalam objek hotel
    reviews: [
      {
        id: 1,
        name: 'Aldy. R',
        score: 9,
        comment: "Great Hotel, I've best experience in this hotel, good job to all employees and management"
      },
      {
        id: 2,
        name: 'Irfan',
        score: 9,
        comment: "I stayed here for one night and it was a pleasant experience. The room was huge, especially the bathroom, which was neat and clean. It's an affordable price too. The location is precisely across the street with a plaza nearby. The staff were warm and friendly. It was an unforgettable experience overall."
      }
    ],
    ratingSummary: {
      score: 4.9,
      label: 'Very Good',
      totalReviews: 674
    }


  },
  {
    id: 2,
    name: "Alltrue Hotel Bintan – Tanjungpinang",
    address: "Jl. Gudang Minyak No.2, Kemboja, Kec. Tanjungpinang Barat",
    description:
      "Menginap di Alltrue Tanjungpinang dengan pemandangan kota yang menakjubkan, pelayanan yang ramah, dan berbagai pilihan tempat makan. Jelajahi tempat-tempat menarik di sekitarnya untuk pengalaman menginap yang tak terlupakan.",
    gallery: [
      alltrue,
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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2965481646015!2d104.44986967431579!3d0.926629799064426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d973e060c05adb%3A0x291938d1a2bc0fd!2sAlltrue%20Hotel%20Tanjungpinang!5e0!3m2!1sid!2sid!4v1748939147241!5m2!1sid!2sid",
    nearby: [
      { name: "Nasi Campur Kananga", distance: "30 m" },
      { name: "Kafe Kartika RSPAD Gatot S", distance: "80 m" },
      { name: "XXI", distance: "150 m" },
    ],
    rooms: [
      {
        id: 1,
        name: "Deluxe Twin City View",
        description: "Deluxe Twin-Regular Breakfast 2 pax",
        image: kamar1,
        details: [
          { icon: bedd, text: "2 Twin Bed" },
          { icon: room, text: "Room size: 27 m²/291 ft²" },
          { icon: city, text: "City View" },
          { icon: balcony, text: "Balcony" }
        ],
        cancellation: "Free Cancellation 20 April 12.59",
        availability: "5 Kamar Tersisa!",
        price: 600000
      },
      {
        id: 2,
        name: "Deluxe Queen Bed",
        description: "Deluxe Queen Bed-Regular Breakfast 2 pax",
        image: kamar2,
        details: [
          { icon: bedd, text: "2 Twin Bed" },
          { icon: room, text: "Room size: 27 m²/291 ft²" },
          { icon: city, text: "City View" },
          { icon: balcony, text: "Balcony" }
        ],
        cancellation: "Free Cancellation 20 April 12.59",
        availability: "5 Kamar Tersisa!",
        price: 600000
      },
      {
        id: 3,
        name: "Executive King",
        description: "Executive-Regular Breakfast 2 pax",
        image: kamar3,
        details: [
          { icon: bedd, text: "2 Twin Bed" },
          { icon: room, text: "Room size: 27 m²/291 ft²" },
          { icon: city, text: "City View" },
          { icon: balcony, text: "Balcony" }
        ],
        cancellation: "Free Cancellation 20 April 12.59",
        availability: "5 Kamar Tersisa!",
        price: 600000
      },
    ],
    // Dalam objek hotel
    reviews: [
      {
        id: 1,
        name: 'Aldy. R',
        score: 9,
        comment: "Great Hotel, I've best experience in this hotel, good job to all employees and management"
      },
      {
        id: 2,
        name: 'Irfan',
        score: 9,
        comment: "I stayed here for one night and it was a pleasant experience. The room was huge, especially the bathroom, which was neat and clean. It's an affordable price too. The location is precisely across the street with a plaza nearby. The staff were warm and friendly. It was an unforgettable experience overall."
      }
    ],
    ratingSummary: {
      score: 4.9,
      label: 'Very Good',
      totalReviews: 674
    }


  },
  // Tambah hotel lainnya...
];

export default hotelDetails;
