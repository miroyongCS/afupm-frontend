type ContentItem = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
};

type Props = {
  title: string;
  items: ContentItem[];
};

export default function NewsSection({ title, items }: Props) {
  return (
    <section className="content-section">
      <div className="section-header">
        <h2>{title}</h2>

        <a href="/anuncios">
          MAIS →
        </a>
      </div>

      <div className="content-grid">
        {items.map((item) => (
          <article className="content-card" key={item.id}>
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            />

            <div className="card-content">
              <span className="card-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p>{item.excerpt}</p>

              <a href={`/anuncios/${item.id}`}>
                Ler mais →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}