import { useEffect, useState } from "react";
import AdminDashBoardMenu from "../AdminDashBoardMenu/AdminDashBoardMenu";
import "./AdminMenu.css";
import client from "../../../api_client/api_client";
import LatestProductCard from "../LatestProductCard/LatestProductCard";
import Loader from "../../Shared/Loader/Loader";
const AdminMenu = () => {
  const [overviewInformation, setOverviewInformation] = useState({});
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLoadingLatestProduct, setIsLoadingLatestProduct] = useState(false);

  useEffect(() => {
    const getAdminOverviewInformation = async () => {
      try {
        const response = await client.get("/api/admin/overview/");
        setOverviewInformation(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const getLatestProducts = async () => {
      try {
        setIsLoadingLatestProduct(true);
        const response = await client.get("/api/admin/latest_product/");
        setLatestProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingLatestProduct(false);
      }
    };
    getAdminOverviewInformation();
    getLatestProducts();
  }, []);
  console.log(latestProducts);

  return (
    <section className="container-fluid my-5">
      <div className="row g-3">
        <div className="col-md-2 col-sm-12 col-12 shadow-sm ps-4 text-center">
          <AdminDashBoardMenu />
        </div>
        <div className="col-md-10 col-sm-12 col-12 bg_overview mt-0 py-2">
          <h2 className="my-0 text-center">Overview</h2>
          <div className="row ">
            <div className="col-xl-6 col-lg-6">
              <div className="card l-bg-cherry">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-shopping-cart" />
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">New Orders</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">
                        {overviewInformation?.total_order}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="card l-bg-blue-dark">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-users" />
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Total customer</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">
                        {overviewInformation?.total_account}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="card l-bg-green-dark">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-ticket-alt" />
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Total Product</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">
                        {overviewInformation?.total_product}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="card l-bg-orange-dark">
                <div className="card-statistic-3 p-4">
                  <div className="card-icon card-icon-large">
                    <i className="fas fa-dollar-sign" />
                  </div>
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Revenue Today</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">$0</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2>Latest products</h2>
            <div className="row g-3">
              {isLoadingLatestProduct && <Loader />}

              {latestProducts?.map((product, idx) => (
                <LatestProductCard product={product} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminMenu;
