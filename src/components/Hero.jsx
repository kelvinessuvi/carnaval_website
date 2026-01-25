import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X, Play } from 'lucide-react';

// Assets
import heroBg from '../assets/BG3 1.png';
// Use the group photo or a frame placeholder. 
// Based on file names, 'Group 1707478146.png' is the frame, 
// but user wants a video. 
// I will use a placeholder image for the video thumbnail 
// inside a custom-built frame to get the border right.
import videoThumb from '../assets/Group 1707478146.png'; // Placeholder for now

import stickerCurve from '../assets/Group.png';

// Decorative Elements for the Video Area
import decoSun from '../assets/Group 39520.png';       // Orange Starburst
import decoArrow from '../assets/Group 39522.png';     // Yellow Arrow/Shape
import decoFlash from '../assets/Group 39524.png';     // Orange Flash/Circle
import decoLightning from '../assets/Modo_de_isolamento.png'; // Lightning

// Navbar Logo
import logoImg from '../assets/Prancheta 1 2.png';
import logoCanjala from '../assets/logo_canjala.png';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="hero-section">

      {/* --- BACKGROUND --- */}
      <div className="hero-bg"></div>

      {/* --- TOP LEFT NAV STICKER (Fixed relative to viewport/header) --- */}
      <img src={stickerCurve} className="float-sticker top-left-curve" alt="" />

      {/* --- RESPONSIVE HEADER --- */}
      <header className="hero-header hero-container">
        {/* Logo Area - Main Only */}
        <div className="logo-area">
          <img src={logoImg} alt="Carnaval Logo" className="logo-main" />
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#sobre" className="nav-link">SOBRE</a>
          <a href="#parceiros" className="nav-link">PARCEIROS</a>
          <a href="#participar" className="nav-link">COMO PARTICIPAR</a>
          <a href="#faq" className="nav-link">PERGUNTAS FREQUENTES</a>
        </nav>

        {/* Right Side: CTA + Secondary Logo */}
        <div className="header-right-area">
          {/* Top Right Button (Desktop) - First */}
          <a href="https://web.uzeka.app/events/818" target="_blank" rel="noopener noreferrer" className="header-cta desktop-only">
            RESERVE JÁ O SEU KIT
          </a>

          {/* Secondary Logo (Option 1: Right of Button) - Second */}
          <img src={logoCanjala} alt="Canjala Logo" className="logo-partner-right desktop-only" style={{ height: '150px', width: 'auto' }} />

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <nav className="mobile-nav-links">
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>SOBRE</a>
            <a href="#parceiros" onClick={() => setMobileMenuOpen(false)}>PARCEIROS</a>
            <a href="#participar" onClick={() => setMobileMenuOpen(false)}>COMO PARTICIPAR</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>PERGUNTAS FREQUENTES</a>
            <a href="https://web.uzeka.app/events/818" target="_blank" rel="noopener noreferrer" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
              RESERVE JÁ O SEU KIT
            </a>
            {/* Show secondary logo in mobile menu too? */}
            <img src={logoCanjala} alt="Canjala Logo" className="logo-partner-mobile" style={{ width: '100px', margin: '0 auto' }} />
          </nav>
        </div>
      )}

      {/* --- HERO CONTENT --- */}
      <div className="hero-container hero-content">

        <div className="text-content">
          <h2 className="pre-title">VEM PRA RUA!</h2>
          <h1 className="main-title">CARNAVAL DO SHOW DO MÊS</h1>

          <p className="hero-description">
            Cansados de não brincar o Carnaval? Chegou a hora de SAIR DO SOFÁ
            e celebrar com alegria, tradição e energia. 7 de Fevereiro - Uma
            semana antes do Carnaval oficial, a festa é NOSSA!
          </p>

          {/* Center CTA - Positioned below text */}
          <a href="https://web.uzeka.app/events/818" target="_blank" rel="noopener noreferrer" className="cta-button-main">
            GARANTA JÁ SEU PASSAPORTE <ArrowUpRight size={28} />
          </a>
        </div>

        {/* --- VIDEO AREA --- */}
        <div className="video-area-wrapper" style={{ display: 'none' }}>

          {/* DECORATIONS attached to the video area */}
          <img src={decoSun} className="video-deco deco-sun" alt="" />
          <img src={decoArrow} className="video-deco deco-arrow" alt="" />
          <img src={decoFlash} className="video-deco deco-flash" alt="" />
          <img src={decoLightning} className="video-deco deco-lightning" alt="" />
          {/* White Star (CSS shape or SVG) */}
          <div className="video-deco deco-white-star">
            <svg viewBox="0 0 24 24" fill="white" width="100%" height="100%">
              <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" />
            </svg>
          </div>

          {/* MAIN VIDEO CARD */}
          <div className="video-card-inner">
            <div className="video-thumbnail-container">
              {/* Video Placeholder - waiting for actual video embed */}
              <div className="video-placeholder" style={{ width: '100%', height: '100%', background: 'black' }}></div>

              {/* Play Button Overlay */}
              <div className="play-overlay">
                <div className="play-circle">
                  <Play size={40} fill="white" stroke="none" />
                </div>
              </div>

              {/* Fake Progress Bar aligned bottom */}
              <div className="video-progress-bar">
                <div className="progress-fill" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx="true">{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          color: white;
          background-color: #0C132D;
          display: flex;
          flex-direction: column;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(180deg, rgba(12, 19, 45, 0) 58%, #0C132D 100%), 
                      linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                      url('${heroBg}');
          background-size: cover;
          background-position: center top;
          z-index: 0;
        }

        .hero-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          z-index: 10;
        }

        /* --- HEADER --- */
        .hero-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          width: 100%;
          position: relative;
          z-index: 50;
        }

        .logo-area {
          /* Just main logo now */
          flex-shrink: 0;
        }

        .logo-main { width: 120px; height: auto; }
        
        .desktop-nav { display: none; gap: 30px; }
        
        /* New Right Side Container */
        .header-right-area {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .logo-partner-right {
          height: 90px; /* Increased size as requested */
          width: auto;
          object-fit: contain;
        }

        .nav-link {
          font-family: 'Azo Sans', sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: white;
          text-decoration: none;
          text-transform: uppercase;
        }
        .header-cta {
          display: none;
          background: #ECEC36;
          color: #0C132D;
          padding: 10px 24px;
          border-radius: 999px;
          font-family: 'Impact', sans-serif;
          border: 4px solid #F5F4E6;
          cursor: pointer;
          white-space: nowrap;
        }
        .mobile-menu-btn { display: block; background: transparent; border: none; color: white; cursor: pointer; z-index: 50; }

        /* Tablet: Keep standard padding (user preference) */
        @media (min-width: 768px) {
           /* No aggressive shifts on tablet */
        }

        /* Desktop: Full Nav, Larger Decos, Indented Header for Curve */
        @media (min-width: 1024px) {
           .hero-header {
             padding-left: 140px; /* Indent for sticker */
             padding-right: 50px;
           }
           
           .desktop-nav { display: flex; }
           .header-cta.desktop-only { display: block; }
           .logo-partner-right.desktop-only { display: block; }
           .mobile-menu-btn { display: none; }
           .logo-area img { width: 140px; }
           
           /* Decoration Sizing & Visibility */
           .top-left-curve { display: block; width: 130px; }
           .deco-sun { width: 160px; top: -60px; left: -60px; }
           .deco-flash { width: 110px; right: -50px; bottom: -30px; }
           .deco-arrow { width: 70px; right: -30px; }
        }

        /* --- MOBILE MENU --- */
        .mobile-menu-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: rgba(12, 19, 45, 0.95);
          backdrop-filter: blur(10px);
          z-index: 40;
          display: flex; align-items: center; justify-content: center;
        }
        .mobile-nav-links { display: flex; flex-direction: column; gap: 2rem; text-align: center; }
        .mobile-nav-links a { font-family: 'Impact'; font-size: 2rem; color: white; text-decoration: none; }
        .mobile-cta { background: #ECEC36; color: #0C132D; padding: 1rem 2rem; font-family: 'Impact'; font-size: 1.5rem; border-radius: 999px; }

        /* --- HERO TEXT --- */
        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          padding-top: 40px;
          gap: 3rem;
        }

        .text-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 900px;
          position: relative;
          z-index: 20;
        }

        .pre-title {
          font-family: 'Impact';
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: #00CCD6;
          transform: rotate(-2.55deg);
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }

        .main-title {
          font-family: 'Impact';
          font-size: clamp(3rem, 6vw, 5rem);
          color: #ECEC36;
          transform: rotate(-2.55deg);
          margin-bottom: 2rem;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .hero-description {
          font-family: 'Azo Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 2vw, 1.5rem);
          line-height: 1.4;
          max-width: 800px;
          margin-bottom: 2.5rem;
        }

        .cta-button-main {
          display: flex; align-items: center; gap: 10px;
          background: #ECEC36; color: #0C132D;
          font-family: 'Impact'; font-size: clamp(1.2rem, 2vw, 2rem);
          padding: 15px 40px; border-radius: 60px;
          border: 6px solid #F5F4E6;
          transform: rotate(-1.65deg);
          cursor: pointer;
          transition: transform 0.2s;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          text-decoration: none;
        }
        .cta-button-main:hover { transform: rotate(-1.65deg) scale(1.05); }


        /* --- VIDEO AREA WRAPPER --- */
        .video-area-wrapper {
          position: relative;
          width: 90%;
          max-width: 1000px;
          margin-top: 2rem;
          margin-bottom: 4rem;
          display: flex;
          justify-content: center;
        }

        /* The Card Frame */
        .video-card-inner {
          position: relative;
          width: 100%;
          border-radius: 36px;
          /* Main gradient border logic: trick using padding or box-shadow 
             or a Pseudo-element. CSS says: border: 17px solid #902884 
             Screen shows Purple/Pink. */
          background: linear-gradient(to right, #902884, #5B1E54); 
          padding: 12px; /* Frame thickness */
          transform: rotate(-2.42deg);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          z-index: 10;
        }

        .video-thumbnail-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: black;
          border-radius: 24px;
          overflow: hidden;
        }

        .video-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .video-thumbnail-container:hover .video-thumb { opacity: 0.6; }

        /* Play Button Overlay */
        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .play-circle {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0,0,0,0.2);
        }

        /* Progress Bar */
        .video-progress-bar {
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 5px;
          background: rgba(255,255,255,0.3);
        }
        .progress-fill {
           height: 100%;
           background: red;
        }


        /* --- DECORATIONS (Attached to Video Area) --- */
        .video-deco {
          position: absolute;
          z-index: 15;
          pointer-events: none;
          /* Shadows to make them pop */
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
        }

        /* Sun/Star: Top Left */
        .deco-sun {
           width: 100px;
           top: -40px;
           left: -40px;
           animation: spinSlow 20s linear infinite;
        }
        @keyframes spinSlow { 100% { transform: rotate(360deg); } }

        /* Arrow: Right Side */
        .deco-arrow {
           width: 50px;
           right: -20px;
           top: 20%;
           transform: rotate(15deg);
        }

        /* Flash: Bottom Right */
        .deco-flash {
           width: 80px;
           right: -30px;
           bottom: -20px;
        }

        /* Lightning: Bottom Side (using Modo_de_isolamento or icon) */
        .deco-lightning {
           width: 60px;
           right: 15%;
           bottom: -50px;
           transform: rotate(-15deg);
        }

        /* White Star: Bottom Left */
        .deco-white-star {
           width: 50px;
           height: 50px;
           left: -10px;
           bottom: 10%;
           transform: rotate(-10deg);
        }


        /* --- Top Left Nav Curve --- */
        .top-left-curve {
          position: absolute;
          top: -10px; left: -10px;
          width: 90px;
          display: none;
          z-index: 50;
        }

        /* Bottom Decorations Media Queries moved up or consolidated */

      `}</style>
    </section>
  );
}
