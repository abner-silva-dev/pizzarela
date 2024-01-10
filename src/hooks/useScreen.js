import { useEffect, useState } from "react";

function getCurrentDimension() {
  return {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  };
}

export function useScreen() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  });

  return screenSize;
}
