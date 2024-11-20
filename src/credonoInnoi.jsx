import Gif from "./components/Gif loghi.gif";
import "bootstrap/dist/css/bootstrap.min.css";

function credonoInnoi() {
  return (
    <>
      <hr className="line" />
      <div className="container text-center text-white my-5">
        <div className="row align-items-start">
          <div className="col">
            <div className="float-start">
              <p className="font-family text-i-nostri-servizi">
                CREDONO IN NOI
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={Gif} className="Gif-loghi" alt="" />
      <hr className="line" />
    </>
  );
}

export default credonoInnoi;
