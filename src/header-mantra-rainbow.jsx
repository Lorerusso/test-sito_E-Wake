import "./App.css";
import MantraRainbow from "./components/mantra-rainbow.svg";

function HeaderMantraRainbow() {
  return (
    <>
      <div className="container-fluid text-start text-white mantra-rainbow">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="position-relative d-flex justify-content-end">
              <img
                src={MantraRainbow}
                className="img-fluid img-mantra-rainbow"
                alt=""
              />
              <div className="position-absolute text-start align-text-chi-siamo">
                <div className="text-i-nostri-servizi">CHI SIAMO</div>
                <div className="font">
                  <em>Insieme facciamo grandi cose</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderMantraRainbow;
