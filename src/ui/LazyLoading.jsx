import { useState } from "react";

function LazyLoading({ LowQualityImg, highQualityImg, className = "" }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <img
        className={`${className} w-full border-2	border-stone-600  bg-cover shadow-md hover:scale-100`}
        src={highQualityImg}
        style={{
          display: isLoading ? "none" : "block",
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
      <img
        className={`${className} w-full bg-cover shadow-md blur-sm`}
        src={LowQualityImg}
        loading="lazy"
        style={{
          display: isLoading ? "block" : "none",
        }}
      />
    </>
  );
}

export default LazyLoading;
