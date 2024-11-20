import "./App.css";
import telephone from "./components/Vector.png";
import Mantra from "./components/Mantra.svg";
function KickOff() {
  return (
    <>
      <div class="container text-start text-white">
        <div class="row">
          <div class="col">
            <div>
              <p className="text-team-compatto-e-agile font-family">KICK OFF</p>
              <p className="p-non-sai-da-dove-iniziare">
                <em className="i text-non-sai-da-dove-iniziare">
                  Non sai da <br />
                  dove iniziare?
                </em>
              </p>
              <p className="text-pianifichiamo font-family">
                Pianifichiamo e personalizziamo il percorso di crescita del tuo
                brand.
              </p>
              <div className="general-button">
                <button className="button-contact">Contattaci</button>
                <button className="button-icon-contact">
                  <img src={telephone} alt="" />
                </button>
              </div>
              <div className="img-header-mantra">
                <img src={Mantra} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <p className="text-quando-scegliete font-family">
                Quando scegliete di lavorare con noi, diventate parte del nostro
                team. Coinvolgiamo tutti durante il processo, favorendo un
                ambiente in cui convergono prospettive e talenti diversi.
                Insieme, superiamo i limiti, sfidiamo le norme e puntiamo
                all'eccellenza in ogni progetto che intraprendiamo.
              </p>
            </div>

            {/* primoaccordion */}

            <div
              class="accordion custom-accordion accordion-align"
              id="customAccordionExample"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Analisi delle esigenze
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">
                    Questo è il contenuto del primo elemento. Puoi
                    personalizzare il testo e aggiungere qualsiasi contenuto
                    qui.
                  </div>
                </div>
              </div>

              {/* secondoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Ricerca e analisi di mercato
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* terzoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Definizione degli obiettivi
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* quartoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Creazione della strategia
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* quintoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Pianificazione del budget
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* sestoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Sviluppo del piano di comunicazione
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* settimoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Creazione di contenuti
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* ottavoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    Implementazione
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* nonoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-Decimo" id="headingDecimo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDecimo"
                    aria-expanded="false"
                    aria-controls="collapseDecimo"
                  >
                    Monitoraggio e analisi
                  </button>
                </h2>
                <div
                  id="collapseDecimo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingDecimo"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* decimoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-Decimo" id="headingDecimo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDecimo"
                    aria-expanded="false"
                    aria-controls="collapseDecimo"
                  >
                    Ottimizzazione
                  </button>
                </h2>
                <div
                  id="collapseDecimo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingDecimo"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* undicesimoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-Undicesimo" id="headingUndicesimo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseUndicesimo"
                    aria-expanded="false"
                    aria-controls="collapseUndicesimo"
                  >
                    Report e feedback
                  </button>
                </h2>
                <div
                  id="collapseUndicesimo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingUndicesimo"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>

              {/* dodicesimoaccordion */}

              <div class="accordion-item">
                <h2 class="accordion-Dodicesimo" id="headingDodicesimo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDodicesimo"
                    aria-expanded="false"
                    aria-controls="collapseDodicesimo"
                  >
                    Manutenzione e supporto
                  </button>
                </h2>
                <div
                  id="collapseDodicesimo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingDodicesimo"
                  data-bs-parent="#customAccordionExample"
                >
                  <div class="accordion-body">inserisci testo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KickOff;
