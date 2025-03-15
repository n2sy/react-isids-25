import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./store/LoginContext.jsx";
import FavouriteContextProvider from "./store/FavouriteContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </FavouriteContextProvider>
  </LoginContextProvider>
);
