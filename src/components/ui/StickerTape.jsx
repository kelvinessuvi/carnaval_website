import React from 'react';

export default function StickerTape() {
  const stickers = [
    { text: 'MOVIMENTO', color: '#FF6871' }, // Pink
    { text: 'QUE', color: '#E3E339' },       // Yellow
    { text: 'IMPULSIONA', color: '#FF7527' },// Orange
    { text: 'MOVIMENTO', color: '#FF6871' },
    { text: 'QUE', color: '#E3E339' },
    { text: 'IMPULSIONA', color: '#FF7527' },
    { text: 'MOVIMENTO', color: '#FF6871' },
    { text: 'QUE', color: '#E3E339' },
  ];

  return (
    <div className="sticker-tape-container">
      <div className="tape-track">
        {stickers.map((item, index) => (
          <div
            key={index}
            className="sticker-pill"
            style={{
              backgroundColor: item.color,
              transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .sticker-tape-container {
          width: 100%;
          overflow: hidden;
          padding: 2rem 0;
          position: relative;
          z-index: 20;
          /* Tilted overall container to match design flow */
          transform: rotate(-2deg) translateY(20px);
        }

        .tape-track {
          display: flex;
          justify-content: center; /* Center initially, or use space-around */
          gap: 1.5rem;
          flex-wrap: nowrap;
          min-width: 100%;
        }

        .sticker-pill {
          padding: 0.8rem 2rem;
          border-radius: 999px;
          border: 4px solid #0C132D; /* Dark border like sticker */
          font-family: 'Impact', sans-serif;
          font-size: clamp(1.2rem, 3vw, 2.5rem);
          color: #0C132D;
          text-transform: uppercase;
          white-space: nowrap;
          box-shadow: 4px 4px 0px rgba(0,0,0,0.3);
        }

        /* Responsive Flow */
        @media (max-width: 768px) {
          .tape-track {
            justify-content: flex-start;
            animation: scroll 20s linear infinite;
          }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
