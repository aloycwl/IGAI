import React, { useEffect, useRef } from 'react';
import blockies from 'blockies';

const Avatar = ({ address, size = 40, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!address || !canvasRef.current) return;

    try {
      // Generate blockies avatar
      const icon = blockies({
        seed: address.toLowerCase(),
        size: 8,
        scale: size / 8,
        spotcolor: '#00ffff'
      });

      // Clear previous content
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, size, size);

      // Draw the generated avatar
      ctx.drawImage(icon, 0, 0);
    } catch (error) {
      console.error('Error generating avatar:', error);
    }
  }, [address, size]);

  if (!address) {
    return (
      <div 
        className={`avatar-placeholder ${className}`}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: size * 0.4
        }}
      >
        ?
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={`avatar ${className}`}
      style={{
        borderRadius: '50%',
        display: 'block'
      }}
    />
  );
};

export default Avatar; 