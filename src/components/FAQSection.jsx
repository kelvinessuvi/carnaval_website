import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1); // Second question open by default

  const faqs = [
    {
      question: "Qual é a data exacta do evento?",
      answer: "O evento será realizado no dia 7 de Fevereiro de 2026, uma semana antes do Carnaval oficial."
    },
    {
      question: "Quanto custa participar?",
      answer: "Os preços dos kits variam conforme o tipo de participação (individual, grupo, etc.). Contacta a infoline para detalhes específicos de preços."
    },
    {
      question: "Como faço a reserva?",
      answer: "Podes fazer a reserva através do WhatsApp (+244 941 622 006 ou +244 912 662 767) ou pela plataforma UZEKA de ticketing online."
    },
    {
      question: "Posso trazer a minha família?",
      answer: "Sim! O evento é familiar e seguro. Crianças e famílias são bem-vindas a participar com os devidos kits de acesso."
    },
    {
      question: "O que está incluído no kit?",
      answer: "O kit inclui: acesso ao desfile, acesso à bancada tipo de Luanda, identificação de participante, e segurança coordenada durante todo o evento."
    },
    {
      question: "Há estacionamento disponível?",
      answer: "Sim, haverá zonas de estacionamento designadas próximas ao ponto de concentração. Detalhes serão fornecidos após a reserva."
    },
    {
      question: "E se chover?",
      answer: "O evento realiza-se com chuva ou sol! Recomendamos trazer proteção adequada caso necessário."
    },
    {
      question: "Posso participar sem reserva?",
      answer: "Não recomendamos. O acesso é controlado e limitado. É essencial fazer a reserva antecipada para garantir o teu lugar."
    },
    {
      question: "Há limite de idade para participar?",
      answer: "Não há limite de idade. Crianças devem estar acompanhadas por adultos responsáveis."
    },
    {
      question: "Como recebo o meu kit após a reserva?",
      answer: "Após confirmação do pagamento, receberá instruções de levantamento do kit ou entrega, dependendo da modalidade escolhida."
    },
    {
      question: "Há reembolso se não puder participar?",
      answer: "As políticas de reembolso variam. Por favor, consulta os termos e condições no momento da reserva."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">

      {/* Decorative Elements */}
      <div className="decoration circle-icon-left">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <circle cx="45" cy="45" r="40" fill="rgba(253, 76, 27, 1)" stroke="rgba(253, 76, 27, 1)" strokeWidth="2" />
          <path d="M45 20L35 50H50L40 80L60 45H45L55 20Z" fill="#F3DA17" />
        </svg>
      </div>

      <div className="decoration circle-icon-right">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <circle cx="45" cy="45" r="40" fill="rgba(253, 76, 27, 1)" stroke="rgba(253, 76, 27, 1)" strokeWidth="2" />
          <path d="M45 20L35 50H50L40 80L60 45H45L55 20Z" fill="#F3DA17" />
        </svg>
      </div>

      <div className="decoration starburst-top-right">
        <svg width="85" height="85" viewBox="0 0 85 85" fill="none">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="42"
              y1="42"
              x2="42"
              y2="8"
              stroke="rgba(253, 76, 27, 1)"
              strokeWidth="2.5"
              transform={`rotate(${i * 30} 42 42)`}
            />
          ))}
        </svg>
      </div>

      <div className="decoration lightning-left">
        <svg width="55" height="90" viewBox="0 0 55 90" fill="#E3E339">
          <path d="M27 0L14 50H33L20 90L47 34H27L38 0Z" />
        </svg>
      </div>

      <div className="decoration lightning-right">
        <svg width="60" height="95" viewBox="0 0 60 95" fill="#E3E339">
          <path d="M30 0L16 55H36L22 95L52 36H30L42 0Z" />
        </svg>
      </div>

      <div className="decoration starburst-bottom-left">
        <svg width="95" height="95" viewBox="0 0 95 95" fill="none">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="47"
              y1="47"
              x2="47"
              y2="10"
              stroke="rgba(253, 76, 27, 1)"
              strokeWidth="3"
              transform={`rotate(${i * 30} 47 47)`}
            />
          ))}
        </svg>
      </div>

      <div className="decoration lightning-bottom-right">
        <svg width="55" height="85" viewBox="0 0 55 85" fill="#E3E339">
          <path d="M27 0L14 47H33L20 85L47 32H27L38 0Z" />
        </svg>
      </div>

      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          PERGUNTAS FREQUENTES (FAQ)
        </motion.h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <div className="icon-wrapper">
                  {openIndex === index ? (
                    <Minus size={20} className="toggle-icon" />
                  ) : (
                    <Plus size={20} className="toggle-icon" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx="true">{`
        .faq-section {
          background-color: #0C132D;
          padding: 80px 0 100px 0;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 900px;
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

        .circle-icon-left {
          left: 80px;
          top: 100px;
        }

        .circle-icon-right {
          right: 80px;
          bottom: 150px;
        }

        .starburst-top-right {
          right: 30px;
          top: 30px;
        }

        .lightning-left {
          left: 90px;
          top: 380px;
        }

        .lightning-right {
          right: 100px;
          top: 350px;
        }

        .starburst-bottom-left {
          left: 25px;
          bottom: 80px;
        }

        .lightning-bottom-right {
          right: 80px;
          bottom: 700px;
        }

        /* --- Title --- */
        .section-title {
          font-family: 'Impact', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #E3E339;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 50px;
          letter-spacing: 1px;
        }

        /* --- FAQ List --- */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          background-color: #FFFFFF;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          background-color: #FFFFFF;
          border: none;
          cursor: pointer;
          font-family: 'Azo Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: #2C2C2C;
          text-align: left;
          transition: background-color 0.2s ease;
        }

        .faq-question:hover {
          background-color: #F8F8F8;
        }

        .icon-wrapper {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #E8F4FF;
          border-radius: 50%;
          margin-left: 15px;
        }

        .toggle-icon {
          color: #0077CC;
        }

        .faq-answer {
          overflow: hidden;
          background-color: #FAFAFA;
          border-top: 1px solid #E5E5E5;
        }

        .faq-answer p {
          font-family: 'Azo Sans', sans-serif;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4A4A4A;
          padding: 18px 24px;
          margin: 0;
        }

        /* --- Responsive --- */
        @media (max-width: 768px) {
          .faq-section {
            padding: 60px 0 80px 0;
          }

          .container {
            padding: 0 20px;
          }

          .section-title {
            font-size: 1.8rem;
            margin-bottom: 35px;
          }

          .faq-question {
            padding: 15px 18px;
            font-size: 0.95rem;
          }

          .faq-answer p {
            padding: 15px 18px;
            font-size: 0.9rem;
          }

          .decoration {
            opacity: 0.5;
            transform: scale(0.7);
          }

          .circle-icon-left {
            left: 20px;
            top: 60px;
          }

          .circle-icon-right {
            right: 20px;
            bottom: 100px;
          }

          .lightning-left,
          .lightning-right,
          .lightning-bottom-right {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem;
          }

          .faq-question {
            padding: 12px 15px;
            font-size: 0.9rem;
          }

          .icon-wrapper {
            width: 24px;
            height: 24px;
          }

          .toggle-icon {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </section>
  );
}
