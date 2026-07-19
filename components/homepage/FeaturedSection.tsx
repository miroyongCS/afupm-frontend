type FeaturedItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {
  items: FeaturedItem[];
};

export default function FeaturedSection({ items }: Props) {
  return (
    <section className="featured-section">
      <div className="section-header">
        <h2>DESTAQUES</h2>
      </div>

      <div className="featured-grid">
        {items.map((item) => (
          <article className="featured-card" key={item.id}>
            <div
              className="featured-image"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            />

            <div className="featured-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}