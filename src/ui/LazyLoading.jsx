import { useState } from "react";

function LazyLoading({ LowQualityImg, highQualityImg, className = "" }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="overflow-hidden">
      <img
        className={`${className} bort block h-[15rem] w-[100%] border-2 border-red-100 shadow-md transition-all hover:scale-[1.1]`}
        src={isLoading ? highQualityImg : LowQualityImg}
        loading="lazy"
        onLoad={() => {
          setIsLoading(true);
        }}
      />
    </div>
  );
}

export default LazyLoading;
