import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import ListeAnnoncesPage from "./pages/ListeAnnoncesPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ListeAnnoncesPage/>
      <Footer />
    </div>
  );
}

export default App;
