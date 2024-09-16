import { useEffect, useState } from "react";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import client from "../../../api_client/api_client";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import Loader from "../../Shared/Loader/Loader";

const MyWishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getWishListItems = async () => {
      try {
        setIsLoading(true);
        const response = await client.get("/api/wishlist/");
        setWishlist(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getWishListItems();
  }, []);

  return (
    <section className="container m_top_bottom">
      <h2 className="mb-4">My Wishlist</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <ProfileNavigation />
        </div>
        <div className="col-12 col-sm-6 col-md-8">
          {isLoading && <Loader />}
          {!isLoading && wishlist.length == 0 && (
            <h3>You have no item in wishlist</h3>
          )}
          <div className="row">
            {wishlist?.map((product) => (
              <ProductCard product={product.products} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWishList;
