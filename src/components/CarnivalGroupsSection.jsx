import React from 'react';
import { motion } from 'framer-motion';

// Import the carnival group images
import kilAmbaImage from '../assets/grupo_kilamba.jpg'; // UNIÃO RECREATIVO DO KILAMBA
import mundoIlhaImage from '../assets/grupo_mundo_ilha.jpg'; // UNIÃO MUNDO DA ILHA

export default function CarnivalGroupsSection() {
  return (
    <section className="carnival-groups-section">
      <div className="groups-container">

        {/* GROUP 1: UNIÃO RECREATIVO DO KILAMBA */}
        <motion.div
          className="group-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="group-image-wrapper">
            <img src={kilAmbaImage} alt="União Recreativo Kilamba" className="group-image" />
          </div>
          <div className="group-content">
            <h2 className="group-title">UNIÃO RECREATIVO KILAMBA</h2>
            <p className="group-description">
              Um dos maiores grupos do nosso carnaval, trazendo décadas de tradição, criatividade e energia para as ruas de Luanda. A UNIÃO RECREATIVO KILAMBA é sinônimo de qualidade, inovação e paixão pelo Carnaval angolano.
            </p>
            <div className="group-features">
              <h3 className="features-title">Características</h3>
              <ul className="features-list">
                <li>Tradição consolidada</li>
                <li>Coreografias ousadas</li>
                <li>Figurinos espectaculares</li>
                <li>Energia contagiante</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* GROUP 2: UNIÃO MUNDO DA ILHA */}
        <motion.div
          className="group-card reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="group-content">
            <h2 className="group-title">UNIÃO MUNDO DA ILHA</h2>
            <p className="group-description">
              Outro colosso do carnaval angolano, a UNIÃO MUNDO DA ILHA traz consigo a força da tradição e a inovação artística. Unidos pela mesma paixão, este grupo promete/surpreender e encantar.
            </p>
            <div className="group-features">
              <h3 className="features-title">Características</h3>
              <ul className="features-list">
                <li>Arte de excelência</li>
                <li>Performances memoráveis</li>
                <li>Conexão com o público</li>
                <li>Celebração da identidade angolana</li>
              </ul>
            </div>
          </div>
          <div className="group-image-wrapper">
            <img src={mundoIlhaImage} alt="União Mundo da Ilha" className="group-image" />
          </div>
        </motion.div>

      </div>

      <style jsx="true">{`
        .carnival-groups-section {
          background-color: #F5F1E8; /* Cream/beige background matching design */
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .groups-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* --- Group Card Layout (Matching Figma) --- */
        .group-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px;
          gap: 60px;
          
          position: relative;
          width: 100%;
          max-width: 1588px;
          height: auto;
          min-height: 583px;
          margin: 0 auto 120px auto;
        }

        .group-card:last-child {
          margin-bottom: 0;
          max-width: 1615px;
        }

        .group-card.reverse {
          flex-direction: row-reverse;
        }

        /* --- Image Styling --- */
        .group-image-wrapper {
          position: relative;
          flex: 0 0 auto;
          width: 702px;
          height: 583px;
          padding: 8px;
          background: linear-gradient(135deg, #E3E339 0%, #00CCD6 50%, #E3E339 100%);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .group-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .group-image:hover {
          transform: scale(1.02);
        }

        /* --- Content Styling --- */
        .group-content-col {
          flex: 1;
          padding: 20px 0;
        }

        /* --- Content Styling --- */
        .group-content {
          padding: 20px 0;
        }

        .group-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          color: #FF6B35; /* Orange title color from design */
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .group-description {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #2C2C2C;
          margin-bottom: 2rem;
        }

        /* --- Features Section --- */
        .group-features {
          margin-top: 2rem;
        }

        .features-title {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          font-weight: bold;
          color: #2C2C2C;
          margin-bottom: 0.75rem;
          text-transform: none;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.95rem;
          color: #2C2C2C;
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
        }

        .features-list li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: #FF6B35;
          font-weight: bold;
          font-size: 1.2rem;
        }

        /* --- Responsive Design --- */
        @media (max-width: 900px) {
          .group-card,
          .group-card.reverse {
            flex-direction: column;
            gap: 40px;
            text-align: center;
            min-height: auto;
          }

          .group-image-wrapper {
            width: 100%;
          }

          .group-content,
          .group-content-col {
            order: 2;
          }

          .group-image-wrapper {
            order: 1;
          }

          .features-list li {
            text-align: left;
          }

          .groups-container {
            padding: 0 20px;
          }

          .group-card {
            margin-bottom: 80px;
          }
        }

        @media (max-width: 600px) {
          .carnival-groups-section {
            padding: 60px 0;
          }

          .group-title {
            font-size: 2rem;
          }

          .group-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
