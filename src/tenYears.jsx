import "./App";
import ten from "./components/10.png";
import telephone from "./components/Vector.png";
import "bootstrap/dist/css/bootstrap.min.css";

function tenYears() {
  return (
    <>
      <div className="container container-lg text-center">
        <div className="row d-flex align-items-center text-white">
          <div className="col-12 col-lg-6">
            <div className="number-container">
              <img src={ten} className="img-fluid" alt="" />
              <p className="text-inside-10">
                Raccontiamo <br /> <i className="text-la-marca">la marca</i>{" "}
                <br />
                da
                <span className="tenyears ps-3">10 anni</span>
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6 ">
            <p className="text-contact">
              Siamo{" "}
              <strong>
                un’agenzia <br />
                creativa
              </strong>{" "}
              situata nella <br /> zona industriale di <br />
              <em className="text-Verona">Verona</em>.
            </p>
            <div className="general-button">
              <button className="button-contact">Contattaci</button>
              <button className="button-icon-contact">
                <img src={telephone} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="line" />
    </>
  );
}

export default tenYears;
