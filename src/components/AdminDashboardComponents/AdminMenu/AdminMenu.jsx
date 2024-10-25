import AdminDashBoardMenu from "../AdminDashBoardMenu/AdminDashBoardMenu";
import "./AdminMenu.css";
const AdminMenu = () => {
  return (
    <section className="container-fluid my-5">
      <div className="row g-3">
        <div className="col-md-2 col-sm-12 col-12 shadow-sm ps-4 text-center">
          <AdminDashBoardMenu />
        </div>
        <div className="col-md-10 col-sm-12 col-12">
          <h2 className="mb-0 text-center">Overview</h2>
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
                      <h2 className="d-flex align-items-center mb-0">3,243</h2>
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
                      <h2 className="d-flex align-items-center mb-0">15</h2>
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
                    <h5 className="card-title mb-0">Total amount sell</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">578</h2>
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
        </div>
      </div>
    </section>
  );
};

export default AdminMenu;
