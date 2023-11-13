import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Navigation from "./components/Navigation";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <section>ici presentation</section>
        <section />
        <Navigation />
        <p> nouveau portfolio</p>
      </>
    </ThemeProvider>
  );
};

export default App;
