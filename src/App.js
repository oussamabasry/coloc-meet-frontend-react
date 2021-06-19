import React from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import PostDetialsPage from "./pages/PostDetialsPage";
import Review from "./components/review/Review";
import { AccountBox } from "./components/accountBox";
import { BrowserRouter, Route } from "react-router-dom";
import { LoginForm } from "./components/accountBox/loginForm";
import ListeAnnoncesPage from "./pages/ListeAnnoncesPage";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import reducers from "./reducers/index";
import PostPage from "./components/postPage/PostPage";

function App() {

  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Route path="/" exact component={Review} />
          <Route path="/signup" component={AccountBox} />
          <Route path="/announces" component={ListeAnnoncesPage} />
          <Route path="/signin" component={LoginForm} />
          <Route path="/announce-details/:postId" component={PostDetialsPage} />
          <Route path="/useraccount" component={PostPage} />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
