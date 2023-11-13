import React from "react";
import { ThemeProvider } from "@emotion/react";
import Navigation from "./components/Navigation";
import { HeaderContainer } from "./styled";
import Header from "./components/Header";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navigation />
        <HeaderContainer>
          <div>
            <Header />
          </div>
          <div>
            <img src="/elodie.png" alt="avatar" />
          </div>
        </HeaderContainer>
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
