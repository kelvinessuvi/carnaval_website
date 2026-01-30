import React from 'react';
import { motion } from 'framer-motion';
import logoNew from '../assets/logo-new-1.png';
import logoPura from '../assets/Pura+logo+pdf-01.webp';
import logoSuperBock from '../assets/Super_Bock_Logo.png';

export default function PartnersSection() {

  return (
    <section className="partners-section" id="parceiros">

      {/* Decorative Element */}
      <div className="decoration starburst-left">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2="50"
              y2="10"
              stroke="rgba(253, 76, 27, 1)"
              strokeWidth="3"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="container">

        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">PARCEIROS</h2>
          <p className="section-subtitle">Parceiros que Tornam Isto Possível</p>

          <div className="partners-grid">
            <div className="partner-logo">
              <img src={logoNew} alt="Partner Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <div className="partner-logo">
              <img src={logoPura} alt="Pura" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <div className="partner-logo">
              <img src={logoSuperBock} alt="Super Bock" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>


          <motion.p
            className="partners-message"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Agradecimentos especiais a todos os parceiros que tornam<br />
            o Carnaval do Show do Mês uma realidade.
          </motion.p>
        </motion.div>

      </div>

      <style jsx="true">{`
        .partners-section {
          background-color: #0C132D;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        /* --- Decoration --- */
        .decoration {
          position: absolute;
          opacity: 0.7;
          z-index: 5;
        }

        .starburst-left {
          left: 25px;
          top: 25px;
        }

        /* --- Content --- */
        .content-wrapper {
          text-align: center;
        }

        .section-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          color: #F3DA17;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          letter-spacing: 1px;
        }

        .section-subtitle {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.1rem;
          color: #FFFFFF;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        /* --- Partners Grid --- */
        .partners-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 3rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .partner-logo {
          width: 220px;
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: rgba(255, 255, 255, 0.05);
        }

        .partner-logo:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(227, 227, 57, 0.2);
        }

        .partner-logo span {
          font-family: 'Impact', sans-serif;
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          font-weight: bold;
          text-transform: uppercase;
        }

        /* --- Message --- */
        .partners-message {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          color: #D0D0D0;
          line-height: 1.6;
          margin-top: 2.5rem;
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .partners-grid {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .partners-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 20px;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .partners-grid {
            gap: 15px;
          }

          .partner-logo {
            padding: 15px;
          }

          .partners-message {
            font-size: 0.95rem;
          }

          .decoration {
            opacity: 0.5;
            transform: scale(0.7);
          }
        }

        @media (max-width: 480px) {
          .partners-grid {
            gap: 15px;
          }

          .section-title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
}
