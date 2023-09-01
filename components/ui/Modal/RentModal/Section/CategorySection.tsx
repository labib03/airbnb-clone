import { Heading, CategoryInput } from "@components/components";
import { categories } from "@src/helpers/constants/options";
import { FormRentModal } from "@src/types/modal.type";
import React from "react";

type PropsType = {
  setCustomValue: (id: keyof FormRentModal, value: any) => void;
  category: string;
};

function CategorySection(props: PropsType) {
  const { category, setCustomValue } = props;
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of the best describes your places"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
