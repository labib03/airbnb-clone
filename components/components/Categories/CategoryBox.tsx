"use client";
import cn from "@src/libs/cn";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

type CategoryBoxType = {
  icon: IconType;
  label: string;
  selected?: boolean;
};

const CategoryBox: React.FC<CategoryBoxType> = (props) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: props.label,
    };

    if (params?.get("category") === props.label) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [props.label, params, router]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-3 border-b-2 transition cursor-pointer",
        "hover:text-neutral-800",
        props.selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      )}
      onClick={handleClick}
    >
      <props.icon size={26} />
      <div className={cn("font-medium text-sm")}>{props.label}</div>
    </div>
  );
};

export default CategoryBox;
