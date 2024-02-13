import React from "react";

import geneticProcessesMP4 from "@/assets/videos/genetic_processes.mp4";
import geneticProcessesOGG from "@/assets/videos/genetic_processes.ogg";
import geneticProcessesPoster from "@/assets/images/genetic_processes_poster.jpeg";

import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* TODO: add poster attribute some element to show image as a fallback */}
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        disablePictureInPicture={true}
        className={styles.video}
        poster={geneticProcessesPoster}
      >
        <source src={geneticProcessesMP4} type="video/mp4" />
        <source src={geneticProcessesOGG} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export { HomePage };
