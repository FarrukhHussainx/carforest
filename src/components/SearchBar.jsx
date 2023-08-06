"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const router = useRouter();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (make.trim() === "" && model.trim() === "") {
      return alert("Please provide Make and Model");
    }

    updateSearchParams(make.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (make, model) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="ml-10 mt-6 mb-3 flex gap-2 ">
        <input
          className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 shadow-md focus:shadow-blue-400"
          type="text"
          name="make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="Toyota"
        />
        <input
          className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 shadow-md focus:shadow-blue-400"
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Cross"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
