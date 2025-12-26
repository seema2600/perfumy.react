import React from "react";
import ReactDOM from "react-dom/client"
import"./style.css"
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import Navbar from "./components/Navbar";
import Search from "./components/search";
import Products from "./components/search";
import About from "./components/about";
import Footer from "./components/footer";
import App from "./App";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





