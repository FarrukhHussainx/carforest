"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SeeMore = (props) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(props.data + 4);
  const handleMoreItems = async (e) => {
    console.log(props.data);
    e.preventDefault();
    setPage(() => page + 1);
    setLimit(() => limit + 4);
    // //pagination
    //     searchParams.set("page", page);
    //     searchParams.set("limit", limit);
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("limit", limit);

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <button
        className="text-white bg-blue-800 rounded-md m-6 p-1"
        onClick={handleMoreItems}
      >
        See more
      </button>
    </div>
  );
};

export default SeeMore;
