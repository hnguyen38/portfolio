import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {NetflixProvider} from './context/netflixContext';
import {WeatherProvider} from './context/weatherContext';
import { BookProvider } from "./context/bookContext";

ReactDOM.render(
  <React.StrictMode>
    <NetflixProvider>
      <BookProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
      </BookProvider>
    </NetflixProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
