import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-4">
        <Image src={"/featured.png"} alt="featured_product" fill />
      </div>
    </div>
  );
}
