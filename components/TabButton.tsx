import React, { ReactNode } from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="mr-3 font-semibold hover:text-white">
      <p className={buttonClasses}>{children}</p>
    </button>
  );
};

export default TabButton;
