import ImgAssebled from "./components/img-two-images.png";
import "./App.css";

function TanteIdeeUnsoloTeam() {
  return (
    <>
      <div className="container text-end text-white">
        <div className="row align-items-center">
          <div className="col">
            <div className="position-relative text-start">
              <img
                src={ImgAssebled}
                alt="Immagine combinata"
                className="header-img-assembled img-fluid"
              />
              <div className="position-absolute header-text">
                <p className="text-tante-idee-un-solo-team">
                  <em>
                    Tante idee, <br /> un solo team
                  </em>
                </p>
                <p className="font-family p-tante-idee-un-solo-team">
                  Quando scegliete di lavorare con noi, diventate parte del
                  nostro team. Coinvolgiamo tutti durante il processo, favorendo
                  un ambiente in cui convergono prospettive e talenti diversi.
                  Insieme, superiamo i limiti, sfidiamo le norme e puntiamo
                  all'eccellenza in ogni progetto che <br /> intraprendiamo.
                </p>
                <button className="button-scopri-i-nostri-servizi-chi-siamo">
                  Scopri i servizi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TanteIdeeUnsoloTeam;
