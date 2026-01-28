import { motion } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';

const scheduleItems = [
  { time: "14:00", activity: "Concentração dos grupos e participantes" },
  { time: "16:00", activity: "Início do desfile pelas ruas de Luanda" },
  { time: "18:30", activity: "Chegada à Porto de luanda" },
  { time: "20:00", activity: "Continuação da festa no Porto de Luanda" },
  { time: "22:00", activity: "Encerramento" }
];

export default function EventSchedule() {
  return (
    <section className="schedule-section">
      <div className="container">

        <div className="schedule-container">
          <div className="schedule-header">
            <h3>PROGRAMAÇÃO DE FESTA</h3>
            <span className="subtitle">07 DE FEVEREIRO</span>
          </div>

          <div className="schedule-table">
            <div className="table-head">
              <span className="col-time">HORA</span>
              <span className="col-desc">DESCRIÇÃO</span>
            </div>
            {scheduleItems.map((item, index) => (
              <div key={index} className="table-row">
                <span className="time">{item.time}</span>
                <span className="activity">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionDivider color="pink" text="CARNAVAL 2025" />

      <style jsx="true">{`
        .schedule-section {
          padding: 4rem 0;
        }

        .schedule-container {
          background: #0f1623;
          border-radius: var(--radius-lg);
          padding: 3rem;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          max-width: 900px;
          margin: 0 auto;
        }

        .schedule-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .schedule-header h3 {
          color: var(--tape-yellow);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: var(--color-primary);
          font-family: var(--font-display);
          font-size: 1.5rem;
          letter-spacing: 2px;
        }

        .schedule-table {
          width: 100%;
        }

        .table-head {
          display: flex;
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          border-radius: var(--radius-sm);
          margin-bottom: 1rem;
          font-weight: 700;
          color: var(--tape-pink);
          font-family: var(--font-display);
          font-size: 1.2rem;
        }

        .col-time { width: 100px; }
        .col-desc { flex: 1; }

        .table-row {
          display: flex;
          padding: 1.2rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          align-items: center;
          transition: background 0.2s;
        }

        .table-row:last-child { border-bottom: none; }
        .table-row:hover { background: rgba(255,255,255,0.02); }

        .time {
          width: 100px;
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: white;
        }

        .activity {
          flex: 1;
          color: var(--color-text-muted);
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
}
