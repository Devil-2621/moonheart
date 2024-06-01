import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "", icon }) => {
  return (
    <button
      className={`relative focus:outline-none px-4 py-2 ${className} group`}
      onClick={onClick}
    >
      <span className="flex items-center">
        {label}
        <div>
        {icon}
        </div>
      </span>
    </button>
  );
};

export default Button;
