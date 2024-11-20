import "./App.css";
import Toggle from "./toggle.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function InostriSettori() {
  return (
    <>
      <div className="container text-white">
        <div className="row d-flex align-items-center">
          <div className="col">
            <div className="float-start">
              <p className="font-family text-i-nostri-servizi">
                I NOSTRI SETTORI
              </p>
              <div className="d-flex ">
                <div>
                  <div className="d-flex align-items-center column-gap-3 my-5">
                    <div className="box"></div>
                    <div>
                      <p className="p-i-nostri-settori font-family">
                        <strong>Strategia</strong>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center column-gap-3 my-5">
                    <div className="box1"></div>
                    <div>
                      <p className="p-i-nostri-settori font-family">
                        <strong>Creatività e design</strong>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center column-gap-3 my-5">
                    <div className="box1"></div>
                    <div>
                      <p className="p-i-nostri-settori font-family">
                        <strong>Produzione</strong>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center column-gap-3 my-5">
                    <div className="box1"></div>
                    <div>
                      <p className="p-i-nostri-settori font-family">
                        <strong>Media & Performance</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Toggle></Toggle>
        </div>
      </div>
    </>
  );
}

export default InostriSettori;
