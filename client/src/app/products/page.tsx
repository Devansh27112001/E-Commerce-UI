import ProductList from "@/components/ProductList";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <ProductList category={category} />
    </div>
  );
};

export default page;
