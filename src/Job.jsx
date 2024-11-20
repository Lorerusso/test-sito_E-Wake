import "./App.css";
import ImgWork from "./components/image-work.png";
import ImgBkg from "./components/background-color.png";

function Job() {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-white text-start">
          <div className="col margin-img">
            <p className="text-promuoviamo font-family">
              Promuoviamo un ambiente in cui{" "}
              <em className="i">incoraggiare le idee</em> e <br /> celebrare i
              risultati. Coltiviamo un'atmosfera d’inclusività, in <br /> cui
              tutti possono contribuire con i propri{" "}
              <em className="i">unici punti di forza</em>.
            </p>
            <img src={ImgWork} className="img-fluid w-100" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="imgBkgcontainer">
              <img src={ImgBkg} className="w-100 img-fluid" alt="" />
              <div className="d-flex justify-content-center">
                <div className="boxImg  text-white">
                  <div className="text-box">
                    <p className="font-family text-la-nostra-forza">
                      LA NOSTRA FORZA
                    </p>
                    <p className="font-family p-la-nostra-forza text-center">
                      Il nostro team può fornire un ventaglio di soluzioni
                      diverse in base la tua esigenza, dall'idea alla produzione
                      finita. Formiamo un team multidisciplinare di strateghi,
                      designer, analisti, project manager, sviluppatori ed
                      esperti di contenuti e social media.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
