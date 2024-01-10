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

// function Galery() {
//   return (
//     <div className="grid grid-cols-3 grid-rows-[150px_120px_120px_120px] items-stretch justify-center	gap-3 max-md:hidden ">
//       <LazyLoading
//         LowQualityImg={imgPizzaLow4}
//         highQualityImg={imgPizza4}
//         className="col-span-2 bg-cover"
//       />
//       <LazyLoading
//         LowQualityImg={imgPizzaLow5}
//         highQualityImg={imgPizza5}
//         className="row-span-2"
//       />
//       <LazyLoading LowQualityImg={imgPizzaLow6} highQualityImg={imgPizza6} />

//       <LazyLoading LowQualityImg={imgPizzaLow1} highQualityImg={imgPizza1} />
//       <LazyLoading LowQualityImg={imgPizzaLow2} highQualityImg={imgPizza2} />
//       <LazyLoading LowQualityImg={imgPizzaLow3} highQualityImg={imgPizza3} />

//       <LazyLoading LowQualityImg={imgPizzaLow7} highQualityImg={imgPizza7} />
//       <LazyLoading LowQualityImg={imgPizzaLow8} highQualityImg={imgPizza8} />
//       <LazyLoading
//         LowQualityImg={imgPizzaLow9}
//         highQualityImg={imgPizza9}
//         className="col-span-2"
//       />
//     </div>
//   );
// }

// export default Galery;

// import LazyLoading from "./LazyLoading";

// import imgPizza1 from "./../assets/optimized/pizza-opt-1.jpg";
// import imgPizza2 from "./../assets/optimized/pizza-opt-2.jpg";
// import imgPizza3 from "./../assets/optimized/pizza-opt-3.jpg";
// import imgPizza4 from "./../assets/optimized/pizza-opt-4.jpg";
// import imgPizza5 from "./../assets/optimized/pizza-opt-5.jpg";
// import imgPizza6 from "./../assets/optimized/pizza-opt-6.jpg";
// import imgPizza7 from "./../assets/optimized/pizza-opt-7.jpg";
// import imgPizza8 from "./../assets/optimized/pizza-opt-8.jpg";
// import imgPizza9 from "./../assets/optimized/pizza-opt-9.jpg";

// import imgPizzaLow1 from "./../assets/low/pizza-low-1.png";
// import imgPizzaLow2 from "./../assets/low/pizza-low-2.png";
// import imgPizzaLow3 from "./../assets/low/pizza-low-3.jpg";
// import imgPizzaLow4 from "./../assets/low/pizza-low-4.png";
// import imgPizzaLow5 from "./../assets/low/pizza-low-5.png";
// import imgPizzaLow6 from "./../assets/low/pizza-low-6.png";
// import imgPizzaLow7 from "./../assets/low/pizza-low-7.png";
// import imgPizzaLow8 from "./../assets/low/pizza-low-8.png";
// import imgPizzaLow9 from "./../assets/low/pizza-low-9.png";

function Galery() {
  return (
    <div className="flex w-full flex-wrap justify-end gap-4 max-md:hidden ">
      <div className="flex basis-1/4 flex-col gap-4 shadow-sm	">
        <LazyLoading LowQualityImg={imgPizzaLow4} highQualityImg={imgPizza4} />
        <LazyLoading LowQualityImg={imgPizzaLow5} highQualityImg={imgPizza5} />
        <LazyLoading LowQualityImg={imgPizzaLow6} highQualityImg={imgPizza6} />
      </div>
      <div className="flex basis-1/4 flex-col gap-4">
        <LazyLoading LowQualityImg={imgPizzaLow1} highQualityImg={imgPizza1} />
        <LazyLoading LowQualityImg={imgPizzaLow2} highQualityImg={imgPizza2} />
        <LazyLoading LowQualityImg={imgPizzaLow3} highQualityImg={imgPizza3} />
      </div>
      <div className="flex basis-1/4 flex-col gap-4">
        <LazyLoading LowQualityImg={imgPizzaLow7} highQualityImg={imgPizza7} />
        <LazyLoading LowQualityImg={imgPizzaLow8} highQualityImg={imgPizza8} />
        <LazyLoading LowQualityImg={imgPizzaLow9} highQualityImg={imgPizza9} />
      </div>
    </div>
  );
}

export default Galery;
