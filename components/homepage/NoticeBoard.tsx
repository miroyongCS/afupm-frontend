type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
};

type Props = {
  events: Event[];
};

export default function NoticeBoard({ events }: Props) {
  return (
    <section className="notice-section">
      <div className="section-header">
        <h2>QUADRO DE AVISOS</h2>
      </div>

      <div className="notice-grid">
        <div className="notice-panel">
          <h3>Próximos Eventos</h3>

          {events.length === 0 ? (
            <p className="empty-state">
              Não há eventos no momento
            </p>
          ) : (
            events.map((event) => (
              <article className="event-item" key={event.id}>
                <span>{event.date}</span>

                <h4>{event.title}</h4>

                <p>{event.description}</p>

                <small>{event.location}</small>
              </article>
            ))
          )}
        </div>

        <div className="notice-panel">
          <h3>Anúncios</h3>

          <p className="announcement">
            Acompanhe as principais informações e comunicados da AFUPM.
          </p>

          <a href="/anuncios">
            Ver todos os anúncios →
          </a>
        </div>
      </div>
    </section>
  );
}