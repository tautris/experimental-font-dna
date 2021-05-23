import React from "react";

import geneticProcessesMP4 from "./genetic_processes.mp4";
import geneticProcessesOGG from "./genetic_processes.ogg";

const App: React.FC = () => {
  return (
    <div>
      <video width="75%" autoPlay={true} muted={true} loop={true}>
        <source src={geneticProcessesMP4} type="video/mp4" />
        <source src={geneticProcessesOGG} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export { App };
