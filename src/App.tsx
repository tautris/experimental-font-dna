import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import { Header } from "components/Header/Header";
import { HomePage } from "components/HomePage/HomePage";
import { Footer } from "components/Footer/Footer";
import { PageBackground } from "components/PageBackground/PageBackground";
import { PageTransition } from "components/PageTransition/PageTransition";
import { About } from "components/About/About";
import { Alphabet } from "components/Alphabet/Alphabet";

import { PATH } from "constants/paths";

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
            <Route path={PATH.ALPHABET}>
              <Alphabet />
            </Route>
            <Route path={PATH.GENOME_FONT}>
              <div>Genomo šriftas page</div>
            </Route>
            <Route path={PATH.ABOUT}>
              <About />
            </Route>
            <Route render={() => <Redirect to={PATH.HOME} />} />
          </Switch>
        </div>
        {!isHomePage && <Footer />}
      </PageBackground>
    </PageTransition>
  );
};

export { App };
