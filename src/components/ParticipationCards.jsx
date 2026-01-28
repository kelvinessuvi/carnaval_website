import { motion } from 'framer-motion';
import { User, Users, Music } from 'lucide-react';

const cardsData = [
    {
        id: 1,
        title: "1. Dançar no Desfile",
        subtitle: "Veterano, Recruta ou Batalhão de foliões",
        description: "O teu lugar está garantido no asfalto com toda a energia e criatividade!",
        price: "A partir de 5.000 Kz",
        icon: <Music size={40} />
    },
    {
        id: 2,
        title: "2. Participar em Grupo",
        subtitle: "Organize um grupo de amigos",
        description: "Família ou comunidade e reserve os vossos kits. Dancem juntos, celebrem juntos!",
        price: "Descontos especiais para grupos",
        icon: <Users size={40} />
    },
    {
        id: 3,
        title: "3. Assistir na Bancada",
        subtitle: "Vista privilegiada",
        description: "Garanta o teu lugar na bancada para assistir ao desfile com todo o conforto e segurança.",
        price: "Acesso Livre",
        icon: <User size={40} />
    }
];

export default function ParticipationCards() {
    return (
        <section id="participation" className="cards-section">
            <div className="container">
                <h2 className="section-title">Escolha Como Participar</h2>

                <div className="cards-grid">
                    {cardsData.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="participation-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon-wrapper">
                                {card.icon}
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <div className="card-subtitle">{card.subtitle}</div>
                            <p className="card-description">{card.description}</p>
                            <div className="card-price">{card.price}</div>
                            <button className="card-button">Saber Mais</button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .cards-section {
          padding: 4rem 0;
          background-color: var(--color-background);
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: var(--color-secondary);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .participation-card {
          background: var(--color-surface);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .participation-card:hover {
          border-color: var(--color-primary);
          background: var(--color-surface-hover);
        }

        .card-icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(255, 140, 0, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .card-title {
          color: white;
          font-size: 1.5rem;
        }

        .card-subtitle {
          color: var(--color-secondary);
          font-weight: 600;
          font-family: var(--font-body);
        }

        .card-description {
          color: var(--color-text-muted);
          flex-grow: 1;
        }

        .card-price {
          font-family: var(--font-display);
          font-size: 1.25rem;
          color: var(--color-primary);
          margin-top: 1rem;
        }

        .card-button {
          width: 100%;
          padding: 1rem;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          border-radius: var(--radius-md);
          font-weight: 600;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .card-button:hover {
          background: var(--color-primary);
          color: white;
        }
      `}</style>
        </section>
    );
}
