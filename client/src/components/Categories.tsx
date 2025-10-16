"use client";

import { categories } from "@/utils/dummyData";
import { CategoryDataType } from "@/utils/types";
import { useSearchParams } from "next/navigation";

const Categories = () => {
  const searchParams = useSearchParams();
  const selectedCat = searchParams.get("category");
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-4 text-sm bg-gray-100 p-2 rounded-lg">
      {categories.map((category: CategoryDataType) => (
        <div
          key={category.name}
          className={`${
            category.name === selectedCat && `bg-gray-200`
          } flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md`}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
