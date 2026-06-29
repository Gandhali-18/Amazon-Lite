import "../styles/productionSection.css";

export default function ProductSection({ title, items = [] }) {
  return (
    <section className="section">
      <h2>{title}</h2>

      <div className="items">
        {items.map((item) => (
          <div key={item.id} className="card">
            <img
              src={item.thumbnail}
              alt={item.title}
              loading="lazy"
            />

            <p className="price
            ">{item.title}</p>

            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}