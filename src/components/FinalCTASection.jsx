import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Facebook, Instagram, Linkedin, Music2, Youtube } from 'lucide-react';
import uzekaLogo from '../assets/uzeka_logo.png';

export default function FinalCTASection() {
  return (
    <section className="final-cta-section">

      {/* Decorative Elements */}
      <div className="decoration lightning-left">
        <svg width="60" height="100" viewBox="0 0 60 100" fill="#E3E339">
          <path d="M30 0L16 55H36L22 100L52 38H30L42 0Z" />
        </svg>
      </div>

      <div className="decoration lightning-right-top">
        <svg width="55" height="90" viewBox="0 0 55 90" fill="#E3E339">
          <path d="M27 0L14 50H33L20 90L47 34H27L38 0Z" />
        </svg>
      </div>

      <div className="decoration lightning-right-bottom">
        <svg width="50" height="85" viewBox="0 0 50 85" fill="#E3E339">
          <path d="M25 0L13 47H30L18 85L43 32H25L35 0Z" />
        </svg>
      </div>

      <div className="container">

        {/* Top Message */}
        <motion.div
          className="top-message"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="main-title">
            <span className="title-yellow">VEM PRA RUA!</span><br />
            <span className="title-orange">VEM PRO CARNAVAL!</span>
          </h2>

          <p className="description">
            O Carnaval não é apenas uma festa - é a nossa identidade. É a nossa alegria. É o momento em que Angolanos de todas as partes - da Cidadela à Baía, do Musseque à Baixa - se unem para celebrar quem somos.
          </p>

          <p className="cta-text">
            Este 7 de Fevereiro, saia do sofá. Traga a sua família. Traga os teus amigos. Traga a sua energia. Porque o Carnaval do Show do Mês é de Angolanos para Angolanos, e o teu lugar está na rua.
          </p>

          <p className="final-message">
            Mbora lá! A festa é NOSSA. A tradição é NOSSA. A alegria é NOSSA.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="action-cards">

          {/* WhatsApp Card */}
          <motion.div
            className="action-card card-orange"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Phone size={48} className="card-icon" />
            <h3 className="card-title">RESERVE AGORA VIA INFOLINE</h3>
            <p className="card-phone">+244 941 622 000</p>
          </motion.div>

          {/* UZEKA Card */}
          <motion.div
            className="action-card card-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img src={uzekaLogo} alt="UZEKA" className="uzeka-logo" />
            <p className="card-subtitle">RESERVE NA UZEKA</p>
            <a href="https://web.uzeka.app/events/818" target="_blank" rel="noopener noreferrer" className="uzeka-button">RESERVE JÁ O TEU TICKET</a>
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            className="action-card card-yellow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="card-title-black">SIGA-NOS NAS REDES SOCIAIS</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><Facebook size={28} /></a>
              <a href="#" className="social-icon"><Instagram size={28} /></a>
              <a href="#" className="social-icon"><Linkedin size={28} /></a>
              <a href="#" className="social-icon"><Music2 size={28} /></a>
              <a href="#" className="social-icon"><Youtube size={28} /></a>
            </div>
          </motion.div>

        </div>

        {/* Bottom Message */}
        <motion.div
          className="bottom-message"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="event-title">
            <span className="title-orange">CARNAVAL DO SHOW DO MÊS</span><br />
            <span className="title-yellow">7 DE FEVEREIRO - VEM PRA RUA!</span>
          </h2>
        </motion.div>

      </div>

      <style jsx="true">{`
        .final-cta-section {
          background-color: #0C132D;
          padding: 80px 0 60px 0;
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
          opacity: 0.8;
          z-index: 5;
        }

        .lightning-left {
          left: 60px;
          top: 250px;
        }

        .lightning-right-top {
          right: 70px;
          top: 100px;
        }

        .lightning-right-bottom {
          right: 80px;
          bottom: 180px;
        }

        /* --- Top Message --- */
        .top-message {
          text-align: center;
          margin-bottom: 60px;
        }

        .main-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 2rem;
        }

        .title-yellow {
          color: #E3E339;
        }

        .title-orange {
          color: #FF6B35;
        }

        .description,
        .cta-text {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #00CCD6;
          max-width: 900px;
          margin: 0 auto 1.5rem auto;
        }

        .final-message {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.1rem;
          font-weight: bold;
          color: #00CCD6;
          margin-top: 2rem;
        }

        /* --- Action Cards --- */
        .action-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }

        .action-card {
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 240px;
        }

        .action-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }

        .card-orange {
          background-color: #FF6B35;
          color: #FFFFFF;
        }

        .card-purple {
          background: linear-gradient(135deg, #A855F7 0%, #9333EA 100%);
          color: #FFFFFF;
        }

        .card-yellow {
          background-color: #E3E339;
          color: #1A1A1A;
        }

        .card-icon {
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-family: 'Impact', sans-serif;
          font-size: 1.5rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .card-title-black {
          font-family: 'Impact', sans-serif;
          font-size: 1.4rem;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          color: #1A1A1A;
          line-height: 1.2;
        }

        .card-phone {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.3rem;
          font-weight: bold;
        }

        .uzeka-logo {
          max-width: 200px;
          height: auto;
          margin-bottom: 1rem;
        }

        .card-subtitle {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          font-weight: 600;
        }

        .uzeka-button {
          background-color: transparent;
          color: #FFFFFF;
          border: 2px solid #FFFFFF;
          padding: 12px 28px;
          border-radius: 25px;
          font-family: 'Impact', sans-serif;
          font-size: 1rem;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .uzeka-button:hover {
          background-color: #FFFFFF;
          color: #9333EA;
        }

        .social-icons {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          border-radius: 8px;
          border: 2px solid #1A1A1A;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A1A1A;
          transition: all 0.3s ease;
          background-color: transparent;
        }

        .social-icon:hover {
          background-color: #1A1A1A;
          color: #E3E339;
          transform: scale(1.1);
        }

        /* --- Bottom Message --- */
        .bottom-message {
          text-align: center;
          margin-top: 60px;
        }

        .event-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          text-transform: uppercase;
          line-height: 1.2;
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .action-cards {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .action-card {
            min-height: 200px;
            padding: 35px 25px;
          }
        }

        @media (max-width: 768px) {
          .final-cta-section {
            padding: 60px 0 50px 0;
          }

          .container {
            padding: 0 20px;
          }

          .top-message {
            margin-bottom: 40px;
          }

          .main-title {
            font-size: 2.2rem;
          }

          .description,
          .cta-text {
            font-size: 1rem;
          }

          .decoration {
            opacity: 0.5;
            transform: scale(0.7);
          }

          .lightning-left {
            left: 20px;
            top: 150px;
          }

          .lightning-right-top {
            right: 20px;
            top: 60px;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.8rem;
          }

          .event-title {
            font-size: 1.6rem;
          }

          .social-icons {
            gap: 12px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
          }

          .social-icon svg {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>
    </section>
  );
}
