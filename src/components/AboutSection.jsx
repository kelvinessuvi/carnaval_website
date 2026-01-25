import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Specific Assets requested by User
import bgImage from '../assets/1C7A8525.png';
import dancersGroup from '../assets/Group 1707478142.png';
import tapeFrame from '../assets/Frame 47.png'; // The long tape strip

export default function AboutSection() {
  const containerRef = useRef(null);

  // Optional parallax effect for the tape if desired, 
  // but strictly following CSS for now.

  return (
    <section className="about-section" id="sobre" ref={containerRef}>

      {/* 1. BACKGROUND LAYER (1C7A8525) */}
      <div className="about-bg-layer"></div>

      {/* 2. TEXT CONTENT (Kept from previous, positioned relative to be visible) */}
      <div className="container about-text-container">
        <h3 className="about-sub-title">O CARNAVAL É DE</h3>
        <h2 className="about-main-title">ANGOLANOS PARA ANGOLANOS</h2>

        <div className="about-body-text">
          <p>
            Este é mais do que um desfile. É um movimento. Uma celebração que une a Cidadela à Baía de
            Luanda, do Musseque à Baixa, em família e com amor. Reunimos as pessoas para festejar sem
            medo, com alegria genuína e a força da nossa tradição.
          </p>
          <p>
            O <span className="highlight-yellow">Carnaval do Show do Mês</span> é um evento anual organizado uma semana antes da semana oficial do
            Carnaval, trazendo à rua os maiores grupos da nossa tradição carnavalesca. Showistas, Veteranos,
            Recrutas e Batalhões - todos juntos numa festa única que celebra a identidade angolana.
          </p>
        </div>
      </div>

      {/* 3. DANCERS GROUP (Group 1707478142) */}
      <div className="dancers-container">
        <img src={dancersGroup} alt="Carnaval Dancers" className="dancers-img" />
      </div>

      {/* 4. TAPE FOOTER (Frame 47) */}
      <div className="tape-footer-container">
        <img src={tapeFrame} alt="Movimento Sticker Tape" className="tape-img" />
      </div>

      <style jsx="true">{`
        .about-section {
          position: relative;
          width: 100%;
          /* Min height to accommodate the large elements */
          min-height: 1200px; 
          overflow: visible; /* Changed to visible so tape isn't cut off */
          background-color: #0C132D; /* Fallback */
          padding-top: 100px;
          margin-bottom: 0; /* Align with whatever follows */
        }

        /* --- 1. Background (Matches CSS for 1C7A8525) --- */
        .about-bg-layer {
          position: absolute;
          width: 100%;
          /* Reduced height as requested */
          height: 600px; 
          bottom: 0; 
          left: 0;
          background: linear-gradient(180deg, rgba(12, 19, 45, 0) 0%, #0C132D 90%), 
                      url('${bgImage}');
          background-size: cover;
          background-position: center top; 
          opacity: 0.6; 
          z-index: 0;
        }

        /* --- 2. Text --- */
        .about-text-container {
          position: relative;
          z-index: 20;
          text-align: center;
          margin-bottom: 0; 
          padding-bottom: 0; 
        }

        .about-sub-title {
          font-family: 'Impact', sans-serif;
          color: #00CCD6;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transform: none; /* Explicitly ensure no rotation */
        }

        .about-main-title {
          font-family: 'Impact', sans-serif;
          color: #E3E339;
          font-size: clamp(2.5rem, 5vw, 4rem);
          text-transform: uppercase;
          line-height: 1;
          transform: none; /* Explicitly ensure no rotation */
        }

        .about-body-text {
          max-width: 800px;
          margin: 2rem auto 0 auto; /* Removed bottom margin */
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #E0E0E0;
        }
        .highlight-yellow { color: #E3E339; font-weight: bold; }


        /* --- 3. Dancers (Responsive) --- */
        .dancers-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 10;
          margin-top: -140px; /* Pulled up VERY close */
        }

        .dancers-img {
          /* Reduced size as requested */
          width: 85%;
          max-width: 1100px; 
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,0.5));
        }


        /* --- 4. Tape (Responsive Footer) --- */
        .tape-footer-container {
          position: absolute;
          bottom: -18%; /* Lowered further per request */
          left: 50%;
          transform: translateX(-50%) rotate(-3.76deg);
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 30;
          pointer-events: none;
          overflow: visible;
        }

        .tape-img {
          width: 120%; /* Reduced size */
          min-width: 1600px; 
          max-width: none;
          height: auto;
          object-fit: cover;
        }
        
        /* Mobile Tweaks */
        @media (max-width: 768px) {
           .about-section { padding-top: 60px; padding-bottom: 140px; } 
           .dancers-img { width: 100%; margin-top: 0; }
           .tape-footer-container { bottom: -80px; }
           .tape-img { min-width: 1000px; width: 180%; }
        }
        
        /* Animation for tape if desired? 
           User CSS didn't explicitly ask for animation, just transform.
        */

      `}</style>
    </section>
  );
}
