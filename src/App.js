import React from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import AnnounceDetialsPage from "./pages/AnnounceDetialsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnnounceDetialsPage />
      <Footer />
    </div>
  );
}

export default App;
