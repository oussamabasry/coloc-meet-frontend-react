import React from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import PostDetialsPage from "./pages/PostDetialsPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/announce-details/:postId" component={PostDetialsPage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
