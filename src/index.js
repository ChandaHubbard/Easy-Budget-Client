import React from "react";
import ReactDOM from "react-dom";
// import { library } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer"
import Routes from "./routes/Routes";
import App from "./App";
import "./index.css";
// import {
//   faPlus, faChevronLeft, faTrashAlt, faCheckDouble
// } from '@fortawesome/free-solid-svg-icons'

// library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

ReactDOM.render(
  <BrowserRouter>
      <Navigation />
      <App />
      <Routes />
      <Footer/>
  </BrowserRouter>,
  document.getElementById("root")
);
