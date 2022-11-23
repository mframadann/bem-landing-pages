import { CarouselControllerIcon } from "../../assets/compSvg";
import "../../assets/styles/global.css";

const CarouselControllerButton = ({ onClick, iconAlign }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 z-50 focus:ring-4 focus:ring-brand focus:ring-opacity-30 transition-all duration-300 bg-transparent flex items-center justify-center border-2 rounded-full border-brand"
    >
      {iconAlign == "right" ? (
        <CarouselControllerIcon className="rotate-180" />
      ) : (
        <CarouselControllerIcon />
      )}
    </button>
  );
};

export default CarouselControllerButton;
