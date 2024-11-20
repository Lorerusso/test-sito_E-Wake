import Image from "./components/image.png";
import "bootstrap/dist/css/bootstrap.min.css";

function SiamofattiCosi() {
  return (
    <>
      <div className="container text-center text-white my-5">
        <div className="row align-items-start">
          <div className="col-12 col-md-6">
            <div className="float-start">
              <p className="font-family text-i-nostri-servizi">
                SIAMO FATTI COSI
              </p>
            </div>
            <div className="float-start text-start p-scopri-chi-siamo font-family">
              Rigorosi, ambiziosi, affidabili, trasparenti e sinceri.{" "}
              <strong>
                Costruiamo dall’inizio alla fine i nostri prodotti
              </strong>
              , ottimizzando i processi e incrementando le performance.
            </div>
            <button className="float-start button-scopri-i-nostri-servizi font-family">
              Scopri chi siamo
            </button>
          </div>
          <div className="col-12 col-md-6 text-start ">
            <div>
              <img src={Image} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiamofattiCosi;
