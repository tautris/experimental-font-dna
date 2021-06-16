import React from "react";
import { Switch, Route, Redirect, useLocation, generatePath } from "react-router-dom";

import { Header } from "components/Header/Header";
import { HomePage } from "components/HomePage/HomePage";
import { Footer } from "components/Footer/Footer";
import { PageBackground } from "components/PageBackground/PageBackground";
import { PageTransition } from "components/PageTransition/PageTransition";
import { About } from "components/About/About";
import { Alphabet } from "components/Alphabet/Alphabet";
import { LetterExposition } from "components/LetterExposition/LetterExposition";
import { GenomeFont } from "components/GenomeFont/GenomeFont";

import { PATH } from "constants/paths";
import { LanguageType } from "constants/language";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const { pathname } = useLocation();

  const isHomePage = pathname === PATH.HOME;

  return (
    <PageTransition>
      <PageBackground isHomePage={isHomePage}>
        <Header isHomePage={isHomePage} />
        <div className={isHomePage ? styles["home-page-section"] : styles.section}>
          <Switch>
            <Route path={PATH.HOME} exact={true}>
              <HomePage />
            </Route>
            <Route path={PATH.LETTER}>
              <LetterExposition />
            </Route>
            <Route path={PATH.ALPHABET_WITH_LANGUAGE}>
              <Alphabet />
            </Route>
            <Route path={PATH.GENOME_FONT}>
              <GenomeFont />
            </Route>
            <Route path={PATH.ABOUT}>
              <About />
            </Route>
            <Redirect
              path={PATH.ALPHABET}
              to={generatePath(PATH.ALPHABET_WITH_LANGUAGE, { language: LanguageType.LT })}
            />
            <Redirect to={PATH.HOME} />
          </Switch>
        </div>
        {!isHomePage && <Footer />}
      </PageBackground>
    </PageTransition>
  );
};

export { App };
