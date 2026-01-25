import React from 'react';

export default function SectionDivider({ color = 'yellow', text = 'CARNAVAL 2025' }) {
  const tapeColor = `var(--tape-${color})`;
  const textColor = color === 'yellow' ? 'black' : 'white';

  // Create a long string of repeated text
  const repeatedText = Array(20).fill(text).join('  •  ');

  return (
    <div className="section-divider">
      <div className="tape-strip">
        <div className="tape-content">{repeatedText}</div>
      </div>

      <style jsx="true">{`
        .section-divider {
          position: relative;
          height: 80px; 
          overflow: hidden;
          width: 100%;
          z-index: 10;
          margin: 0;
        }

        .tape-strip {
          background-color: ${tapeColor};
          color: ${textColor};
          font-family: var(--font-display);
          font-weight: 400; /* Impact is usually 400 */
          font-size: 1.5rem;
          text-transform: uppercase;
          white-space: nowrap;
          padding: 0.8rem 0;
          position: absolute;
          width: 110%;
          left: -5%;
          transform: rotate(var(--rotation-tape)); /* Exact rotation */
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tape-content {
          animation: marquee 60s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
