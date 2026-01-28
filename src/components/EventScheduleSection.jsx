import React from 'react';
import { motion } from 'framer-motion';
import luandaBay from '../assets/luanda_bay.png';

export default function EventScheduleSection() {
  const scheduleItems = [
    { time: "15h30", activity: "Concentração - Cidadela Desportiva de Luanda" },
    { time: "17h00", activity: "Início do desfile pelas ruas de Luanda" },
    { time: "19h00", activity: "Chegada ao Porto de Luanda" },
    { time: "19:30 em diante", activity: "Continuação da Festa até altas horas" }
  ];

  const referencePoints = [
    "Concentração: Cidadela de Luanda",
    "Trajecto Principal: Ruas centrais de Luanda",
    "Local da Festa: Porto de Luanda"
  ];

  return (
    <section className="event-schedule-section">

      {/* Decorative Elements */}
      <div className="decoration circles-left">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="#E3E339" strokeWidth="3" fill="none" />
          <circle cx="40" cy="40" r="23" stroke="#E3E339" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="decoration flower-left">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="#FFFFFF">
          <circle cx="25" cy="25" r="6" />
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={i}
              cx="25"
              cy="12"
              rx="5"
              ry="10"
              transform={`rotate(${i * 60} 25 25)`}
            />
          ))}
        </svg>
      </div>

      <div className="decoration starburst-right">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          {[...Array(16)].map((_, i) => (
            <line
              key={i}
              x1="45"
              y1="45"
              x2="45"
              y2="8"
              stroke="#FF6B35"
              strokeWidth="2.5"
              transform={`rotate(${i * 22.5} 45 45)`}
            />
          ))}
        </svg>
      </div>

      <div className="decoration lightning-right">
        <svg width="32" height="55" viewBox="0 0 32 55" fill="#FFFFFF">
          <path d="M16 0L6 32H18L10 55L28 20H16L23 0Z" />
        </svg>
      </div>

      <div className="decoration lightning-yellow">
        <svg width="45" height="75" viewBox="0 0 45 75" fill="#E3E339">
          <path d="M22 0L10 42H27L16 75L38 28H22L32 0Z" />
        </svg>
      </div>

      <div className="decoration flower-bottom">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="#FFFFFF">
          <circle cx="30" cy="30" r="8" />
          {[...Array(6)].map((_, i) => (
            <ellipse
              key={i}
              cx="30"
              cy="16"
              rx="6"
              ry="12"
              transform={`rotate(${i * 60} 30 30)`}
            />
          ))}
        </svg>
      </div>

      <div className="container">
        <div className="route-block">

          {/* Text Content - LEFT SIDE */}
          <motion.div
            className="route-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="route-title">
              <span className="title-cyan">O CARNAVAL É DE</span><br />
              <span className="title-yellow">ANGOLANOS PARA ANGOLANOS</span>
            </h2>

            <p className="route-description">
              O desfile percorre as principais ruas de Luanda, passando pela Cidadela,
              Musseque, Baixa e terminando no Porto de Luanda, onde a festa continua com
              energia redobrada.
            </p>

            <div className="route-details">
              <h4 className="details-title">Pontos de Referência:</h4>
              <ul className="reference-list">
                {referencePoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <p className="security-note">
              <strong>Segurança:</strong> O trajecto será completamente controlado e seguro,
              com policiamento adequado e medidas de segurança em vigor. Famílias podem
              participar com confiança.
            </p>
          </motion.div>

          {/* Image - RIGHT SIDE */}
          <motion.div
            className="route-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="image-frame">
              <img src={luandaBay} alt="Porto de Luanda" className="bay-image" />
            </div>
          </motion.div>

        </div>
        <br></br><br></br>
        {/* SCHEDULE TABLE - CENTERED AT TOP */}
        <motion.div
          className="schedule-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="schedule-title">CRONOGRAMA DO EVENTO</h2>
          <h3 className="schedule-date">7 DE FEVEREIRO</h3>
          <p className="schedule-note">
            Horários sujeitos a confirmação e ajustes<br />conforme necessário
          </p>

          <div className="schedule-table">
            <div className="table-header">
              <div className="header-cell">Hora</div>
              <div className="header-cell">Atividade</div>
            </div>
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className="table-row"
              >
                <div className="cell time-cell">{item.time}</div>
                <div className="cell activity-cell">{item.activity}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROUTE INFO + IMAGE - SIDE BY SIDE BELOW */}


      </div>

      <style jsx="true">{`
        .event-schedule-section {
          background-color: #0C132D;
          padding: 80px 0 100px 0;
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
          opacity: 0.6;
          z-index: 5;
        }

        .circles-left {
          left: 15px;
          top: 15px;
        }

        .flower-left {
          left: 20px;
          top: 320px;
        }

        .starburst-right {
          right: 80px;
          top: 130px;
        }

        .lightning-right {
          right: 85px;
          top: 310px;
        }

        .lightning-yellow {
          left: 280px;
          bottom: 350px;
        }

        .flower-bottom {
          right: 180px;
          bottom: 90px;
        }

        /* --- SCHEDULE BLOCK --- */
        .schedule-block {
          text-align: center;
          margin-bottom: 80px;
        }

        .schedule-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #E3E339;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
          letter-spacing: 1px;
        }

        .schedule-date {
          font-family: 'Impact', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.5rem);
          color: #FF6B35;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          letter-spacing: 0.5px;
        }

        .schedule-note {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.85rem;
          color: #FFFFFF;
          margin-bottom: 2.5rem;
          font-weight: 300;
          line-height: 1.4;
        }

        /* --- TABLE --- */
        .schedule-table {
          max-width: 620px;
          margin: 0 auto;
          background-color: rgba(15, 20, 45, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 130px 1fr;
          background-color: rgba(25, 35, 70, 0.7);
          border-bottom: 1px solid rgba(227, 227, 57, 0.25);
        }

        .header-cell {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          font-weight: bold;
          color: #FFFFFF;
          padding: 16px 18px;
          text-align: left;
        }

        .table-row {
          display: grid;
          grid-template-columns: 130px 1fr;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .cell {
          font-family: 'Azo Sans', sans-serif;
          padding: 14px 18px;
          text-align: left;
        }

        .time-cell {
          font-size: 1rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        .activity-cell {
          font-size: 0.95rem;
          color: #D0D0D0;
          line-height: 1.4;
        }

        /* --- ROUTE BLOCK --- */
        .route-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .route-content {
          padding-right: 10px;
        }

        .route-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 1.3rem;
        }

        .title-cyan {
          color: #00CCD6;
        }

        .title-yellow {
          color: #E3E339;
        }

        .route-description {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #D0D0D0;
          margin-bottom: 1.8rem;
        }

        .route-details {
          margin-bottom: 1.8rem;
        }

        .details-title {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          font-weight: bold;
          color: #FFFFFF;
          margin-bottom: 0.8rem;
        }

        .reference-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .reference-list li {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.9rem;
          color: #B8B8B8;
          margin-bottom: 0.4rem;
          padding-left: 1rem;
          position: relative;
          line-height: 1.5;
        }

        .reference-list li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #E3E339;
          font-size: 1rem;
        }

        .security-note {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #B8B8B8;
        }

        .security-note strong {
          color: #00CCD6;
          font-weight: 600;
        }

        /* --- IMAGE --- */
        .route-image-wrapper {
          position: relative;
        }

        .image-frame {
          position: relative;
          padding: 8px;
          background: linear-gradient(135deg, #E3E339 0%, #00CCD6 50%, #E3E339 100%);
          border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .bay-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 4px;
        }

        /* --- Responsive --- */
        @media (max-width: 1024px) {
          .route-block {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .route-content {
            padding-right: 0;
          }

          .table-header,
          .table-row {
            grid-template-columns: 110px 1fr;
          }
        }

        @media (max-width: 768px) {
          .event-schedule-section {
            padding: 50px 0 70px 0;
          }

          .container {
            padding: 0 20px;
          }

          .schedule-block {
            margin-bottom: 50px;
          }

          .schedule-table {
            max-width: 100%;
          }

          .table-header,
          .table-row {
            grid-template-columns: 90px 1fr;
          }

          .header-cell,
          .cell {
            padding: 11px 14px;
            font-size: 0.9rem;
          }

          .decoration {
            opacity: 0.35;
            transform: scale(0.65);
          }

          .circles-left {
            left: 8px;
            top: 8px;
          }

          .starburst-right {
            right: 15px;
            top: 90px;
          }
        }

        @media (max-width: 480px) {
          .table-header,
          .table-row {
            grid-template-columns: 75px 1fr;
          }

          .header-cell,
          .cell {
            padding: 9px 12px;
            font-size: 0.82rem;
          }

          .time-cell {
            font-size: 0.9rem;
          }

          .activity-cell {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
