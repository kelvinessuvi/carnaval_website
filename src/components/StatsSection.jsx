import React from 'react';
import { motion } from 'framer-motion';

// Assets (Assuming these based on previous context and typical naming)
import starIcon from '../assets/Group 39522.png'; // Checking if this is the star/sunburst
import flashIcon from '../assets/Group 39524.png'; // Lightning
import mainLogo from '../assets/Prancheta 1 2.png'; // Using main logo for center

// If we don't have specific new assets for the sunburst, we might need to use what we have or placeholder.
// `Group 39522.png` was used? Let's assume it is useful.

export default function StatsSection() {

  const stats = [
    {
      label: "DATA",
      text: "7 DE FEVEREIRO DE 2026",
      colorClass: "border-purple-500 text-purple-500", // Tailwind-ish classes for ref logic
      borderColor: "#9D4EDD"
    },
    {
      label: "GRUPOS PRINCIPAIS",
      text: "UNIÃO RECREATIVO KILAMBA, UNIÃO MUNDO DA ILHA",
      colorClass: "border-orange-500 text-orange-500",
      borderColor: "#F77F00"
    },
    {
      label: "PARTICIPANTES",
      text: "SHOWISTAS, VETERANOS, RECRUTAS, BATALHÕES E PÚBLICO EM GERAL",
      colorClass: "border-blue-500 text-blue-500",
      borderColor: "#00B4D8"
    },
    {
      label: "TRAJECTO",
      text: "RUAS DE LUANDA ATÉ AO PORTO DE LUANDA",
      colorClass: "border-pink-500 text-pink-500",
      borderColor: "#D90429"
    },
    {
      label: "ACESSO",
      text: "CONTROLADO E SEGURO PARA TODA A FAMÍLIA",
      colorClass: "border-orange-500 text-orange-500",
      borderColor: "#F77F00"
    }
  ];

  return (
    <section className="stats-section">
      {/* Decorative Background Elements */}
      <img src={starIcon} className="decoration star-top-left" alt="" />
      <img src={flashIcon} className="decoration flash-top-right" alt="" />
      <img src={flashIcon} className="decoration flash-bottom-left" alt="" />
      <img src={starIcon} className="decoration star-bottom-right" alt="" />
      {/* Using generic decorations for now, refined via CSS */}

      <div className="container stats-container">

        {/* Title */}
        <div className="title-wrapper">
          <h2 className="section-title">
            <span className="text-yellow">CADA NÚMERO CONTA</span>
            <br />
            <span className="text-orange">UMA HISTÓRIA INIMAGINÁVEL</span>
          </h2>
        </div>

        {/* Stats Cards Row 
        <div className="stats-cards-row">

          {/* Card 1 
          <div className="stat-card orange-card">
            <div className="pill-top orange-pill">
              <span className="pill-val">+ DE 30 MIL</span>
            </div>
            <div className="pill-bottom yellow-pill">
              <span className="pill-label">PARTICIPANTES</span>
            </div>
          </div>

          {/* Center Logo 
          <div className="center-logo">
            <img src={mainLogo} alt="Carnaval Logo" />
          </div>

          {/* Card 2 
          <div className="stat-card pink-card">
            <div className="pill-top white-pill">
              <span className="pill-val text-dark">+ DE 20</span>
            </div>
            <div className="pill-bottom pink-pill">
              <span className="pill-label">GRUPOS<br />CARNAVALESCOS</span>
            </div>
          </div>

        </div>

        {/* Info List */}
        <div className="info-list">
          {stats.map((item, index) => (
            <div className="info-item" key={index}>
              <div className="info-badge" style={{ borderColor: item.borderColor }}>
                <span style={{ color: "white" }}>{item.label}</span>
              </div>
              <div className="dashed-line"></div>
              <div className="info-text">
                {item.text}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx="true">{`
        .stats-section {
          position: relative;
          background-color: #0C132D;
          padding-top: 80px;
          padding-bottom: 20px;
          padding-inline: 20px;
          overflow: hidden;
          font-family: 'Azo Sans', sans-serif;
        }

        /* Decorations */
        .decoration {
          position: absolute;
          opacity: 0.8;
          z-index: 1;
        }
        .star-top-left { top: 50px; left: 50px; width: 80px; }
        .flash-top-right { top: 50px; right: 50px; width: 60px; transform: rotate(15deg); }
        .flash-bottom-left { bottom: 100px; left: 50px; width: 60px; transform: rotate(-15deg); }
        .star-bottom-right { bottom: 50px; right: 50px; width: 100px; }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        /* Typography */
        .title-wrapper {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .text-yellow { color: #F3DA17; }
        .text-orange { color: #F26522; }

        /* Stats Cards */
        .stats-cards-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          margin-bottom: 80px;
          flex-wrap: wrap;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          filter: drop-shadow(0 10px 10px rgba(0,0,0,0.3));
        }

        .center-logo img {
          width: 150px;
          height: auto;
          filter: drop-shadow(0 0 15px rgba(255,255,255,0.2));
        }

        /* Pills Design */
        .pill-top, .pill-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px; /* Pill shape */
          border: 3px solid #000; /* Assuming dark border from look */
          padding: 10px 30px;
          font-family: 'Impact', sans-serif;
          text-transform: uppercase;
          width: 250px;
          text-align: center;
        }

        .pill-top {
          margin-bottom: -15px; /* Overlap */
          z-index: 2;
          position: relative;
        }
        .pill-bottom {
          z-index: 1;
          padding-top: 25px; /* Compensate for overlap */
        }

        /* Colors */
        .orange-pill { background-color: #F26522; color: #000; }
        .yellow-pill { background-color: #F3DA17; color: #000; }
        .white-pill { background-color: #FFFFFF; color: #000; }
        .pink-pill { background-color: #D63384; color: #fff; }
        .text-dark { color: #000; }

        .pill-val { font-size: 1.8rem; }
        .pill-label { font-size: 1.2rem; line-height: 1.1; }


        /* Info List */
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
          max-width: 1190px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .info-badge {
          flex-shrink: 0;
          border: 2px solid;
          border-radius: 30px; /* Pill shape */
          padding: 8px 25px;
          background: rgba(255,255,255,0.05); /* Slight bg */
          min-width: 180px;
          text-align: center;
          font-weight: 800;
          font-size: 1rem;
          text-transform: uppercase;
          color: white;
        }

        .dashed-line {
          flex-grow: 1;
          height: 1px;
          border-top: 2px dashed rgba(255,255,255,0.3);
          margin: 0 15px;
        }

        .info-text {
          flex-shrink: 0;
          color: #FFF;
          font-weight: 700;
          font-size: 1.1rem;
          text-transform: uppercase;
          max-width: 50%;
          text-align: right;
        }

        /* Mobile Response */
        @media (max-width: 768px) {
          .stats-cards-row {
            flex-direction: column;
            gap: 30px;
          }
          
          .info-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            background: rgba(255,255,255,0.05);
            padding: 15px;
            border-radius: 12px;
          }

          .dashed-line { display: none; }
          
          .info-text { 
            text-align: left;
            max-width: 100%;
          }
          
          .info-badge {
            min-width: unset;
            width: auto;
            align-self: flex-start;
            font-size: 0.9rem;
          }
          
          .center-logo { order: -1; margin-bottom: 10px; } /* Logo first on mobile */
          
          .section-title { font-size: 2rem; }
        }

      `}</style>
    </section>
  );
}
