import TeamImg1 from "./components/img-team-1.png";
import TeamImg2 from "./components/img-team-2.png";
import "./App.css";

function TeamCompattoEagile() {
  return (
    <>
      <div class="container text-left text-white">
        <div class="row">
          <div class="col-12 col-md-6  team-img-1">
            <img src={TeamImg1} className="img-fluid" alt="" />
          </div>
          <div class="col-12 col-md-6">
            <div>
              <p className="text-team-compatto-e-agile">
                <em className="i">
                  Team compatto <br /> e agile
                </em>
              </p>
              <p className="text-uno-degli-aspetti font-family">
                Uno degli aspetti distintivi della nostra agenzia è la
                dimensione ottimale del nostro team. Abbiamo capito che
                mantenere un team compatto ci consente di ottenere i migliori
                risultati per i nostri clienti e per noi stessi. Abbiamo una
                rete di collaboratori con cui da anni garantiamo una
                collaborazione efficiente, una comunicazione aperta e un
                coordinamento con soluzione di continuità.
              </p>
              <button className="button-scopri-i-nostri-servizi-chi-siamo">
                Entra nel team
              </button>
              <img src={TeamImg2} className="team-img-2 img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCompattoEagile;
