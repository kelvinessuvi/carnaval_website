import SectionDivider from './ui/SectionDivider';

export default function ParticipationDetails() {
  return (
    <div className="details-container">
      {/* SECTION 1: INDIVIDUAL */}
      <section id="individual" className="detail-section">
        <div className="container grid-layout right-image">
          <div className="text-content">
            <h2 className="section-title">OPÇÃO 1: <span className="highlight">INDIVIDUAL</span></h2>
            <p className="description">
              Seja o protagonista da sua própria festa! Junte-se ao desfile e sinta a energia
              vibrante do Carnaval de Luanda.
            </p>
            <ul className="perks-list">
              <li>• Kit Fantasia Completo</li>
              <li>• Acesso à Área de Concentração</li>
              <li>• Hidratação durante o percurso</li>
            </ul>
            <div className="price-tag">5.000 Kz</div>
            <button className="action-btn">INSCREVER AGORA</button>
          </div>
          <div className="image-content">
            <div className="image-placeholder individual-img">FOTO INDIVIDUAL</div>
          </div>
        </div>
      </section>

      <SectionDivider color="yellow" text="PARTICIPE AGORA" />

      {/* SECTION 2: GROUPS */}
      <section id="groups" className="detail-section">
        <div className="container grid-layout left-image">
          <div className="image-content">
            <div className="image-placeholder group-img">FOTO GRUPO</div>
          </div>
          <div className="text-content">
            <h2 className="section-title">OPÇÃO 2: <span className="highlight-pink">GRUPOS</span></h2>
            <p className="description">
              Reúna a sua turma! Organizações, famílias ou grupos de amigos têm condições especiais.
            </p>
            <ul className="perks-list">
              <li>• Descontos para +10 pessoas</li>
              <li>• Personalização de T-shirts</li>
              <li>• Ponto de encontro exclusivo</li>
            </ul>
            <button className="action-btn pink-btn">CRIAR GRUPO</button>
          </div>
        </div>
      </section>

      <SectionDivider color="pink" text="VIVA A FOLIA" />

      {/* SECTION 3: BLEACHERS */}
      <section id="bleachers" className="detail-section centered">
        <div className="container">
          <h2 className="section-title center-text">OPÇÃO 3: <span className="highlight-yellow">BANCADA</span></h2>
          <div className="full-width-image">
            <div className="image-placeholder bleacher-img">VISTA DA BANCADA</div>
          </div>
          <p className="description center-text">
            Prefere assistir com conforto? Garanta o seu lugar na nossa bancada VIP com vista privilegiada para o desfile.
          </p>
          <div className="center-btn">
            <button className="action-btn yellow-btn">RESERVAR LUGAR</button>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .detail-section {
          padding: 4rem 0;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        .highlight { color: var(--color-primary); }
        .highlight-pink { color: var(--tape-pink); }
        .highlight-yellow { color: var(--tape-yellow); text-shadow: 2px 2px 0px rgba(0,0,0,0.8); }

        .description {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .perks-list {
          list-style: none;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        .perks-list li { margin-bottom: 0.5rem; }

        .price-tag {
          font-family: var(--font-display);
          font-size: 2rem;
          color: var(--tape-yellow);
          margin-bottom: 1.5rem;
        }

        .action-btn {
          background: var(--color-primary);
          color: white;
          padding: 1rem 2rem;
          font-weight: 700;
          font-family: var(--font-display);
          font-size: 1.2rem;
          text-transform: uppercase;
          border-radius: var(--radius-sm);
          transition: transform 0.2s;
        }
        
        .pink-btn { background: var(--tape-pink); }
        .yellow-btn { background: var(--tape-yellow); color: black; }

        .action-btn:hover { transform: scale(1.05); }

        .image-placeholder {
          width: 100%;
          height: 350px;
          background: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: rgba(255,255,255,0.3);
          border-radius: var(--radius-lg);
          border: 2px dashed rgba(255,255,255,0.1);
        }

        .centered { text-align: center; }
        .center-text { text-align: center; margin-left: auto; margin-right: auto; max-width: 600px; }
        .center-btn { display: flex; justify-content: center; margin-top: 2rem; }
        
        .full-width-image {
          margin: 2rem 0;
        }
        
        @media (max-width: 768px) {
          .grid-layout { grid-template-columns: 1fr; }
          .right-image .image-content { order: -1; } /* Image first on mobile */
          .section-title { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}
