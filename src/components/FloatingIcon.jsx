
import React from 'react';
import { useNavigate } from 'react-router-dom';
import chatIcon from '../images/AI_Icon.png'; // ganti sesuai path kamu
import '../styles/FloatingIcon.css';


const FloatingChatButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="floating-chat-button"
      onClick={() => navigate('/chatbot')}
      title="Chat Samy"
    >
      <img src={chatIcon} alt="Chat Samy" />
    </div>
  );
};

export default FloatingChatButton;
