import SubBtn from './SubBtn';
import '../styles/subnav.css';

export default function SubNav() {
  const categories = [
    "All", "Fresh", "Amazon miniTV", "Sell", "Best Sellers", "Mobiles", "Today's Deals", "Prime", "Customer Service", "Electronics"
  ];

  return (
    <div className="subnav-container">
      {categories.map((cat, idx) => (
        <SubBtn key={idx} label={cat} />
      ))}
    </div>
  );
}
