import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";


const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
