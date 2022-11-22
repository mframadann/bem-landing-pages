const SectionLabel = ({ title }) => {
  return (
    <div className="w-44 rounded-full h-9 flex items-center justify-center bg-brand bg-opacity-20">
      <h1 className="text-base font-semibold text-brand">{title}</h1>
    </div>
  );
};

export default SectionLabel;
