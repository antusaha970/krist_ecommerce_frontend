import { useEffect, useState } from "react";
import client from "../../api_client/api_client";

const Products = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await client.get(`/api/products/`);
        setProducts(response.data);
      } catch (error) {
        console.error({ error });
      }
    };
    getAllProducts();
  }, []);

  console.log(products);

  return (
    <section className="container m_top_bottom">
      <p>Shop &gt; All Products</p>

      <div className="row">
        <div className="col-12 col-sm-4 col-md-2">filters</div>
        <div className="col-12 col-sm-8 col-md-10">products</div>
      </div>
    </section>
  );
};

export default Products;
