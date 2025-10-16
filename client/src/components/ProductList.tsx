import { productsData } from "@/utils/dummyData";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import { ProductDataType } from "@/utils/types";

const ProductList = () => {
  return (
    <div className="w-full">
      <Categories />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-16">
        {productsData.map((product: ProductDataType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
