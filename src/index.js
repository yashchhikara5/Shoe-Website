import ReactDOM from "react-dom/client";
import App from "./App";
import Items from "./Components/Items";
import Cart from "./Components/Cart";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <>
    <App />
  </>
);
