import "./App";
import HeaderMantraRainbow from "./header-mantra-rainbow";
import Nav from "./nav";
import TanteIdeeUnSoloTeam from "./tante-idee-un-solo-team";
import Symbols from "./Symbols";
import Job from "./Job";
import Profile from "./profile";
import KickOff from "./kick-off";
import Team from "./team-compatto-e-agile";
import ContactUs from "./contact-us";
import Footer from "./footer";

function ChiSiamo() {
  return (
    <>
      <div className="body">
        <Nav></Nav>
        <HeaderMantraRainbow></HeaderMantraRainbow>
        <TanteIdeeUnSoloTeam></TanteIdeeUnSoloTeam>
        {/* <Symbols></Symbols> */}
        <Job></Job>
        <Profile></Profile>
        <KickOff></KickOff>
        <Team></Team>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </>
  );
}

export default ChiSiamo;
