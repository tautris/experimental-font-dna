import React from "react";
import { useRouteMatch } from "react-router";

import { SVG_LETTERS } from "constants/letters";

import { LetterExpositionContent } from "./LetterExpositionContent";

interface UrlParams {
  letter: string;
}

const LetterExposition: React.FC = () => {
  const { params } = useRouteMatch<UrlParams>();

  const letterConfig = SVG_LETTERS.find((letterConfig) => letterConfig.letter === params.letter);

  if (!letterConfig) {
    // TODO: what to do here
    return null;
  }

  return <LetterExpositionContent letterConfig={letterConfig} />;
};

export { LetterExposition };
