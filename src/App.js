import React from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import PostDetialsPage from "./pages/PostDetialsPage";
import Review from "./components/review/Review";
import { AccountBox } from "./components/accountBox";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Review} />
        <Route path="/signup" component={AccountBox} />
        <Route path="/announce-details/:postId" component={PostDetialsPage} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
