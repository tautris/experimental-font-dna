import React, { useEffect, useRef, useState } from "react";
import { useSprings, animated } from "react-spring/web";

import { SvgLetterConfig } from "models/letter-config";

import styles from "./LetterExpositionContent.module.scss";

interface Props {
  letterConfig: SvgLetterConfig;
}

const whiteColor = "255,255,255";

const LetterExpositionContent: React.FC<Props> = ({ letterConfig }) => {
  const { viewBox, paths, mutationPaths } = letterConfig;

  const pathRefs = useRef<(SVGPathElement | null)[]>(new Array(paths.length));
  const [offsets, setOffsets] = useState<number[]>(new Array(paths.length));

  useEffect(() => {
    setOffsets(pathRefs.current.map((path) => path?.getTotalLength() || 0));
  }, []);

  const dashSprings = useSprings(
    offsets.length,
    offsets.map((offset) => ({
      reset: true,
      reverse: true,
      from: { dash: 0 },
      to: { dash: offset },
      config: { duration: 2000 },
    }))
  );

  const fillSprings = useSprings(
    paths.length,
    paths.map(() => ({
      reset: true,
      reverse: true,
      from: { fill: `rgba(${whiteColor}, 1)` },
      to: { fill: `rgba(${whiteColor}, 0)` },
      config: { duration: 2000 },
      delay: 1000,
    }))
  );

  return (
    <div className={styles.container}>
      <div className={styles.letter}>
        <svg width="200" height="450" viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
          <g fill="transparent" stroke="#fff" strokeWidth={0.25}>
            {paths.map((path, index) => (
              <animated.path
                key={index}
                ref={(ref) => (pathRefs.current[index] = ref)}
                fill={fillSprings[index].fill}
                strokeDasharray={offsets[index]}
                strokeDashoffset={dashSprings[index].dash}
                d={path}
              />
            ))}
            {mutationPaths.map((path, index) => (
              <path key={index} fill="rgba(255, 0, 0, 0.5)" d={path} />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export { LetterExpositionContent };
