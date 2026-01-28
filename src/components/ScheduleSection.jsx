import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

// We'll use a placeholder for the Luanda Bay image for now
// Replace with actual image once available
const luandaBayImage = '/path/to/luanda-bay.jpg'; // TODO: Update with actual image

export default function ScheduleSection() {
  const scheduleItems = [
    { time: '14h00', activity: 'Concentração dos grupos e participantes' },
    { time: '15h00', activity: 'Início do desfile pelas ruas de Luanda' },
    { time: '17h30', activity: 'Chegada ao Porto de Luanda' },
    { time: '18h00', activity: 'Continuação da festa no Porto de Luanda' },
    { time: '22h00', activity: 'Encerramento' }
  ];

  const routePoints = [
    'Saída: [Local da Concentração]',
    'Trajecto Principal: Ruas centrais de Luanda',
    'Chegada: Porto de Luanda',
    'Continuação: Festa no Porto de Luanda até ao encerramento'
  ];

  return (
    <section className="schedule-section">
      {/* Decorative Elements */}
      <div className="decoration circles-left">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <circle cx="75" cy="75" r="70" stroke="#E3E339" strokeWidth="6" fill="none" />
          <circle cx="75" cy="75" r="50" stroke="#E3E339" strokeWidth="6" fill="none" />
        </svg>
      </div>

      <div className="container">
        {/* SCHEDULE TABLE */}
        <div className="schedule-container">
          <div className="decoration starburst-right">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              {[...Array(16)].map((_, i) => (
                <line
                  key={i}
                  x1="60"
                  y1="60"
                  x2="60"
                  y2="10"
                  stroke="#FF6B35"
                  strokeWidth="3"
                  transform={`rotate(${i * 22.5} 60 60)`}
                />
              ))}
            </svg>
          </div>

          <motion.div
            className="schedule-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="schedule-title">CRONOGRAMA DO EVENTO</h2>
            <h3 className="schedule-date">7 DE FEVEREIRO</h3>
            <p className="schedule-subtitle">Horários sujeitos a confirmação e ajustes conforme necessário</p>
          </motion.div>

          <motion.div
            className="schedule-table"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="table-header">
              <div className="table-cell header-cell">Hora</div>
              <div className="table-cell header-cell">Atividade</div>
            </div>
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                className="table-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <div className="table-cell time-cell">{item.time}</div>
                <div className="table-cell activity-cell">{item.activity}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="decoration flower-left">
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
        </div>

        {/* ROUTE INFO SECTION */}
        <div className="route-container">
          <div className="route-content">
            <motion.div
              className="route-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="route-title">
                <span className="title-cyan">O CARNAVAL É DE</span>
                <span className="title-yellow">ANGOLANOS PARA ANGOLANOS</span>
              </h2>

              <p className="route-description">
                O desfile percorre as principais ruas de Luanda, passando pela Cidadela,
                Musseque, Baixa e terminando no Porto de Luanda, onde a festa continua com
                energia redobrada.
              </p>

              <div className="route-points">
                <h4 className="points-title">Pontos de Referência:</h4>
                <ul className="points-list">
                  {routePoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="security-info">
                <h4 className="security-title">Segurança:</h4>
                <p className="security-text">
                  O trajecto será completamente controlado e seguro, com policiamento
                  adequado e medidas de segurança em vigor. Famílias podem participar
                  com confiança.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="route-image-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="decoration lightning-top">
                <svg width="40" height="70" viewBox="0 0 40 70" fill="#E3E339">
                  <path d="M20 0L10 40H25L15 70L35 25H20L30 0Z" />
                </svg>
              </div>

              <div className="image-frame">
                <img
                  src={luandaBayImage}
                  alt="Porto de Luanda"
                  className="bay-image"
                />
              </div>

              <div className="decoration flower-bottom">
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
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .schedule-section {
          background-color: #0C132D;
          padding: 100px 0;
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

        .circles-left {
          left: 20px;
          top: 50px;
        }

        .starburst-right {
          right: 100px;
          top: 120px;
        }

        .flower-left {
          left: 120px;
          bottom: 50px;
        }

        .lightning-top {
          position: absolute;
          top: -30px;
          left: -20px;
          z-index: 10;
        }

        .flower-bottom {
          position: absolute;
          bottom: -20px;
          right: -20px;
          z-index: 10;
        }

        /* --- SCHEDULE SECTION --- */
        .schedule-container {
          margin-bottom: 100px;
          position: relative;
        }

        .schedule-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .schedule-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: #E3E339;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .schedule-date {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #FF6B35;
          text-transform: uppercase;
          margin-bottom: 1rem;
          line-height: 1;
        }

        .schedule-subtitle {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          color: #FFFFFF;
          font-weight: 300;
        }

        /* --- Schedule Table --- */
        .schedule-table {
          max-width: 700px;
          margin: 0 auto;
          background-color: rgba(20, 30, 60, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          overflow: hidden;
        }

        .table-header {
          display: grid;
          grid-template-columns: 150px 1fr;
          background-color: rgba(30, 40, 70, 0.8);
          border-bottom: 2px solid rgba(227, 227, 57, 0.3);
        }

        .table-row {
          display: grid;
          grid-template-columns: 150px 1fr;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .table-cell {
          padding: 18px 24px;
          font-family: 'Azo Sans', sans-serif;
        }

        .header-cell {
          font-weight: bold;
          color: #FFFFFF;
          font-size: 1.1rem;
        }

        .time-cell {
          font-weight: bold;
          color: #E3E339;
          font-size: 1.05rem;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .activity-cell {
          color: #E0E0E0;
          font-size: 1rem;
        }

        /* --- ROUTE SECTION --- */
        .route-container {
          margin-top: 100px;
        }

        .route-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .route-text {
          padding-right: 20px;
        }

        .route-title {
          margin-bottom: 1.5rem;
        }

        .title-cyan {
          font-family: 'Impact', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          color: #00CCD6;
          text-transform: uppercase;
          display: block;
          line-height: 1.1;
        }

        .title-yellow {
          font-family: 'Impact', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          color: #E3E339;
          text-transform: uppercase;
          display: block;
          line-height: 1.1;
        }

        .route-description {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #E0E0E0;
          margin-bottom: 2rem;
        }

        .route-points,
        .security-info {
          margin-bottom: 2rem;
        }

        .points-title,
        .security-title {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.1rem;
          font-weight: bold;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }

        .points-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .points-list li {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.95rem;
          color: #C0C0C0;
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .points-list li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #E3E339;
          font-size: 1.2rem;
        }

        .security-text {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #C0C0C0;
        }

        /* --- Route Image --- */
        .route-image-wrapper {
          position: relative;
        }

        .image-frame {
          padding: 10px;
          background: linear-gradient(135deg, #F3DA17 0%, #00CCD6 100%);
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .bay-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 4px;
        }

        /* --- Responsive --- */
        @media (max-width: 1024px) {
          .route-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .route-text {
            padding-right: 0;
          }

          .table-header,
          .table-row {
            grid-template-columns: 120px 1fr;
          }
        }

        @media (max-width: 768px) {
          .schedule-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 20px;
          }

          .schedule-container {
            margin-bottom: 60px;
          }

          .table-cell {
            padding: 12px 16px;
            font-size: 0.9rem;
          }

          .header-cell {
            font-size: 1rem;
          }

          .decoration {
            opacity: 0.4;
            transform: scale(0.7);
          }
        }

        @media (max-width: 600px) {
          .table-header,
          .table-row {
            grid-template-columns: 100px 1fr;
          }

          .table-cell {
            padding: 10px 12px;
            font-size: 0.85rem;
          }

          .time-cell {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
