import "./App";
import Mantra from "./components/mantra-bkg-green.jpg";

function ContactUs() {
  return (
    <>
      <div className="position-relative w-100">
        <img src={Mantra} className="img-fluid w-100 mt-5" alt="" />
        <div className="position-absolute top-0 start-0 align-contattaci">
          <h1 className="p-text-contattaci font-family">
            Creiamo qualcosa <br />
            di{" "}
            <strong>
              <em className="text-unico">unico</em>
            </strong>{" "}
            per il <strong className="text-tuo-brand">tuo brand</strong>.
          </h1>
          <button className="contattaci font-family">Contattaci</button>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
