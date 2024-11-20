import "bootstrap/dist/css/bootstrap.min.css";
import curve from "./components/curve 1.gif";
import Slider from "./components/slider.png";

function Servizi() {
  return (
    <>
      <div className="container text-center text-white my-5">
        <div className="row align-items-start gap-5">
          <div className="col">
            <div className="float-start">
              <p className="font-family text-i-nostri-servizi">
                I NOSTRI SERVIZI
              </p>
            </div>
            <div className="float-start text-start p-i-nostri-servizi my-5 font-family">
              Diamo{" "}
              <span className="text-nuova-carica">
                <em>nuova carica</em>
              </span>{" "}
              a progetti di{" "}
              <span className="text-made-in-Italy">comunicazione digitale</span>
              .
            </div>
            <button className="float-start button-scopri-i-nostri-servizi font-family">
              Scopri i servizi
            </button>
          </div>
          <div className="col">
            <p className="text-i-nostri-servizi text-start">CI OCCUPIAMO DI</p>
            <div className="text-start d-flex justify-content-around">
              <img src={curve} className=" curve" alt="" />
              <div>
                <ul className="float-start p-text-ci-occupiamo-di">
                  <li>Strategy & Innovation</li>
                  <li>Branding</li>
                  <li>Creativity & Design</li>
                  <li>Mindset & Experience</li>
                  <li>Performance optimization</li>
                  <li>Advertising</li>
                  <li>Digital Experience</li>
                  <li>Social media management</li>
                  <li>Creators</li>
                  <li>Websites & Apps</li>
                  <li>Production</li>
                </ul>
              </div>
              <img src={Slider} className="img-fluid slider" alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="line" />
    </>
  );
}

export default Servizi;
