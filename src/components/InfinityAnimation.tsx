
import React from 'react';

const InfinityAnimation: React.FC = () => {
  return (
    <div className="infinity-container">
      <div className="infinity-path" style={{ transform: 'rotate(0deg)', animationDelay: '0s' }}></div>
      <div className="infinity-path" style={{ transform: 'rotate(30deg)', animationDelay: '0.2s' }}></div>
      <div className="infinity-path" style={{ transform: 'rotate(60deg)', animationDelay: '0.4s' }}></div>
      <div className="infinity-path" style={{ transform: 'rotate(90deg)', animationDelay: '0.6s' }}></div>
      <div className="infinity-path" style={{ transform: 'rotate(120deg)', animationDelay: '0.8s' }}></div>
      <div className="infinity-path" style={{ transform: 'rotate(150deg)', animationDelay: '1s' }}></div>
    </div>
  );
};

export default InfinityAnimation;
