"use client";
import { categories } from "@src/helpers/constants/options";
import Container from "../Container/Container";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="relative pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item, idx) => (
          <CategoryBox
            key={idx}
            icon={item.icon}
            label={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
