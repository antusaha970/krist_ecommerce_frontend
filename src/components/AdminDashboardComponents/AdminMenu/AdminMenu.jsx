import AdminDashBoardMenu from "../AdminDashBoardMenu/AdminDashBoardMenu";
const AdminMenu = () => {
  return (
    <section className="container-fluid my-5">
      <div className="row g-3">
        <div className="col-md-2 col-sm-12 col-12 shadow-sm ps-4 text-center">
          <AdminDashBoardMenu />
        </div>
        <div className="col-md-10 col-sm-12 col-12">Overview</div>
      </div>
    </section>
  );
};

export default AdminMenu;
