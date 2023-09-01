"use client";
import cn from "@src/libs/cn";
import { IconType } from "react-icons";

interface PropsType {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

function CategoryInput(props: PropsType) {
  const { icon: Icon, label, onClick, selected } = props;
  return (
    <div
      onClick={() => onClick(label)}
      className={cn(
        "rounded-xl border-2 p-4 flex flex-col gap-3 transition duration-200 hover:border-black hover:cursor-pointer",
        selected
          ? "border-black justify-center items-center"
          : "border-neutral-200"
      )}
    >
      <Icon size={30} />
      <h1 className="font-semibold">{label}</h1>
    </div>
  );
}

export default CategoryInput;
