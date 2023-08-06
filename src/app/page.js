import AAA from "@/components/AAA";
import GetData from "@/components/GetData";
import Hero from "@/components/Hero";
import { InputT } from "@/components/InaputT";
import SearchBar from "@/components/SearchBar";

import Image from "next/image";

export default function Home({ searchParams }) {
  const allCarsBySearch = {
    make: searchParams?.make || "",
    //   year: searchParams.year || 2022,
    //   fuel: searchParams.fuel || "",
    page: searchParams.page || 1,
    limit: searchParams.limit || 4,
    model: searchParams?.model || "",
    location: searchParams?.location || "",
    min: searchParams?.min || "",
    max: searchParams?.max || "",
    year: searchParams?.year || "",
  };
  return (
    <>
      <AAA />
      <div className="flex justify-between mb-10 mt-2 h-28 items-center ">
        <SearchBar />
        <InputT />
      </div>

      <GetData allCarsBySearch={allCarsBySearch} />
    </>
  );
}
