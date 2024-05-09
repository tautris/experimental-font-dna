import React from "react";
import { Route, useLocation, generatePath, Routes, Navigate } from "react-router-dom";

import { Header } from "@/components/Header/Header";
import { HomePage } from "@/components/HomePage/HomePage";
import { Footer } from "@/components/Footer/Footer";
import { PageBackground } from "@/components/PageBackground/PageBackground";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { About } from "@/components/About/About";
import { Alphabet } from "@/components/Alphabet/Alphabet";
import { LetterExposition } from "@/components/LetterExposition/LetterExposition";
import { GenomeFont } from "@/components/GenomeFont/GenomeFont";

import { PATH } from "@/constants/paths";
import { LanguageType } from "@/constants/language";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const { pathname } = useLocation();

  const isHomePage = pathname === PATH.HOME;

  return (
    <PageTransition>
      <PageBackground>
        <Header isHomePage={isHomePage} />
        <div className={isHomePage ? styles["home-page-section"] : styles.section}>
          <Routes>
            {/*TODO: Nest properly according to new react router standard */}
            <Route path={PATH.HOME} element={<HomePage />} />
            <Route path={PATH.LETTER} element={<LetterExposition />}></Route>
            <Route path={PATH.ALPHABET_WITH_LANGUAGE} element={<Alphabet />}></Route>
            <Route
              path={PATH.ALPHABET}
              element={<Navigate to={generatePath(PATH.ALPHABET_WITH_LANGUAGE, { language: LanguageType.LT })} />}
            />
            <Route path={PATH.GENOME_FONT} element={<GenomeFont />}></Route>
            <Route path={PATH.ABOUT} element={<About />}></Route>
            <Route element={<Navigate to={PATH.HOME} />} />
          </Routes>
        </div>
        {!isHomePage && <Footer />}
      </PageBackground>
    </PageTransition>
  );
};

export { App };
