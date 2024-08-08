import React from "react";

// TypeScript Props Interface
interface ProjectTagProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full border-2 px-6 py-1 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
