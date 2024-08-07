import { useEffect, useState } from "react";
import "./bestSeller.css";
import client from "../../api_client/api_client";
import ProductCard from "../Shared/ProductCard/ProductCard";
import Loader from "../Shared/Loader/Loader";
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getBestSeller = async () => {
      try {
        setIsLoading(true);
        const response = await client.get("/api/products/?page_size=8");
        setProducts(response.data.results);
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getBestSeller();
  }, []);

  return (
    <section className="container m_top_bottom">
      <h2 className="text-center fw-bold mb-5">Our Bestseller</h2>
      <div className="container">
        {isLoading && <Loader />}
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
