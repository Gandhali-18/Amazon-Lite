import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import ProductSection from "./ProductSection";
import "../styles/productGrid.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="grid">
      <ProductSection
        title="Today's Products"
        items={products}
      />
    </div>
  );
}