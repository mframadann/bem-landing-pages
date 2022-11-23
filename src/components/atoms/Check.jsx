import { Check } from "../../assets/compSvg";

const CheckLabel = () => {
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center absolute -bottom-3 bg-brand">
      <Check />
    </div>
  );
};

export default CheckLabel;
