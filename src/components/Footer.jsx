import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

// Using the main logo
import logoImg from '../assets/Prancheta 1 2.png';

export default function Footer() {
  return (
    <footer className="footer">

      {/* Top Section - Yellow Background */}
      <div className="footer-top">
        <div className="footer-container">

          {/* Logo */}
          <div className="footer-logo">
            <img src={logoImg} alt="Carnaval Logo" />
          </div>

          {/* Navigation Links */}
          <nav className="footer-nav">
            <a href="#sobre" className="footer-link">Sobre</a>
            <a href="#parceiros" className="footer-link">Parceiros</a>
            <a href="#participar" className="footer-link">Como Participar</a>
            <a href="#faq" className="footer-link">Perguntas Frequentes</a>
          </nav>

          {/* Social Media Section */}
          <div className="footer-social">
            <h3 className="social-title">SIGA-NOS NAS REDES SOCIAIS</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            © Carnaval show do mês 2026 - Todos os direitos reservados | Política de Privacidade
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          width: 100%;
        }

        /* --- Top Section --- */
        .footer-top {
          background-color: #F3DA17;
          padding: 50px 0;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-logo img {
          height: 80px;
          width: auto;
        }

        /* --- Navigation --- */
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #1A1A1A;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #0C132D;
          text-decoration: underline;
        }

        /* --- Social Media --- */
        .footer-social {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }

        .social-title {
          font-family: 'Impact', sans-serif;
          font-size: 1rem;
          color: #1A1A1A;
          text-transform: uppercase;
          margin: 0 0 12px 0;
          letter-spacing: 0.5px;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: transparent;
          color: #1A1A1A;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: #1A1A1A;
          color: #F3DA17;
          transform: translateY(-3px);
        }

        /* --- Bottom Section --- */
        .footer-bottom {
          background-color: #0C132D;
          padding: 20px 0;
        }

        .copyright {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.9rem;
          color: #FFFFFF;
          text-align: center;
          margin: 0;
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-nav {
            align-items: center;
          }

          .footer-social {
            align-items: center;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            padding: 40px 0;
          }

          .footer-container {
            padding: 0 20px;
          }

          .footer-logo img {
            height: 60px;
          }

          .footer-link {
            font-size: 0.95rem;
          }

          .social-title {
            font-size: 0.9rem;
          }

          .copyright {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .footer-logo img {
            height: 50px;
          }

          .footer-link {
            font-size: 0.9rem;
          }

          .social-icons {
            gap: 10px;
          }

          .social-icon {
            width: 36px;
            height: 36px;
          }

          .social-icon svg {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </footer>
  );
}
