import ProductSection from "./ProductSection";
import "../styles/productGrid.css";

export default function ProductGrid() {
  const sectionData = [
    {
      title: "Keep shopping for",
      items: [
        { img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=150&q=80", title: "Vacuums", link: "/vacuum" },
        { img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=150&q=80", title: "Mattress", link: "/mattress" },
        { img: "https://images.unsplash.com/photo-1583485088034-697b5a69f000?auto=format&fit=crop&w=150&q=80", title: "Stationery", link: "/stationery" },
        { img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=150&q=80", title: "Air fryer", link: "/airfryer" }
      ]
    },
    {
      title: "Pick up where you left off",
      items: [
        { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80", title: "Headphones", link: "#" },
        { img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80", title: "Watch", link: "#" },
        { img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=150&q=80", title: "Camera", link: "#" },
        { img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=150&q=80", title: "Smartwatch", link: "#" }
      ]
    },
    {
      title: "Deals related to items you've saved",
      items: [
        { img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=150&q=80", title: "Laptop", link: "#" },
        { img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=150&q=80", title: "Keyboard", link: "#" },
        { img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=150&q=80", title: "Monitor", link: "#" },
        { img: "https://images.unsplash.com/photo-1615563272613-8930aaf57423?auto=format&fit=crop&w=150&q=80", title: "Mouse", link: "#" }
      ]
    },
    {
      title: "Special Year End Sale",
      items: [
        { img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=150&q=80", title: "Sunglasses", link: "#" },
        { img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=150&q=80", title: "Shoes", link: "#" },
        { img: "https://images.unsplash.com/photo-1594938298596-afdf1534005c?auto=format&fit=crop&w=150&q=80", title: "Backpack", link: "#" },
        { img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=150&q=80", title: "Jacket", link: "#" }
      ]
    }
  ];

  return (
    <div className="grid">
      {sectionData.map((section, index) => (
        <ProductSection
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
}
