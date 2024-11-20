import Footer from "./components/logo-footer.png";
import "./App";
import "bootstrap/dist/css/bootstrap.min.css";

function footer() {
  return (
    <>
      <div className="container text-white footer">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
          <div className="col mb-3 logo-footer">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            ></a>
            <p className="text-body-secondary">
              <img src={Footer} alt="" />
            </p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5 className="p-title">Indirizzo uffici</h5>
            <ul className="nav flex-column a-address">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  EWAKE s.r.l
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Viale del lavoro, 33
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  37135 - Verona
                </a>
              </li>
              <li className="nav-item mb-2 mt-5">
                <a href="#" className="nav-link p-0 text-white">
                  T 045 82 13 434E.
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  M info@ewake.agency
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="p-title">Seguici</h5>
            <ul className="nav flex-column text-white a-address">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="p-title">Menù</h5>
            <ul className="nav flex-column a-address">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Progetti
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Servizi
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Candidati
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <div>
          <p className="p-link">
            © eWAKE - PEC: ewake@bpec.it - P.iva 03932720232 - SDI: WP7SE2Q -
            Privacy policy - Cookies Policy
          </p>
        </div>
      </div>

      <div className="b-example-divider"></div>
    </>
  );
}

export default footer;
