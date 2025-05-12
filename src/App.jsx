import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Daftar from './pages/Daftar';
import Masuk from './pages/masuk';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} /> 
      <Route path="/home" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/Daftar" element={<Daftar />} />
      <Route path="/masuk" element={<Masuk />} />

    </Routes>
  );
}

export default App;
