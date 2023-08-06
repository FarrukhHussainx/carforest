"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBarLocation = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSearchParams(location.toLowerCase());
  };

  const updateSearchParams = (location) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (location) {
      searchParams.set("location", location);
    } else {
      searchParams.delete("location");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="ml-10 mt-6 mb-3">
        <input
          className="border border-red-500 rounded p-1 mr-2"
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Soan"
        />
        <button type="submit">🔍</button>
      </div>
    </form>
  );
};

export default SearchBarLocation;
