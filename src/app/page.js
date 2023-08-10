import AAA from "@/components/AAA";
import GetData from "@/components/GetData";
import Hero from "@/components/Hero";
import { InputT } from "@/components/InaputT";
import NavBar from "@/components/NavBar";
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
      <NavBar />
      <AAA />
      <div className="flex xl:justify-between mb-10 mt-2 h-28 xl:items-center flex-col xl:flex-row">
        <SearchBar />
        <InputT />
      </div>

      <GetData allCarsBySearch={allCarsBySearch} />
    </>
  );
}
