import "./App.css";
import Navbar from "./components/navBar/Navbar";

import Footer from "./components/footer/Footer";
import AnnonceDetails from "./components/annonceDetails/AnnonceDetails";
import RelatedAnnonace from "./components/relatedAnnonce/RelatedAnnonace";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnnonceDetails />
      <Footer />
    </div>
  );
}

export default App;
