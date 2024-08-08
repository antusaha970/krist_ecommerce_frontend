import { useEffect, useState } from "react";
import client from "../../api_client/api_client";
import ProductCard from "../Shared/ProductCard/ProductCard";

const RelatedProduct = ({ categories }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getRelatedProducts = async () => {
      try {
        setIsLoading(true);
        const response = await client.get(`/api/products/?page_size=4`);
        setRelatedProducts(response.data.results);
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getRelatedProducts();
  }, []);
  return (
    <section className="m_top_bottom">
      <h4 className="fs-2 mb-2">Related products</h4>
      {!isLoading && (
        <div className="row">
          {relatedProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RelatedProduct;
