import React, { useEffect, useRef, useState } from "react";
import { useRouteMatch } from "react-router";
import { useSpring, animated, useChain, useSpringRef } from "react-spring/web";

import { SVG_LETTERS } from "constants/letters";

import styles from "./LetterExposition.module.scss";

interface UrlParams {
  letter: string;
}

const whiteColor = "255,255,255";

const LetterExposition: React.FC = () => {
  const { params } = useRouteMatch<UrlParams>();

  const pathRef = useRef<SVGPathElement>(null);
  const dashValuesRef = useSpringRef();
  const fillValuesRef = useSpringRef();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(pathRef?.current?.getTotalLength() || 0);
  }, []);

  const { dash } = useSpring({
    reset: true,
    reverse: true,
    from: { dash: 0 },
    to: { dash: offset },
    config: { duration: 2000 },
    ref: dashValuesRef,
  });

  const { fill } = useSpring({
    reset: true,
    reverse: true,
    from: { fill: `rgba(${whiteColor}, 1)` },
    to: { fill: `rgba(${whiteColor}, 0)` },
    config: { duration: 2000 },
    ref: fillValuesRef,
  });

  useChain([dashValuesRef, fillValuesRef], [0, 1]);

  const letterConfig = SVG_LETTERS.find((letterConfig) => letterConfig.letter === params.letter);

  if (!letterConfig) {
    // TODO: what to do here
    return null;
  }

  const { viewBox, path } = letterConfig;

  return (
    <div className={styles.container}>
      <div className={styles.letter}>
        <svg width="400" height="400" viewBox={viewBox}>
          <animated.g fill="transparent" stroke="#fff" strokeWidth={0.25}>
            <animated.path fill={fill} ref={pathRef} strokeDasharray={offset} strokeDashoffset={dash} d={path} />
          </animated.g>
        </svg>
      </div>
    </div>
  );
};

export { LetterExposition };
