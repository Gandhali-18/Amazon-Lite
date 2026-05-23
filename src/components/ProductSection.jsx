import "../styles/productionSection.css";

export default function ProductSection({ title, items = [] }) {
  return (
    <section className="section">
      <h2>{title}</h2>

      <div className="items">
        {items.map((item, index) => (
          <a href={item.link} key={index} className="card">
            <img src={item.img} alt={item.title}   loading="lazy" />
            <p>{item.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
