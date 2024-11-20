import "./App.css";
import MantraRainbow from "./components/mantra-rainbow.svg";
import Img1 from "./components/img-1-chi-siamo.png";
import Img2 from "./components/img-2-chi-siamo.png";
import ImgWork from "./components/image-work.png";
import ImgBkg from "./components/background-color.png";
import Img from "./components/image_header.jpg";

function Symbols() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center text-white">
            <div className="text-simboli">
              3 simboli per spiegare il nostro mantra:
            </div>
            <div className="d-flex justify-content-center padding">
              <div className="figure-container">
                <div className="x">
                  <svg
                    width="283"
                    height="283"
                    viewBox="0 0 283 283"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_822_269)">
                      <path
                        d="M187.247 141.953L282.292 236.849L236.767 282.294L141.7 187.416L141.347 187.063L140.994 187.416L45.9269 282.294L0.401095 236.849L95.4664 141.953L95.8209 141.599L95.4664 141.245L0.401097 46.349L45.9269 0.90423L140.993 95.8015L141.347 96.1542L141.7 95.8015L236.767 0.904234L282.292 46.349L187.247 141.245L186.892 141.599L187.247 141.953Z"
                        stroke="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_822_269">
                        <rect width="283" height="283" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="sveglia"></p>
                </div>
              </div>
              <div className="figure-container">
                <div className="o">
                  <svg
                    width="260"
                    height="260"
                    viewBox="0 0 260 260"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_830_309)">
                      <path
                        d="M129.846 222.347L130.199 222.699L130.552 222.347L222.742 130.321L223.096 129.967L222.742 129.613L130.552 37.5878L130.199 37.2352L129.846 37.5878L37.6562 129.613L37.3017 129.967L37.6562 130.321L129.846 222.347ZM0.5 129.967C0.5 58.4557 58.5775 0.5 130.199 0.5C201.821 0.5 259.898 58.4557 259.898 129.967C259.898 201.479 201.84 259.434 130.199 259.434C58.5577 259.434 0.5 201.479 0.5 129.967Z"
                        stroke="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_830_309">
                        <rect width="260" height="260" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="sveglia"></p>
                </div>
              </div>
              <div className="figure-container">
                <div className="v">
                  <svg
                    width="215"
                    height="283"
                    viewBox="0 0 215 283"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_830_309)">
                      <path
                        d="M0.463379 218.121H214.5V282.401H0.463379V218.121Z"
                        stroke="white"
                      />
                      <path
                        d="M214.5 148.592V194.035H168.953L20.8055 46.1513L66.3509 0.706403L214.5 148.592Z"
                        stroke="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_830_309">
                        <rect width="215" height="283" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="sveglia"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Symbols;
