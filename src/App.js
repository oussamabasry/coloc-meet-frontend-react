import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import { useSelector } from "react-redux";
import PostDetialsPage from "./pages/PostDetialsPage";
import Review from "./components/review/Review";
import { AccountBox } from "./components/accountBox";
import { Router, Route, Switch } from "react-router-dom";
import { LoginForm } from "./components/accountBox/loginForm";
import ListeAnnoncesPage from "./pages/ListeAnnoncesPage";
import history from "./shared/history";
import SecureRoute from "./shared/SecureRoute";
import isLogin from "./shared/authorization";

import PostPage from "./components/postPage/PostPage";
import SideBarTest from "./components/sideBarTest/SideBarTest";
import Contact from "./components/contact/Contact";
import OurServices from "./components/ourServices/OurServices";
import Team from "./components/team/Team";

function App() {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  return (
    <div className="App">
      <Router history={history}>
        {isLogged ? <SideBarTest /> : <Navbar />}
        <Switch>
          <Route path="/" exact component={Review} />
          <Route path="/signup" component={AccountBox} />
          <Route path="/announces" component={ListeAnnoncesPage} />
          <Route path="/signin" component={LoginForm} />
          <Route path="/announce-details/:postId" component={PostDetialsPage} />
          <Route path="/contactas" component={Contact} />
          <Route path="/services" component={OurServices} />
          <Route path="/team" component={Team} />
          <SecureRoute path="/useraccount" component={PostPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
