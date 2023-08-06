import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "./ProductCard";
//import SeeMore from "./SeeMore";

async function fetchDataFromApi(allCarsBySearch) {
  const { make, model, page, limit, location, min, max, year } =
    allCarsBySearch;
  const res = await fetch(
    `http://localhost:3000/api/cardata?make=${make}&model=${model}&page=${page}&limit=${limit}&location=${location}&min=${min}&max=${max}&year=${year}`
  );

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("error");
  }

  const d = await res.json();
  return d;
}

const GetData = async ({ allCarsBySearch }) => {
  const data = await fetchDataFromApi(allCarsBySearch);
  //find length of data
  const keysArray = Object.keys(data);
  const c = keysArray.length;
  console.log(data);
  return (
    <>
      <div className="mt-4 mx-auto w-[88%] sm:w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 2xl:grid-cols-5">
        {/* isMember ? '$2.00' : '$10.00' */}
        {data ? (
          data.map((product) => <ProductCard data={product} />)
        ) : (
          <h1>Opps no single items</h1>
        )}
      </div>
      {/* <div className="flex flex-wrap ml-20 gap-6">
        {data.map((product) => (
          <div
            key={product._id}
            className="flex flex-col justify-between bg-slate-400 p-2"
          >
            <div className="flex justify-between mb-4">
              <h3>{product.make}</h3>
              <h3>{product.model}</h3>
              <h3>RS:{product.price}</h3>
            </div>
            <Image
              src={product.image.secure_url}
              alt={product.name}
              height={250}
              width={250}
            /> */}

      {/* <img src={product.image.secure_url} alt={product.name} /> */}
      {/* <Link href={`/${product._id}`}>
            <h2>{product.name}</h2>
          </Link> */}
      {/* </div>
        ))}
      </div> */}
      {/*suitable for pagination not for see more because it load
       <SeeMore data={c} /> */}
    </>
  );
};

export default GetData;
