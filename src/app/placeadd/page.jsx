"use client";
import Image from "next/image";
import React, { useState } from "react";
import car from "/public/main.png";
import locationpic from "/public/location-67.svg";
import uploadpic from "/public/upload-29.svg";
import tag from "/public/tag-92.svg";
import GetLocationFromCoordinates from "@/components/GetLocationFromCoordinates";
import AddAlertIcon from "@mui/icons-material/AddAlert";

const PlaceAdd = () => {
  const [productImage, setProductImage] = useState("");
  const [location, setLocation] = useState(null);
  const [locationx, setLocationx] = useState(null);
  //location functionality
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocationx({ latitude, longitude });
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }

  const getLocation = async () => {
    const locationData = await GetLocationFromCoordinates(
      locationx.latitude,
      locationx.longitude
    );
    setLocation(locationData.location);
    console.log(locationData.locality.long_name + "fff");
    setCarData((prevData) => ({
      ...prevData,
      city: locationData.locality.long_name,
    }));
  };

  const [carData, setCarData] = useState({
    make: "",
    model: "",
    city: "",
    year: "",
    price: "",
    mileage: "",
    transmission: "",
    fuelType: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files;
    if (file.length > 10) {
      alert("Images cannot be more than 10");
      return;
    }
    for (let i = 0; i < file.length; i++) {
      Transformfile(file[i]);
    }
  };

  const Transformfile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage((prevDataList) => [...prevDataList, reader.result]);
      };
    }
    // } else {
    //   setProductImage("");
    // }
  };

  const handleSubmit = async () => {
    const url = "http://localhost:3000/api/cardata";
    const data = {
      make: carData.make,
      model: carData.model,
      city: carData.city,
      year: carData.year,
      price: carData.price,
      mileage: carData.mileage,
      transmission: carData.transmission,
      fuelType: carData.fuelType,
      description: carData.description,
      location: locationx,
      image: productImage,
    };
    console.log(data.image);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        console.log("response not ok");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-20 mb-8 ">
        <h1 className="text-2xl text-emerald-800 font-extrabold">
          Sell your Car With 3 Easy & Simple Steps!
        </h1>
        <h3 className="text-2xl text-purple-900 mb-4">
          It's free and takes less than a minute
        </h3>
        <div className="flex justify-center">
          <div className="flex  justify-center items-center gap-1 w-[20%]">
            <Image src={car} className="w-[25%]" />
            <span className="text-gray-500">Enter Your Car Information</span>
          </div>
          <div className="flex  justify-center items-center gap-1 w-[20%]">
            <Image src={uploadpic} className="w-[25%]" />
            <span className="text-gray-500">Upload Photos</span>
          </div>
          <div className="flex  justify-center items-center gap-1 w-[20%]">
            <Image src={tag} className="w-[25%]" />
            <span className="text-gray-500">Enter Your Selling Price</span>
          </div>
        </div>
      </div>

      <div className="w-[90vw] mx-auto p-4 shadow-md  mb-10 mt-16">
        <label className="bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-lg p-4">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
          <span className="text-lg font-semibold">Select an Image</span>
        </label>
        <span className="text-gray-500 items-center">
          <AddAlertIcon className="text-red-700" />
          Maximum 10
        </span>
        <div className="mt-5">
          {productImage && (
            <div className="grid grid-cols-3 xl:grid-cols-6">
              {productImage.map((item) => (
                <Image
                  src={item}
                  width={150}
                  height={150}
                  alt="Picture of the author"
                />
              ))}
            </div>
          )}
          <div>
            <button
              onClick={getLocation}
              className="bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-lg p-4 flex justify-between gap-1 "
            >
              <span>Get Location</span>
              <Image src={locationpic} width={20} />
            </button>
            {location && <div>Location: {location}</div>}
          </div>
        </div>
        <input
          type="text"
          name="make"
          value={carData.make}
          onChange={handleChange}
          placeholder="Make"
          className="w-full px-4 py-2 mb-2 border rounded mt-2"
        />
        <input
          type="text"
          name="model"
          value={carData.model}
          onChange={handleChange}
          placeholder="Model"
          className="w-full px-4 py-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="city"
          value={carData.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full px-4 py-2 mb-2 border rounded"
        />
        <input
          type="number"
          name="year"
          value={carData.year}
          onChange={handleChange}
          placeholder="Year"
          className="w-full px-4 py-2 mb-2 border rounded"
        />
        <input
          type="number"
          name="price"
          value={carData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full px-4 py-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="mileage"
          value={carData.mileage}
          onChange={handleChange}
          placeholder="Mileage/L"
          className="w-full px-4 py-2 mb-2 border rounded"
        />

        {/* <label className="block text-sm font-medium text-gray-700 mb-2">
        Transmission
      </label> */}
        <select
          name="transmission"
          value={carData.transmission}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-2 border rounded"
        >
          <option value="">Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        <select
          name="fuelType"
          value={carData.fuelType}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-2 border rounded"
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          {/* Add more options if needed */}
        </select>

        <textarea
          name="description"
          value={carData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-4 py-2 mb-2 border rounded"
        />
        <div className="flex flex-col justify-center items-center">
          <button
            className=" text-lg text-white bg-blue-600 rounded-full shadow-md px-4  p-2 hover:shadow-blue-400 "
            onClick={handleSubmit}
          >
            Post Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceAdd;