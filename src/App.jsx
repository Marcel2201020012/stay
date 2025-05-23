import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Promotion from './pages/Promotion';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Daftar from './pages/Daftar';
import Masuk from './pages/masuk';
import HotelDetail from './pages/HotelDetail'; // ✅ Tambahkan import ini

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} /> {/* Initial loading page */}
      <Route path="/home" element={<Home />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/masuk" element={<Masuk />} />
      <Route path="/hotel/:id" element={<HotelDetail />} /> {/* ✅ Tambahkan route ini */}
    </Routes>
  );
}

export default App;
