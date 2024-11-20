import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./nav";
import Header from "./header";
import SlideInText from "./slideInText";
import TenYears from "./tenYears";
import Card from "./card";
import Servizi from "./Servizi";
import SiamofattiCosi from "./SiamofattiCosi";
import CredonoInnoi from "./credonoInnoi";
import InostriSettori from "./InostriSettori";
import Footer from "./footer";
import ContactUs from "./contact-us";
function App() {
  return (
    <>
      <div className="body">
        <Nav></Nav>
        <Header></Header>
        <SlideInText></SlideInText>
        <TenYears></TenYears>
        <Card></Card>
        <Servizi></Servizi>
        <SiamofattiCosi></SiamofattiCosi>
        <CredonoInnoi></CredonoInnoi>
        <InostriSettori></InostriSettori>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
