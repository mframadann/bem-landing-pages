import { Check } from "../../assets/compSvg";

const CheckLabel = () => {
  return (
    <div className="lg:w-6 lg:h-6 hidden rounded-full lg:flex items-center justify-center absolute bottom-0 -right-1 lg:left-16 lg:-bottom-7 bg-brand">
      <Check />
    </div>
  );
};

export default CheckLabel;
