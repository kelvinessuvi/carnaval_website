import { motion } from 'framer-motion';

export default function ParticipationNav() {
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="participation-nav" className="nav-container">
            <div className="pill-nav">
                <button onClick={() => scrollToId('individual')} className="pill-btn orange">
                    INDIVIDUAL
                </button>
                <button onClick={() => scrollToId('groups')} className="pill-btn pink">
                    GRUPOS
                </button>
                <button onClick={() => scrollToId('bleachers')} className="pill-btn yellow">
                    BANCADA
                </button>
            </div>

            <style jsx="true">{`
        .nav-container {
          padding: 3rem 0;
          display: flex;
          justify-content: center;
        }

        .pill-nav {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pill-btn {
          padding: 0.8rem 2.5rem;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          color: white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          transition: transform 0.2s;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .pill-btn:hover {
          transform: translateY(-5px);
        }

        .orange { background-color: var(--color-primary); }
        .pink { background-color: var(--tape-pink); }
        .yellow { background-color: var(--tape-yellow); color: black; }
      `}</style>
        </div>
    );
}
