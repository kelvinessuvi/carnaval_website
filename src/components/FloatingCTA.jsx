import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://web.uzeka.app/events/818"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-text">RESERVE JÁ</span>
          <ArrowRight size={20} className="btn-icon" />

          <style jsx="true">{`
            .floating-btn {
              position: fixed;
              bottom: 90px;
              right: 40px;
              z-index: 1000;
              
              background: linear-gradient(135deg, #E3E339 0%, #FFD700 100%);
              color: #0C132D;
              
              font-family: 'Impact', sans-serif;
              font-size: 1.2rem;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              
              padding: 20px 36px;
              border: none;
              border-radius: 50px;
              
              display: flex;
              align-items: center;
              gap: 10px;
              
              cursor: pointer;
              
              box-shadow: 0 8px 30px rgba(227, 227, 57, 0.6),
                          0 0 0 4px #0C132D,
                          0 0 0 8px #E3E339;
              
              transition: all 0.3s ease;
              
              animation: subtlePulse 3s ease-in-out infinite;
            }

            @keyframes subtlePulse {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
            }

            .floating-btn:hover {
              box-shadow: 0 12px 40px rgba(227, 227, 57, 0.8),
                          0 0 0 4px #0C132D,
                          0 0 0 8px #FFD700;
              animation: none;
            }

            .btn-text {
              font-weight: bold;
            }

            .btn-icon {
              flex-shrink: 0;
              animation: arrowBounce 1.5s ease-in-out infinite;
            }

            @keyframes arrowBounce {
              0%, 100% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(4px);
              }
            }

            @media (max-width: 768px) {
              .floating-btn {
                bottom: 40px;
                right: 20px;
                padding: 16px 28px;
                font-size: 1rem;
                box-shadow: 0 6px 20px rgba(227, 227, 57, 0.6),
                            0 0 0 3px #0C132D,
                            0 0 0 6px #E3E339;
              }

              .btn-icon {
                width: 18px;
                height: 18px;
              }
            }

            @media (max-width: 480px) {
              .floating-btn {
                font-size: 0.95rem;
                padding: 14px 24px;
              }

              .btn-icon {
                width: 16px;
                height: 16px;
              }
            }
          `}</style>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
