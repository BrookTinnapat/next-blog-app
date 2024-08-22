import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Featured />
      <CategoryList />
      <CardList />
    </>
  );
}
