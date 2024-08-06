import { useEffect, useState } from "react";
import "./bestSeller.css";
import client from "../../api_client/api_client";
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
    <section className="container my-5">
      <h2 className="text-center fw-bold">Our Bestseller</h2>
    </section>
  );
};

export default BestSeller;
