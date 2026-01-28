import React from 'react';
import { motion } from 'framer-motion';

// Using carnival group images from assets
import carnivalImage1 from '../assets/IMG_8216 3.png';
import carnivalImage2 from '../assets/IMG_8216 1.png';
import carnivalImage3 from '../assets/IMG_8216 2.png';

export default function SafetyTipsSection() {
  return (
    <section className="safety-tips-section">

      {/* Decorative Elements */}
      <div className="decoration circle-top-right">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="#FF6B35" strokeWidth="4" fill="none" />
        </svg>
      </div>

      <div className="decoration starburst-top-right">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="40"
              y1="40"
              x2="40"
              y2="8"
              stroke="#FF6B35"
              strokeWidth="2.5"
              transform={`rotate(${i * 30} 40 40)`}
            />
          ))}
        </svg>
      </div>

      <div className="decoration lightning-left">
        <svg width="50" height="80" viewBox="0 0 50 80" fill="#E3E339">
          <path d="M25 0L12 45H30L18 80L42 30H25L35 0Z" />
        </svg>
      </div>

      <div className="decoration starburst-center">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="45"
              y1="45"
              x2="45"
              y2="8"
              stroke="#FF6B35"
              strokeWidth="2.5"
              transform={`rotate(${i * 30} 45 45)`}
            />
          ))}
        </svg>
      </div>

      <div className="decoration circle-bottom-right">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <circle cx="35" cy="35" r="30" stroke="#FF6B35" strokeWidth="3.5" fill="none" />
        </svg>
      </div>

      <div className="decoration starburst-bottom-left">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="37"
              y1="37"
              x2="37"
              y2="7"
              stroke="#FF6B35"
              strokeWidth="2.5"
              transform={`rotate(${i * 30} 37 37)`}
            />
          ))}
        </svg>
      </div>

      <div className="container">

        {/* BLOCK 1: MEDIDAS DE SEGURANÇA */}
        <motion.div
          className="info-block block-right"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <div className="image-frame frame-yellow-cyan">
              <img src={carnivalImage1} alt="Carnaval" className="carnival-img" />
            </div>
            <div className="lightning-decoration">
              <svg width="55" height="90" viewBox="0 0 55 90" fill="#F3DA17">
                <path d="M27 0L14 50H33L20 90L47 34H27L38 0Z" />
              </svg>
            </div>
          </div>

          <div className="text-content">
            <h2 className="section-title title-orange">MEDIDAS DE SEGURANÇA</h2>
            <ul className="info-list">
              <li>Acesso controlado com identificação de participante</li>
              <li>Policiamento e segurança ao longo de todo o trajecto</li>
              <li>Pontos de assistência médica disponíveis</li>
              <li>Equipa de coordenação presente durante todo o evento</li>
            </ul>
          </div>
        </motion.div>

        {/* BLOCK 2: DICAS PRÁTICAS */}
        <motion.div
          className="info-block block-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-content">
            <h2 className="section-title title-blue">DICAS PRÁTICAS</h2>
            <ul className="info-list">
              <li>Vestuário: Use roupas confortáveis e cores vibrantes</li>
              <li>Calçado: Sapatos confortáveis para caminhar</li>
              <li>Hidratação: Traga água e mantenha-se hidratado</li>
              <li>Proteção Solar: Protetor solar e chapéu são recomendados</li>
              <li>Documentação: Leve o teu comprovativo de reserva/kit</li>
            </ul>
          </div>

          <div className="image-wrapper">
            <div className="image-frame frame-cyan-yellow">
              <img src={carnivalImage2} alt="Carnaval" className="carnival-img" />
            </div>
            <div className="circle-decoration">
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                <circle cx="32" cy="32" r="28" stroke="#FF6B35" strokeWidth="3.5" fill="none" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* BLOCK 3: O QUE LEVAR */}
        <motion.div
          className="info-block block-right"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="image-wrapper">
            <div className="image-frame frame-yellow">
              <img src={carnivalImage3} alt="Carnaval" className="carnival-img" />
            </div>
            <div className="circle-decoration-bottom">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="30" stroke="#FF6B35" strokeWidth="3.5" fill="none" />
              </svg>
            </div>
          </div>

          <div className="text-content">
            <h2 className="section-title title-black">O QUE LEVAR</h2>
            <ul className="info-list">
              <li>Documento de identificação</li>
              <li>Comprovativo de reserva</li>
              <li>Água e snacks</li>
              <li>Protetor solar</li>
              <li>Câmara/Telemóvel para capturar momentos</li>
            </ul>
          </div>
        </motion.div>

      </div>

      <style jsx="true">{`
        .safety-tips-section {
          background-color: #F5F1E8;
          padding: 60px 0;
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

        /* --- Decorations --- */
        .decoration {
          position: absolute;
          opacity: 0.7;
          z-index: 5;
        }

        .circle-top-right {
          right: 120px;
          top: 60px;
        }

        .starburst-top-right {
          right: 30px;
          top: 10px;
        }

        .lightning-left {
          left: 100px;
          top: 180px;
        }

        .starburst-center {
          right: 120px;
          top: 420px;
        }

        .circle-bottom-right {
          right: 30px;
          bottom: 280px;
        }

        .starburst-bottom-left {
          left: 20px;
          bottom: 40px;
        }

        /* --- Info Blocks --- */
        .info-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 50px;
          position: relative;
        }

        .info-block:last-child {
          margin-bottom: 0;
        }

        .block-right {
          /* Image on left, text on right */
        }

        .block-left {
          /* Text on left, image on right */
        }

        /* --- Image Wrapper --- */
        .image-wrapper {
          position: relative;
          width: 100%;
        }

        .image-frame {
          padding: 8px;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          position: relative;
          z-index: 2;
        }

        .frame-yellow-cyan {
          background: linear-gradient(135deg, #F3DA17 0%, #00CCD6 100%);
        }

        .frame-cyan-yellow {
          background: linear-gradient(135deg, #00CCD6 0%, #F3DA17 100%);
        }

        .frame-yellow {
          background: linear-gradient(135deg, #F3DA17 0%, #F3DA17 100%);
        }

        .card-green .safety-card-icon {
          background: linear-gradient(135deg, #00CCD6 0%, #F3DA17 100%);
        }

        .card-orange .safety-card-icon {
          background: linear-gradient(135deg, #F3DA17 0%, #F3DA17 100%);
        }

        .carnival-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 4px;
        }

        /* Decorations on images */
        .lightning-decoration {
          position: absolute;
          bottom: -25px;
          left: -25px;
          z-index: 1;
        }

        .circle-decoration {
          position: absolute;
          bottom: -20px;
          right: -20px;
          z-index: 1;
        }

        .circle-decoration-bottom {
          position: absolute;
          bottom: -25px;
          right: -25px;
          z-index: 1;
        }

        /* --- Text Content --- */
        .text-content {
          padding: 0 20px;
        }

        .section-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          line-height: 1;
        }

        .title-orange {
          color: #FF6B35;
        }

        .title-blue {
          color: #0077CC;
        }

        .title-black {
          color: #1A1A1A;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .info-list li {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.95rem;
          color: #2C2C2C;
          margin-bottom: 0.25rem;
          padding-left: 1.2rem;
          position: relative;
          line-height: 1.3;
        }

        .info-list li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #1A1A1A;
          font-size: 1.2rem;
        }

        /* --- Responsive --- */
        @media (max-width: 1024px) {
          .info-block {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 40px;
          }

          .text-content {
            padding: 0;
            order: 2;
          }

          .image-wrapper {
            order: 1;
          }
        }

        @media (max-width: 768px) {
          .safety-tips-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 20px;
          }

          .info-block {
            margin-bottom: 50px;
          }

          .decoration {
            opacity: 0.4;
            transform: scale(0.7);
          }

          .lightning-decoration,
          .circle-decoration,
          .circle-decoration-bottom {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.6rem;
          }

          .info-list li {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
