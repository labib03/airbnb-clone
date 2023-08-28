"use client";

import { IconType } from "react-icons";

interface Props {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  Icon?: IconType;
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-rose-500 text-white"
      } ${
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2"
      }`}
    >
      <span className="flex gap-2 items-center justify-center">
        <span>{Icon && <Icon size={24} className="" />}</span>
        <span className="text-sm xl:text-base">{label}</span>
      </span>
    </button>
  );
};

export default Button;
