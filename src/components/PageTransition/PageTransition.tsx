import React from "react";
import { useLocation } from "react-router-dom";
import { animated, config, useTransition } from "react-spring";

interface Props {
  children: React.ReactNode;
}

const PageTransition: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  const transitions = useTransition(pathname, {
    config: config.default,
    from: { opacity: 0.8 },
    enter: { opacity: 1 },
  });

  return transitions((props) => <animated.div style={props}>{children}</animated.div>);
};

export { PageTransition };
