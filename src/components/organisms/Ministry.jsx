import { Kemenristek } from "../../assets/images";
import { SectionLabel } from "../atoms";
import { CardMinistry } from "../molecules";

const MinistrySection = () => {
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div
      id="ministry"
      className="w-full bg-gradient-to-t from-[#F8F1FD] to-secondary dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-900"
    >
      <div className="w-full max-w-6xl py-20 mx-auto">
        <div className="flex flex-col w-full max-w-md gap-4 items-center mx-auto">
          <SectionLabel title="Kementtrian" />
          <h1 className="text-2xl lg:text-4xl dark:text-gray-300 text-center font-bold leading-normal">
            Struktur kementrian bem stmik ikmi cirebon
          </h1>
        </div>
        <div className="grid w-full lg:grid-cols-4 gap-4 md:grid-cols-3 lg:gap-8 px-6 lg:px-0 py-20">
          {items.map((item) => (
            <CardMinistry image={Kemenristek} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinistrySection;
