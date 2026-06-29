import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await fetchProducts();
            setProducts(data);
        }

        loadProducts();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <h3 key={product.id}>{product.title}</h3>
            ))}
        </div>
    );
}