"use client"; 

import React, { useState } from "react";
import Image from "next/image"
import galleryStyles from "../../../styles/gallery.module.css";

interface ScreenshotGalleryProps {
  screenshots: string[];
  projectTitle: string;
}

const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ screenshots, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextScreenshot = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className={galleryStyles.galleryContainer}>
      <button onClick={prevScreenshot} className={galleryStyles.galleryArrow}>
        &larr;
      </button>

      <img
        className={galleryStyles.screenshot}
        src={`/images/projects/${screenshots[currentIndex]}`}
        alt={`${projectTitle} screenshot ${currentIndex + 1}`}
      />

      <button onClick={nextScreenshot} className={galleryStyles.galleryArrow}>
        &rarr;
      </button>

      <div className={galleryStyles.galleryIndicator}>
        {currentIndex + 1} / {screenshots.length}
      </div>
    </div>
  );
};

export default ScreenshotGallery;
