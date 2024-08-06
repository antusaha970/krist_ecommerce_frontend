import { useEffect, useState } from "react";
import "./bestSeller.css";
import client from "../../api_client/api_client";
import ProductCard from "../Shared/ProductCard/ProductCard";
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getBestSeller = async () => {
      try {
        const response = await client.get("/api/products/?page_size=8");
        setProducts(response.data.results);
      } catch (error) {
        console.error({ error });
      }
    };
    getBestSeller();
  }, []);

  console.log(products);

  return (
    <section className="container m_top_bottom">
      <h2 className="text-center fw-bold mb-5">Our Bestseller</h2>
      <div className="container">
        <div className="row">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
