import Nav from "../components/nav/nav";
import Header from "../components/header/header";
import BackgroundABout from "../components/backgroundAbout/backgroundAbout";
import AboutMe from "../components/AboutMe/aboutMe";
import Catchphrase1 from "../components/CatchPhrase/Catchphrase1/catchPhrase1";
import Catchphrase2 from "../components/CatchPhrase/Catchphrase2/catchPhrase2";
import MyPortfolio from "../components/MyPortfolio/myPortfolio";
import MyServices from "../components/Services/services";
import ContactMe from "../components/Contact/contact";
import Footer from "../components/footer/footer.jsx";

function homepage() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <BackgroundABout />
        <AboutMe />
        <Catchphrase1 />
        <Catchphrase2 />
        <MyPortfolio />
        <MyServices />
        <ContactMe />
      </main>
        <Footer />
    </>
  );
}

export default homepage;
