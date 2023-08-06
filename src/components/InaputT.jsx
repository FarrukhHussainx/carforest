"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function InputT() {
  const router = useRouter();
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleFilterChange = (e) => {
    e.preventDefault();
    updateSearchParams(
      minPrice.toLowerCase(),
      maxPrice.toLowerCase(),
      selectedYear.toLowerCase()
    );
  };
  const updateSearchParams = (minPrice, maxPrice, selectedYear) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (minPrice) {
      searchParams.set("min", minPrice);
    } else {
      searchParams.delete("min");
    }
    if (maxPrice) {
      searchParams.set("max", maxPrice);
    } else {
      searchParams.delete("max");
    }
    if (selectedYear) {
      searchParams.set("year", selectedYear);
    } else {
      searchParams.delete("year");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div className="flex items-center space-x-4 mr-10">
      <input
        type="number"
        className="w-24 px-2 py-1 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md focus:shadow-blue-400"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        className="w-24 px-2 py-1 text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md focus:shadow-blue-400"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <select
        className="px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 shadow-md focus:shadow-blue-400"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Select Year</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        {/* Add more options as needed */}
      </select>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 shadow-md focus:shadow-blue-400"
        onClick={handleFilterChange}
      >
        Filter
      </button>
    </div>
  );
}
