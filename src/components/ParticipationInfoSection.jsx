import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function ParticipationSection() {
  const participationOptions = [


  ];

  return (
    <section className="participation-section" id="participar">
      {/* Decorative Elements */}
      <div className="decoration starburst-left">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          {[...Array(16)].map((_, i) => (
            <line
              key={i}
              x1="60"
              y1="60"
              x2="60"
              y2="10"
              stroke="rgba(253, 76, 27, 1)"
              strokeWidth="3"
              transform={`rotate(${i * 22.5} 60 60)`}
            />
          ))}
        </svg>
      </div>

      <div className="decoration circles-right">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <circle cx="75" cy="75" r="70" stroke="#E3E339" strokeWidth="6" fill="none" />
          <circle cx="75" cy="75" r="50" stroke="#E3E339" strokeWidth="6" fill="none" />
          <circle cx="75" cy="75" r="30" stroke="#E3E339" strokeWidth="6" fill="none" />
        </svg>
      </div>

      <div className="decoration lightning">
        <svg width="40" height="70" viewBox="0 0 40 70" fill="#E3E339">
          <path d="M20 0L10 40H25L15 70L35 25H20L30 0Z" />
        </svg>
      </div>

      <div className="decoration flower">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="#FFFFFF">
          <circle cx="30" cy="30" r="8" />
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={i}
              cx="30"
              cy="15"
              rx="6"
              ry="12"
              transform={`rotate(${i * 60} 30 30)`}
            />
          ))}
        </svg>
      </div>

      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="main-title">JUNTA-TE À FESTA!</h2>
          <h3 className="sub-title">DESCOBRE COMO PARTICIPAR</h3>
          <p className="section-subtitle">Opções de Participação</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {/* Participation Options */}
          {participationOptions.map((option, index) => (
            <motion.div
              key={index}
              className="info-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="card-title">{option.number}. {option.title}</h4>
              <p className="card-description">{option.description}</p>
            </motion.div>
          ))}

          {/* Como Reservar */}
          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="card-title">Como Reservar</h4>
            <p className="card-subtitle">VIA WHATSAPP:</p>
            <p className="phone-numbers">
              <Phone size={16} style={{ display: 'inline', marginRight: '5px' }} />
              +244 941 622 006 • +244 912 662 767
            </p>
            <p className="card-description">
              Ligue, confirme a sua participação, escolha o tipo de kit e receba as instruções de pagamento.
            </p>
          </motion.div>

          {/* Via UZEKA */}
          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="card-title">Via UZEKA (Plataforma de Ticketing)</h4>
            <p className="card-description">
              Aceda à plataforma UZEKA, procure o evento "Carnaval do Show do Mês", escolha a categoria de participação e complete o teu reserva online.
            </p>
          </motion.div>

          {/* O que está incluído */}
          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="card-title">O que está incluído no Kit:</h4>
            <ul className="kit-list">
              <li>Acesso ao desfile</li>
              <li>Acesso à bancada (tipo de Luanda)</li>
              <li>Identificação de participante</li>
              <li>Segurança coordenada durante todo o evento</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://web.uzeka.app/events/818" target="_blank" rel="noopener noreferrer" className="cta-button">
            RESERVA JÁ O TEU KIT
            <ArrowRight size={24} className="arrow-icon" />
          </a>
        </motion.div>
      </div>

      <style jsx="true">{`
        .participation-section {
          background-color: #0C132D;
          padding-top: 40px;
          padding-bottom: 100px;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        /* --- Decorative Elements --- */
        .decoration {
          position: absolute;
          opacity: 0.8;
          z-index: 5;
        }

        .starburst-left {
          left: 80px;
          top: 120px;
        }

        .circles-right {
          right: 50px;
          top: 80px;
        }

        .lightning {
          left: 150px;
          bottom: 280px;
        }

        .flower {
          right: 250px;
          top: 300px;
        }

        /* --- Header --- */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .main-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: #E3E339;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .sub-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          color: rgba(253, 76, 27, 1);
          text-transform: uppercase;
          margin-bottom: 1rem;
          line-height: 1;
        }

        .section-subtitle {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.1rem;
          color: #FFFFFF;
          font-weight: 300;
        }

        /* --- Cards Grid --- */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }

        .info-card {
          background-color: rgba(20, 30, 60, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 30px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(227, 227, 57, 0.2);
        }

        .card-title {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.3rem;
          font-weight: bold;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }

        .card-subtitle {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.9rem;
          color: #00CCD6;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .phone-numbers {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          color: #FFFFFF;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }

        .card-description {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #C0C0C0;
        }

        .kit-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .kit-list li {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.95rem;
          color: #C0C0C0;
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .kit-list li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #E3E339;
          font-size: 1.2rem;
        }

        /* --- CTA Button --- */
        .cta-wrapper {
          display: flex;
          justify-content: center;
        }

        .cta-button {
          background-color: #F3DA17;
          color: #0C132D;
          border-radius: 9999px;
          padding: 12px 28px;
          font-family: 'Impact', sans-serif;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 2rem;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(243, 218, 23, 0.4);
          background-color: #F3DA17;
        }

        .arrow-icon {
          background-color: #0C132D;
          color: #F3DA17;
          border-radius: 50%;
          padding: 4px;
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .decoration {
            opacity: 0.4;
          }

          .starburst-left {
            left: 20px;
            top: 50px;
            transform: scale(0.7);
          }

          .circles-right {
            right: 20px;
            top: 50px;
            transform: scale(0.7);
          }

          .lightning {
            left: 30px;
            bottom: 150px;
            transform: scale(0.6);
          }

          .flower {
            right: 50px;
            top: 200px;
            transform: scale(0.6);
          }

          .container {
            padding: 0 20px;
          }
        }

        @media (max-width: 600px) {
          .participation-section {
            padding: 60px 0;
          }

          .cta-button {
            font-size: 1.1rem;
            padding: 15px 35px;
          }
        }
      `}</style>
    </section>
  );
}
