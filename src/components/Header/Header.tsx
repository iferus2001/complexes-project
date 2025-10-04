import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./Arrows";
const Header = () => {
  const images = ["/bg.png", "/bg2.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <header className="relative w-screen h-[468px] overflow-hidden">
      <h1 className="absolute  top-1/11 start-1/2 -translate-x-1/2 text-3xl text-center z-10">
        Company Logo
      </h1>
      <h1 className="absolute bottom-1/2 start-1/2 -translate-x-1/2 text-4xl text-center  text-white z-10">
        Test Slider
      </h1>

      <img
        src="/Bottom.svg"
        className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-10"
        style={{ width: "95%" }}
        alt="Bottom decoration"
      />

      <img
        src={images[currentIndex]}
        alt={`Слайд ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      <button
        onClick={goToPrevious}
        className="absolute start-5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer z-10"
      >
        <ArrowLeft className="w-10 h-10 text-white hover:text-gray-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute end-5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer z-10"
      >
        {" "}
        <ArrowRight className="w-10 h-10 text-white hover:text-gray-300" />
      </button>
    </header>
  );
};

export default Header;
