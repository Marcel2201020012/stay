import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Promotion from './pages/Promotion';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Register from './pages/Register';
import HotelDetail from './pages/HotelDetail';
import Chatbot from './pages/Chatbot';
import Pencarian from './pages/Pencarian';
import RestartScroll from './components/RestartScroll';

function App() {
  return (
    <Router>
      <RestartScroll />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/chatbot" element={<Chatbot />} />

        <Route path="/home" element={<Home />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pencarian" element={<Pencarian />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
