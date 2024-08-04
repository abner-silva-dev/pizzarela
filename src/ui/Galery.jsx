import LazyLoading from "./LazyLoading";

import imgPizza1 from "./../assets/optimized/pizza-opt-1.jpg";
import imgPizza2 from "./../assets/optimized/pizza-opt-2.jpg";
import imgPizza3 from "./../assets/optimized/pizza-opt-3.jpg";
import imgPizza4 from "./../assets/optimized/pizza-opt-4.jpg";
import imgPizza5 from "./../assets/optimized/pizza-opt-5.jpg";
import imgPizza6 from "./../assets/optimized/pizza-opt-6.jpg";
import imgPizza7 from "./../assets/optimized/pizza-opt-7.jpg";
import imgPizza8 from "./../assets/optimized/pizza-opt-8.jpg";
import imgPizza9 from "./../assets/optimized/pizza-opt-9.jpg";

import imgPizzaLow1 from "./../assets/low/pizza-low-1.png";
import imgPizzaLow2 from "./../assets/low/pizza-low-2.png";
import imgPizzaLow3 from "./../assets/low/pizza-low-3.jpg";
import imgPizzaLow4 from "./../assets/low/pizza-low-4.png";
import imgPizzaLow5 from "./../assets/low/pizza-low-5.png";
import imgPizzaLow6 from "./../assets/low/pizza-low-6.png";
import imgPizzaLow7 from "./../assets/low/pizza-low-7.png";
import imgPizzaLow8 from "./../assets/low/pizza-low-8.png";
import imgPizzaLow9 from "./../assets/low/pizza-low-9.png";

function Galery() {
  return (
    <div className="grid grid-cols-3 gap-3 justify-self-center">
      <LazyLoading LowQualityImg={imgPizzaLow4} highQualityImg={imgPizza4} />
      <LazyLoading LowQualityImg={imgPizzaLow5} highQualityImg={imgPizza5} />
      <LazyLoading LowQualityImg={imgPizzaLow6} highQualityImg={imgPizza6} />

      <LazyLoading LowQualityImg={imgPizzaLow1} highQualityImg={imgPizza1} />
      <LazyLoading LowQualityImg={imgPizzaLow2} highQualityImg={imgPizza2} />
      <LazyLoading LowQualityImg={imgPizzaLow3} highQualityImg={imgPizza3} />

      <LazyLoading LowQualityImg={imgPizzaLow7} highQualityImg={imgPizza7} />
      <LazyLoading LowQualityImg={imgPizzaLow8} highQualityImg={imgPizza8} />
      <LazyLoading LowQualityImg={imgPizzaLow9} highQualityImg={imgPizza9} />
    </div>
  );
}

export default Galery;
