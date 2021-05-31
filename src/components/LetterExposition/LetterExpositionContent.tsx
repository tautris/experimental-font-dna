import React, { useEffect, useRef, useState } from "react";
import { useSpring, useSprings, animated } from "react-spring/web";

import { SvgLetterConfig } from "models/letter-config";

import styles from "./LetterExpositionContent.module.scss";

interface Props {
  letterConfig: SvgLetterConfig;
}

const WHITE_COLOR = "255,255,255";

const MUTATION_TEXT_CONFIG = {
  mutagen: "Mutagenas",
  trisomy: "Trisomija",
  monosomy: "Monosomija",
  point: "Genų taškinė mutacija",
};

const LetterExpositionContent: React.FC<Props> = ({ letterConfig }) => {
  const { viewBox, paths, mutationPaths, mutationType } = letterConfig;

  const pathRefs = useRef<(SVGPathElement | null)[]>(new Array(paths.length));

  const [offsets, setOffsets] = useState<number[]>(new Array(paths.length));

  useEffect(() => {
    setOffsets(pathRefs.current.map((path) => path?.getTotalLength() || 0));
  }, []);

  const [dashSprings] = useSprings(
    offsets.length,
    offsets.map((offset) => ({
      reset: true,
      reverse: true,
      from: { dash: 0 },
      to: { dash: offset },
      config: { duration: 2000 },
    })),
    [offsets]
  );

  const [fillSprings] = useSprings(
    paths.length,
    paths.map(() => ({
      reset: true,
      reverse: true,
      from: { fill: `rgba(${WHITE_COLOR}, 1)` },
      to: { fill: `rgba(${WHITE_COLOR}, 0)` },
      config: { duration: 2000 },
      delay: 1000,
    })),
    []
  );

  const { opacity: mutationOpacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
    delay: 3000,
  });

  const mutationText = MUTATION_TEXT_CONFIG[mutationType];

  return (
    <div className={styles.container}>
      <div className={styles.letter}>
        <animated.svg
          width="200"
          height="450"
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: mutationOpacity, position: "absolute" }}
        >
          <g>
            {mutationPaths.map(({ path, isStroke }, index) => {
              return (
                <path
                  key={index}
                  fill={isStroke ? "transparent" : `rgb(${WHITE_COLOR})`}
                  stroke={isStroke ? `rgb(${WHITE_COLOR})` : undefined}
                  strokeMiterlimit={10}
                  d={path}
                />
              );
            })}
          </g>
        </animated.svg>
        <animated.svg
          width="200"
          height="450"
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: mutationOpacity.to((opacity) => 1 - opacity) }}
        >
          <g fill="transparent">
            {paths.map((path, index) => (
              <animated.path
                key={index}
                stroke="#fff"
                strokeWidth={0.25}
                ref={(ref) => (pathRefs.current[index] = ref)}
                fill={fillSprings[index].fill}
                strokeDasharray={offsets[index]}
                strokeDashoffset={dashSprings[index].dash}
                d={path}
              />
            ))}
          </g>
        </animated.svg>
        <animated.div className={styles["mutation-type"]} style={{ opacity: mutationOpacity }}>
          {mutationText}
        </animated.div>
      </div>
    </div>
  );
};

export { LetterExpositionContent };
