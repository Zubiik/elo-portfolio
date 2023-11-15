import React from "react";
import { ThemeProvider } from "@emotion/react";
import Navigation from "./components/Navigation";
import { HeaderContainer, ProfilImg, AppContainer } from "./styled";
import Header from "./components/Header";
import { theme } from "./theme";
import About from "./anchor/About";
import Skills from "./anchor/Skills";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navigation />
        <HeaderContainer>
          <div>
            <Header />
          </div>
          <div>
            <ProfilImg src="../../images/elodie.png" alt="avatar" />
          </div>
        </HeaderContainer>
        <main>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </main>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
