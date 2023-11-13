import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <header>
          <div>
            <p>ElodieF</p>
            <Header />
          </div>
          <div>
            <Navigation />
            <img src="/elodie.png" alt="avatar" />
          </div>
        </header>
        <main>
          <section id="home">Home</section>
          <section id="career">ici career</section>
          <section id="skills">ici skills</section>
          <section id="contact">ici contact</section>
        </main>
      </>
    </ThemeProvider>
  );
};

export default App;
