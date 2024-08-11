import { useEffect, useState } from "react";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import client from "../../../api_client/api_client";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const MyWishList = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const getWishListItems = async () => {
      try {
        const response = await client.get("/api/wishlist/");
        setWishlist(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getWishListItems();
  }, []);
  console.log(wishlist);

  return (
    <section className="container m_top_bottom">
      <h2 className="mb-4">My Wishlist</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <ProfileNavigation />
        </div>
        <div className="col-12 col-sm-6 col-md-8">
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
