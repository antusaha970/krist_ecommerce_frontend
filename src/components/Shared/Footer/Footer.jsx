import "./footer.css";
import logo from "../../../assets/stock/logo.png";
const Footer = () => {
  return (
    <section className="footer_bg">
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className="container my-">
        <footer className="text-center text-lg-start   pt-4">
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h4 className="fw-bold text-white">Krist</h4>
                <ul className="list-unstyled mb-4">
                  <li className="footer_link">
                    <a href="#!" className="footer_link">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer_link">
                      Collections
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer_link">
                      Top deals
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer_link">
                      Coupon code
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase text-white mb-4">Assistance</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="footer_link">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer_link">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer_link">
                      Shipping Information
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer_link">
                      Returns &amp; Exchanges
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer_link">
                      Payment
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase text-white mb-4">Careers</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="footer_link">
                      Jobs
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-white">
                  Sign up to latest deals
                </h5>
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                  />
                  <label
                    className="form-label footer_link"
                    htmlFor="form5Example2"
                  >
                    Email address
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-outline-light"
                >
                  Subscribe
                </button>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div className="text-center p-3 border-top border-white footer_link">
            © {new Date().getFullYear()} Copyright:&nbsp;&nbsp;
            <a className="text-white" href="">
              Krist-ecommerce
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </section>
  );
};

export default Footer;
